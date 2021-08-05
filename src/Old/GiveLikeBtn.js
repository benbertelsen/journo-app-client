

// import React, { useState, useEffect } from "react";
// import { giveLikes } from "../api"
// import '../styles/BlogItem.css';


// // const submitHandler = async (e) => {
// //     e.preventDefault();

// //We can useEffect INTSTEAD of componentDidMount and componentDidUpdate 👍
// useEffect(() => {
//     async function createLikeItem() {
//         const response = await giveLikes(blogPostId); 
//         setGivenLikes(response.data)
//     }
//     createLikeItem();
// }, [blogPostId]);

// return (
//     <>
//     <form onSubmit={useEffect}>
//     <button class="like-btn" type="submit"> <img className="dynamic-icons-heart" src="/like-icon.png" /></button>
//     </form>
//     </>
// )
// };

// export default GiveLikeBtn;


