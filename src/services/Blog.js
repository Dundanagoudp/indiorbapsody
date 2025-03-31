const BASE_URL = import.meta.env.VITE_API_URL;

export const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
};

export const getSingleBlog = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/blogs/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single blog data:", error);
    throw error;
  }
};