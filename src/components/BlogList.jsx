import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Technology', 'Startup', 'Lifestyle', 'News and Updates'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://agj-backend.vercel.app/api/blogs');
        setBlogs(res.data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((item) =>
    menu === 'All' ? true : item.category?.toLowerCase() === menu.toLowerCase()
  );

  if (loading) return <p className="text-center mt-10 text-lg text-gray-500">Loading blogs...</p>;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 my-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`px-4 py-1.5 rounded-full border transition-all duration-200
              ${menu === cat
                ? 'bg-black text-white border-black shadow-md'
                : 'bg-white text-black border-gray-400 hover:border-black'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      {blogs.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 mb-32">
          <p className="text-lg font-medium">There are no blog posts yet.</p>
          <p className="text-sm mt-2">Check back soon — we’re working on great content!</p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center text-gray-500 mt-16 mb-32">
          <p className="text-lg font-medium">No blogs in this category yet.</p>
          <p className="text-sm mt-2">Try another category or check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 mb-20">
          {filteredBlogs.map((item) => (
            <BlogItem
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
