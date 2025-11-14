import React from 'react';

const BlogPage = ({ isAdmin }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg">Read our latest photography stories.</p>
    </div>
  );
};

export default BlogPage;
