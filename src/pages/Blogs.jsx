import React from 'react'
import BlogList from '../components/BlogList'

const Blogs = () => {
  return (
    <div className="pt-10 px-4 sm:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Blogs</h2>
      <BlogList />
    </div>
  )
}

export default Blogs
