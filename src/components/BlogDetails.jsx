import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import BlogItem from './BlogItem';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const blogRes = await axios.get(`https://agj-backend.vercel.app/api/blogs/${id}`);
        if (!blogRes.data || !blogRes.data.success || !blogRes.data.data) {
          throw new Error('Invalid blog data format');
        }
        setBlog(blogRes.data.data);

        const relatedRes = await axios.get(
          `https://agj-backend.vercel.app/api/blogs?category=${blogRes.data.data.category}&limit=3`
        );
        if (!relatedRes.data || !relatedRes.data.success || !Array.isArray(relatedRes.data.data)) {
          throw new Error('Invalid related blogs data format');
        }
        setRelatedBlogs(relatedRes.data.data.filter(b => b._id !== id));
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        if (retryCount < 3) {
          setTimeout(() => setRetryCount(prev => prev + 1), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, retryCount]);

  const handleRetry = () => {
    setRetryCount(0);
  };

  if (loading && retryCount === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#640433]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Error loading blog</h2>
        <p className="text-gray-600 mb-4">{error}</p>
        {retryCount < 3 ? (
          <p>Retrying... ({retryCount + 1}/3)</p>
        ) : (
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-[#640433] text-white rounded-md hover:bg-[#4a0326] transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h2>
        <p className="text-gray-600">The blog you're looking for doesn't exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section className="relative pt-20 pb-40 px-4 sm:px-6 lg:px-8 bg-[#640433] text-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blogs')}
            className="mb-6 flex items-center text-[#ffd6e8] hover:text-white transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="border-b border-[#640433] hover:border-white transition-colors">
              Back to Blogs
            </span>
          </button>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-gray-700 bg-opacity-20 text-sm font-medium">
                {blog.category}
              </span>
              {blog.subcategory && (
                <span className="px-3 py-1 rounded-full bg-gray-700 bg-opacity-20 text-sm font-medium">
                  {blog.subcategory}
                </span>
              )}
              {blog.awardType && (
                <span className="px-3 py-1 rounded-full bg-gray-700 bg-opacity-20 text-sm font-medium">
                  {blog.awardType}
                </span>
              )}
              {blog.featured && (
                <span className="px-3 py-1 rounded-full bg-[#640433] text-white text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
               
                <div>
                  <p className="font-medium text-white">By: {blog.author}</p>
                  <p className="text-sm text-purple-200">
                    {format(new Date(blog.createdAt), 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
<main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 -mt-28 bg-white rounded-t-3xl shadow-xl">
        <figure className="mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
          {blog.imageCaption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {blog.imageCaption}
            </figcaption>
          )}
        </figure>

        <article className="prose prose-lg sm:prose-xl max-w-none">
          <section className="mb-12">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {blog.description.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {blog.content && blog.content.map((section, index) => (
            <section key={index} className="mb-10">
              {section.heading && (
                <h3 className="text-2xl font-semibold text-[#640433] mb-4">
                  {section.heading}
                </h3>
              )}
              {section.body && (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {section.body.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.image && (
                <figure className="my-6">
                  <img
                    src={section.image}
                    alt={section.imageAlt || ''}
                    className="w-full rounded-lg shadow-md"
                  />
                  {section.imageCaption && (
                    <figcaption className="text-center text-sm text-gray-500 mt-2">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}

          {blog.conclusion && (
            <section className="mt-12">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {blog.conclusion.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}
        </article>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#f3e6eb] text-[#640433] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>

      {relatedBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-[#640433] mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <BlogItem
                key={relatedBlog._id}
                id={relatedBlog._id}
                title={relatedBlog.title}
                description={relatedBlog.description}
                category={relatedBlog.category}
                subcategory={relatedBlog.subcategory}
                awardType={relatedBlog.awardType}
                author={relatedBlog.author}
                image={relatedBlog.image}
                featured={relatedBlog.featured}
                createdAt={relatedBlog.createdAt}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;