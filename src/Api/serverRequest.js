import axios from "axios";

const axiosReq = axios.create({
   baseURL: "http://localhost:3000",
   withCredentials: true,
});

//  Fetch all menus
export const getAllMenuItems = async () => {
   const { data } = await axiosReq.get("/menu");
   return data;
};

// Fetch menu item by category
export const getMenuItemByCategory = async (category) => {
   const { data } = await axiosReq.get(`/menu/?category=${category}`);
   return data;
};
