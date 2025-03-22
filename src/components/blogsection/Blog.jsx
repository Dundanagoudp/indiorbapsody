import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

// Import your styled components
import {
  BlogContainer,
  BlogTitle,
  BlogCardWrapper,
  BlogCard,
  CardImage,
  CardTitle,
  CardDate,
  CardReadMore
} from './Blog.styles';

// Import your fallback images (the ones you mentioned)
import blog from '../../assets/b1.jpg';
import blog2 from '../../assets/b2.png';
import blog3 from '../../assets/b3.png';

const Blog = () => {
  // State to store fetched blogs (or fallback data)
  const [blogs, setBlogs] = useState([]);
  // State for pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Define your fallback data
  const fallbackData = [
    {
      id: 1,
      imageUrl: blog,
      title: 'Why Your Business Needs an Information Security Audit – and How to Get Started',
      date: '30 October 2024',
    },
    {
      id: 2,
      imageUrl: blog2,
      title: 'What Will Win: Traditional Marketing vs. Digital Marketing',
      date: '12 March 2024',
    },
    {
      id: 3,
      imageUrl: blog3,
      title: 'What Is IoT',
      date: '28 October 2024',
    },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your real API endpoint
        const response = await axios.get('https://your-api-endpoint.com/blogs');

        // If API returns data, set it; otherwise, use fallback
        if (response.data && response.data.length > 0) {
          setBlogs(response.data);
        } else {
          setBlogs(fallbackData);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // If there's an error, show fallback data
        setBlogs(fallbackData);
      }
    };

    fetchBlogs();
  }, []);

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Calculate current page's items
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <BlogContainer>
      <BlogTitle>Blog Posts</BlogTitle>

      <BlogCardWrapper>
        {currentBlogs.map((blogItem) => (
          <BlogCard key={blogItem.id}>
            <CardImage
              src={blogItem.imageUrl}
              alt={blogItem.title}
            />
            <CardTitle>{blogItem.title}</CardTitle>
            <CardDate>{blogItem.date}</CardDate>
            <CardReadMore href="/blogviewpage">READ MORE</CardReadMore>
          </BlogCard>
        ))}
      </BlogCardWrapper>

      {/* Material UI Pagination */}
      <Pagination
        count={Math.ceil(blogs.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </BlogContainer>
  );
};

export default Blog;
