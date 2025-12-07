const API_URL = process.env.REACT_APP_API_URL;

export const getAdminData = async () => {
  const response = await fetch(`${API_URL}/admin/data`);
  return response.json();
};
export const SIGNUP_URL = "https://tradex-3-agri.onrender.com";
