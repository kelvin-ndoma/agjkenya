import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

// Constants
const ALLOWED_CATEGORIES = ['AGJ Awards', 'Youth Voices', 'Journalists to Poland', 'AGJ News'];
const AWARDS_SUBCATEGORIES = ['Awards 2022', 'Awards 2023', 'Awards 2024', 'Awards 2025'];
const AWARD_TYPES = [
  'Health Reporting',
  'Investigative Reporting',
  'Environment And Climate Change Reporting',
  'Governance And Advocacy',
  'Technology Innovations And Business Reporting',
  'Gender Reporting',
  'Sports And Culture Reporting',
  'Humanitarian Reporting',
  'Children Reporting'
];

const BlogList = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  // Combine all categories with "All" option
  const categories = ['All', ...ALLOWED_CATEGORIES];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get('https://agj-backend.vercel.app/api/blogs');
        
        if (!res.data || !res.data.success || !Array.isArray(res.data.data)) {
          throw new Error('Invalid data format received from server');
        }
        
        setBlogs(res.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError(error.response?.data?.message || error.message || 'Failed to load blogs');
        
        // Auto-retry up to 3 times
        if (retryCount < 3) {
          setTimeout(() => setRetryCount(prev => prev + 1), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [retryCount]);

  const filteredBlogs = blogs.filter(blog => {
    if (!blog) return false;
    
    // Check if activeFilter is a subcategory
    const isSubcategoryFilter = AWARDS_SUBCATEGORIES.includes(activeFilter);
    
    // Category/subcategory filter
    const categoryMatch = 
      activeFilter === 'All' || 
      (isSubcategoryFilter 
        ? blog.subcategory === activeFilter 
        : blog.category === activeFilter);
    
    // Search filter (title, description, author)
    const searchMatch = searchQuery === '' || 
                       (blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       blog.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       blog.author?.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const handleRetry = () => {
    setRetryCount(0);
  };

  if (loading && retryCount === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-red-600 mb-4">{error}</h3>
        {retryCount < 3 ? (
          <p className="text-gray-600">Retrying... ({retryCount + 1}/3)</p>
        ) : (
          <button
            onClick={handleRetry}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeFilter === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AGJ Awards Subfilter - Shows when AGJ Awards or any subcategory is selected */}
        {(activeFilter === 'AGJ Awards' || AWARDS_SUBCATEGORIES.includes(activeFilter)) && (
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('AGJ Awards')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeFilter === 'AGJ Awards'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Awards
            </button>
            {AWARDS_SUBCATEGORIES.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setActiveFilter(subcategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeFilter === subcategory
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            {searchQuery 
              ? `No results found for "${searchQuery}"`
              : activeFilter === 'All'
                ? 'There are no blog posts yet.'
                : `No blogs in ${activeFilter} category yet.`}
          </h3>
          <p className="text-gray-500">Try another search or check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogItem
              key={blog._id}
              id={blog._id}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              subcategory={blog.subcategory}
              awardType={blog.awardType}
              author={blog.author}
              image={blog.image}
              featured={blog.featured}
              createdAt={blog.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;