import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogItem = ({
  id,
  title,
  description = '',
  category,
  subcategory,
  awardType,
  author,
  image,
  featured = false,
  createdAt
}) => {
  // Safely handle description
  const shortDescription = description && description.length > 150
    ? `${description.substring(0, 150)}...`
    : description || '';

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col group relative">
      {featured && (
        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold z-10">
          Featured
        </div>
      )}

      <Link to={`/blogs/${id}`} className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 sm:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </Link>

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
              {category}
            </span>
          )}
          {subcategory && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {subcategory}
            </span>
          )}
          {awardType && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              {awardType}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          <Link to={`/blogs/${id}`} className="hover:text-purple-600 transition-colors">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>

        <div className="mt-auto">
          <div className="flex items-center gap-3">
            <div>
              {author && <p className="text-sm font-medium text-gray-900">Blog by : {author}</p>}
              {createdAt && (
                <p className="text-xs text-gray-500">
                  {format(new Date(createdAt), 'MMM d, yyyy')}
                </p>
              )}
            </div>
          </div>

          <Link
            to={`/blogs/${id}`}
            className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
          >
            Read more
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;