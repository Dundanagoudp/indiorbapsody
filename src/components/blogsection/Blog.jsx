import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import DOMPurify from "dompurify"; // ← NEW
import { useNavigate } from "react-router-dom";
import {
  BlogContainer,
  BlogTitle,
  BlogCardWrapper,
  BlogCard,
  CardImage,
  CardTitle,
  CardDate,
  CardReadMore,
  CardDescription,
} from "./Blog.styles";
import { getBlogs } from "../../services/Blog";

const itemsPerPage = 3;
const titleLimit = 50;
const descLimit = 120; // ← NEW

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await getBlogs();
        setBlogs(data || []);
      } catch (e) {
        setBlogs([]);
      } finally {
        setLoad(false);
      }
    })();
  }, []);

  const handlePageChange = (_, value) => setPage(value);
  const handleReadMore = (id) => navigate(`/blog/${id}`);
  const truncate = (txt, n) => (txt.length > n ? `${txt.slice(0, n)}…` : txt);

  // current page slice
  const sliceStart = (page - 1) * itemsPerPage;
  const current = blogs.slice(sliceStart, sliceStart + itemsPerPage);

  if (loading) return <p>Loading blogs…</p>;

  return (
    <BlogContainer>
      <BlogTitle>Blog Posts</BlogTitle>

      <BlogCardWrapper>
        {current.length ? (
          current.map((b) => {
            /* 🔽 1. Sanitise, 2. remove tags, 3. limit to 120 chars */
            const cleanHTML = DOMPurify.sanitize(b.description || "");
            const plainText =
              new DOMParser().parseFromString(cleanHTML, "text/html").body
                .textContent || "";
            const excerpt = truncate(plainText.trim(), descLimit);

            return (
              <BlogCard key={b._id}>
                <CardImage
                  src={b.image}
                  alt={b.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200?text=Blog+Image";
                  }}
                />

                <CardTitle title={b.title}>
                  {truncate(b.title, titleLimit)}
                </CardTitle>

                <CardDescription>{excerpt}</CardDescription>

                {/* <CardDate>Status: {b.status}</CardDate> */}
                <CardReadMore onClick={() => handleReadMore(b._id)}>
                  READ MORE
                </CardReadMore>
              </BlogCard>
            );
          })
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
          sx={{ mt: 3, display: "flex", justifyContent: "center" }}
        />
      )}
    </BlogContainer>
  );
};

export default Blog;
