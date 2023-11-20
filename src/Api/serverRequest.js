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
   const { data } = await axiosReq.get(`/menu/category?name=${category}`);
   return data;
};

// Add product to cart
export const addToCart = async (productData) => {
   const { data } = await axiosReq.post("/cart", productData);
   return data;
};

// Get cart product by user
export const getCartProduct = async (email) => {
   const { data } = await axiosReq.get(`/cart?email=${email}`);
   return data;
};

// Delete cart product
export const deleteCartProduct = async (id) => {
   const { data } = await axiosReq.delete(`/cart/${id}`);
   return data;
};
