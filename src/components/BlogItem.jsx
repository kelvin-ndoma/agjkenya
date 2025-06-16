// src/components/BlogItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../bloggy/assets';

const BlogItem = ({ id, title, description, category, image }) => {
  const shortDescription =
    description.length > 150
      ? description.substring(0, description.lastIndexOf(' ', 150)) + '...'
      : description;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blogs/${id}`}>
        <img src={image} alt={title} className="w-full h-52 object-cover" />
      </Link>
      <div className="p-4">
        <span className="inline-block mb-2 px-3 py-1 text-sm bg-black text-white rounded-full">
          {category || 'General'}
        </span>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700 mb-3">{shortDescription}</p>
        <Link
          to={`/blogs/${id}`}
          className="inline-flex items-center text-sm font-medium text-purple-700 hover:underline"
        >
          Read More
          <img src={assets.arrow} alt="arrow" className="ml-2 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
