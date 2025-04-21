import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify"; // ① (optional but recommended)
import {
  BlogViewContainer,
  BlogBanner,
  BlogTitle,
  BlogDate,
  BlogSubtitle,
  BlogContent,
} from "./blogviewpage.styles";
import { getSingleBlog } from "../../services/Blog";

const BlogViewPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getSingleBlog(id);
        if (!data) throw new Error("Blog not found");
        setBlogData(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Loading blog…</p>;
  if (error) return <p>{error}</p>;
  if (!blogData) return <p>Blog not found.</p>;

  // ② Sanitise HTML (remove this line if you already trust content)
  const safeHTML = DOMPurify.sanitize(blogData.description);

  return (
    <BlogViewContainer>
      <BlogBanner
        src={blogData.image}
        alt={blogData.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/800x400?text=Blog+Image";
        }}
      />
      <BlogTitle>{blogData.title}</BlogTitle>
      {/* <BlogDate>Status: {blogData.status}</BlogDate> */}

      <BlogContent
        dangerouslySetInnerHTML={{ __html: safeHTML }} /* ③ render HTML */
      />
    </BlogViewContainer>
  );
};

export default BlogViewPage;
