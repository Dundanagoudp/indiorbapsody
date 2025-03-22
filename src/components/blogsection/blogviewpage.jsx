import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BlogViewContainer,
  BlogBanner,
  BlogTitle,
  BlogDate,
  BlogSubtitle,
  BlogContent
} from './blogviewpage.styles';
import blog1 from '../../assets/b1.jpg';

// Fallback data in case the API call fails or returns nothing
const fallbackData = {
  bannerUrl: blog1,
  title: 'IoT + Mobile - The Power of Tech Union',
  date: '28 October 2024',
  subtitle: 'Internet of Things, Wireless Communication Network, Abstract Image Visual',
  // Storing the blog paragraphs in an array for flexibility
  content: [
    `The CyberSpace Of Belonging (IoT) in a modern place tangibly links to computer networks, permitting 
     them to communicate as a group and handle data-driven requests. These empowered devices hold sensors, 
     software, and additional intelligence, enabling streamlined operations in business, education, and beyond.`,
    `Easy data accessibility means faster decision-making, better forecasting, and improved environment analytics. 
     IoT can seamlessly integrate with sales, operation analytics, and more, driving effective solutions.`,
    `Improves Time and Services: IoT allows real-time monitoring from multiple endpoints. For example, in a smart 
     home, motion sensors detecting unusual activity can immediately notify occupants or authorities, significantly 
     reducing risk and response time.`,
    `Save Time and Energy: IoT is a game-changer for efficiency. In a food service scenario, data about storage 
     temperatures and inventory levels can instantly signal potential issues, minimizing wastage and maximizing safety.`,
    `Optimize Supply Chain: IoT helps improve supply chain and stock administration, enabling manufacturers to 
     reduce costs, minimize waste, and boost customer satisfaction. By integrating IoT-based devices into machinery, 
     businesses can monitor stock levels, prevent theft, and streamline operations.`
  ]
};

const BlogViewPage = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Example: If you have a route param (e.g., /blog/123), you could retrieve it via a router hook:
    // const { id } = useParams();
    // For now, we'll just demonstrate fetching a single blog from a sample endpoint.

    const fetchSingleBlog = async () => {
      try {
        // Replace with your real API endpoint for a single blog item:
        const response = await axios.get('https://your-api-endpoint.com/blog/123');

        // If the API returns valid data, use it; otherwise use fallback
        if (response.data) {
          setBlogData(response.data);
        } else {
          setBlogData(fallbackData);
        }
      } catch (error) {
        console.error('Error fetching single blog:', error);
        // If there's an error, use the fallback data
        setBlogData(fallbackData);
      }
    };

    fetchSingleBlog();
  }, []);

  // If data hasn't loaded yet, you can show a simple loader
  if (!blogData) {
    return <p>Loading blog...</p>;
  }

  return (
    <BlogViewContainer>
      <BlogBanner
        src={blogData.bannerUrl}
        alt={blogData.title}
      />
      <BlogTitle>{blogData.title}</BlogTitle>
      <BlogDate>{blogData.date}</BlogDate>
      <BlogSubtitle>{blogData.subtitle}</BlogSubtitle>

      <BlogContent>
        {Array.isArray(blogData.content)
          ? blogData.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          : <p>{blogData.content}</p> /* If it's just a single string */}
      </BlogContent>
    </BlogViewContainer>
  );
};

export default BlogViewPage;
