

import React, { useState, useEffect } from "react";
import { showPostList } from "../api";
import { NavLink } from "react-router-dom";
import '../styles/BlogItem.css';


export const BlogList = () => {
  const [list, setList] = useState([]);
  
  //What does useEffect do? By using this Hook, you tell React that your component needs to do something after render... 
  //...React will remember the function you passed (here Countries), which we refer to our “effect”,
  useEffect(() => {
    //Placing useEffect inside the component lets us access the response-variable (or any props) right from the effect... 
    //We don’t need a special API to read it — it’s already in the function scope.
   
    //runs everytime the component is rendered. Equvalent to componentDidMount.
    async function fetchPosts() {
      const response = await showPostList();
      setList(response.data);
    }
    fetchPosts();
  }, []); //<- dependency array shall be empthy for this one that is 
  
  // const slicedContent = list.map(post).content.slice(0, 100);

  return (
    <>

{list.map((post) => {
    return (
        <section className="blog-item-in-list">
        <NavLink className="article-head-list" to={`/blogposts/${post._id}`}>{post.title}</NavLink>
        <p className="blog-description-list">{post.description}</p>
        <div className="horizontal-over-content">
        {post.user && post.user.imageUrl && <img className="byline-author-img" src={post.user.imageUrl} alt="author mini image" /> }
        <p className="blog-author-info">
           {post.user &&  <span>{post.user.username}</span> }
        </p>
            <p className="blog-author-info"> {post.date} </p> <p className="blog-author-info">{post.timeToRead} min read</p>
        </div>
        <p className="article-content-list" dangerouslySetInnerHTML={{__html: post.blogResume }}></p>
        <div className="white-gradient-list">

        </div>
        </section>
        );
        })}  
  </>
)};

    
/* <h2>List of blogposts below</h2>
<ul>
  {list.map((post) => {
    return (
        <div>
      <li key={post.title}>
        <NavLink to={`/blogposts/${post._id}`}>Title: {post.title}</NavLink>
        <li key={post.user}>User: {post.user}</li>
        <br></br>
      </li>
      </div>
    );
  })}
</ul> */

export default BlogList;