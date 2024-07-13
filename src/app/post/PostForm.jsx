"use client"
import React from 'react'
import { useState } from 'react';

const PostForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tech');
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [images, setImages] = useState([]);
  
    const categories = ['Tech', 'Science', 'Health', 'Sports'];
  
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
    };
  
    return (
      <div className="max-w-lg mx-auto mt-10 p-4">
        <div className="mb-4 flex gap-4 items-center">
          <label className="block text-[#1C1F25] mb-2">Posting to:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className=" border rounded-full text-[white] bg-[#14AE5C] opacity-15 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-[#1C1F25] font-semibold text-[16px] mb-2">Post Title</label>
          <textarea
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="How this happen?"
            maxLength="160"
            className="block w-full p-2 border  rounded focus:outline-none"
          />
          <div className="text-right text-sm text-gray-500">{postTitle.length}/160</div>
        </div>
        <div className="mb-2">
          <label className="block text-[#1C1F25] font-semibold text-[16px] mb-2">Share Your Thoughts <span className="text-gray-500">(Optional)</span></label>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Share your thoughts..."
            maxLength="7860"
            className="block w-full p-2 border rounded focus:outline-none"
          />
          <div className="text-right text-sm text-gray-500">{postContent.length}/7860</div>
        </div>
        <div className="mb-4">
          <label className="block text-[#1C1F25] font-semibold text-[16px] mb-2">Add Image (Upto 10)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-gray-700 p-2 border rounded focus:outline-none"
          />
        </div>
        <button className="block w-full bg-purple-500 text-white py-2 rounded">Post</button>
      </div>
    );
}

export default PostForm