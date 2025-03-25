import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import {
  BlogContainer,
  BlogTitle,
  BlogCardWrapper,
  BlogCard,
  CardImage,
  CardTitle,
  CardDate,
  CardReadMore,
  CardDescription
} from './Blog.styles';
import { getBlogs } from '../../services/Blog';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const itemsPerPage = 3;
  const titleLimit = 50; // Character limit for title

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const truncateTitle = (title) => {
    return title.length > titleLimit ? `${title.substring(0, titleLimit)}...` : title;
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <BlogContainer>
      <BlogTitle>Blog Posts</BlogTitle>
      <BlogCardWrapper>
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <BlogCard key={blog._id}>
              <CardImage 
                src={blog.image} 
                alt={blog.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x200?text=Blog+Image';
                }}
              />
              <CardTitle title={blog.title}>
                {truncateTitle(blog.title)}
              </CardTitle>
              <CardDescription>
                {blog.description.substring(0, 100)}...
              </CardDescription>
              <CardDate>Status: {blog.status}</CardDate>
              <CardReadMore onClick={() => handleReadMore(blog._id)}>
                READ MORE
              </CardReadMore>
            </BlogCard>
          ))
        ) : (
          <p>No blog posts available</p>
        )}
      </BlogCardWrapper>

      {blogs.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(blogs.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      )}
    </BlogContainer>
  );
};

export default Blog;