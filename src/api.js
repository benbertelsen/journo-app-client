import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

/* PROJECT ROUTES */

//What we do is removing the need to write //localhost:3000... everytime in the routes...
//...now we've just set a base URL

        // export const getAllProjects = () => {
        //     return axios.get(`${baseURL}/projects`);
        // };

        export const createBlogPost = (blog) => {
            return axios.post(`${baseURL}/create-blogpost`, blog, { withCredentials: true});
        };

        export const signUpUser = (user) => {
                return axios.post(`${baseURL}/signup`, user);
        };

        export const signIn = (user) => {
                return axios.post(`${baseURL}/login`, user, { withCredentials: true});
        };

        export const uploadFile = (uploadData) => {
                return axios.post(`${baseURL}/upload`, uploadData);
              };

        export const UserProfileData = (id) => {
                return axios.get(`${baseURL}/user/${id}`, { withCredentials: true});
        }

        export const loggedInStatus = (user) => {
                return axios.get(`${baseURL}/loggedin`, user, { withCredentials: true});
        }

///all-blogs

        export const showPostList = (blog) => {
                return axios.get(`${baseURL}/all-blogs`, blog);
        };

        // VIEW NUMBER OF LIKES 👍📊 FOR A SPECIFIC POST
        export const getLikes = (blogPostId) => {
                return axios.get(`${baseURL}/number-of-likes/${blogPostId}`);
        };

        // GIVE BLOGPOST LIKE 👍
        export const giveLikes = (blogPostId) => {
                return axios.put(`${baseURL}/blogposts/${blogPostId}/like`, null, { withCredentials: true});
        };


        // VIEW NUMBER OF MAIL INTERSTs 📥 📊 FOR A SPECIFIC POST
        export const getInterests = (blogPostId) => {
                return axios.get(`${baseURL}/number-of-mailinterests/${blogPostId}`);

        };

        // GIVE MAIL INSTERST 📥
        export const giveInterests = (blogPostId) => {
                return axios.put(`${baseURL}/blogposts/${blogPostId}/mail`, null, { withCredentials: true});
        };

        export const getBlogItem = (blogPostId) => {
                return axios.get(`${baseURL}/blogposts/${blogPostId}`);
            };
        
/* AUTHENTICATION API ROUTES */

        // export const signup = (user) => {
        //     return axios.post(`${baseURL}/signup`, user);
        