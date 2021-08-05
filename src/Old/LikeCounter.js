

// import React, { useState, useEffect } from "react";
// import { getLikes } from "../api"
// import '../styles/BlogItem.css';

// //✋ Throwing an errror for line 20 here. Why??

//     //We can useEffect INTSTEAD of componentDidMount and componentDidUpdate 👍
//     useEffect(() => {
//         async function fetchLikeItem() {
//             const response = await getLikes(blogPostId); 
//             setFetchedLikes(response.data)
//         }
//         fetchLikeItem();
//     }, [blogPostId]);


// //Here we are displaying the result of the get.request for the user

//     return (
//         <>
//         {like > 0 && <p>Likes {like}</p>}
//         </>
//     )
// };

// export default LikeCounter;

