import axios from "axios";

const URL = "https://blog-app-mernn.herokuapp.com";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updateLikePost = (payload) =>
    axios.post(`${URL}/posts/update`, payload);
export const deletePost = (id) => axios.delete(`${URL}/posts/${id}`);
