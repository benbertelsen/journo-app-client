

import React, { useState, useEffect } from "react";
import LikeCounter from '../Old/LikeCounter';
import LikeButton from '../UI/LikeButton';
import ContactButton from '../UI/ContactButton';
import axios from "axios";
import '../styles/BlogItem.css';

export const BlogItem = ({ match }) => {
    const [post, setFetchedBlog] = useState({});

//We can useEffect INTSTEAD of componentDidMount and componentDidUpdate 👍
    useEffect(() => {
        async function fetchBlogItem() {
            const response = await axios.get(
                `http://localhost:5000/api/blogposts/${match.params.id}`
            );
            setFetchedBlog(response.data)
            console.log(response.data);
        }
        fetchBlogItem();
    }, [match.params.id]);

//Here we are displaying the result of the get.request for the user

// 1. SHOW THE USER THAT AUTHERED THE PIECE
// 2. IMAGE OF THAT USER
// 3. TIME TO READ
// 4  SLICED TEXT IN BLOG LIST
// 5. HTML CODE IN TEXTEDITOR

    return (
        
    <>
        <section className="blog-item-in-list">
            <p className="article-head">{post.title}</p>
            <p className="blog-description-list">{post.description}</p>
        <div className="horizontal-over-content">
        {post.user && post.user.imageUrl && <img className="byline-author-img" src={post.user.imageUrl} alt="author mini image" /> }
        <div className="blog-author-info">
           {post.user &&  <span>{post.user.username}</span> }
        <div className="horizontal-info-over-content">
            <LikeButton blogPostId={match.params.id} />
            <p> {post.date} </p> | <p> {post.timeToRead} min</p>
        </div>
        </div>
        <div className="string-of-icons">
            <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A3000%2Fblogposts&text="
                target="_blank" rel="noreferrer"><img className="SoMe-icons" src="/twitter-icon.png" alt="twitter logo"/></a>
            <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Flocalhost%3A3000%2Fblogposts&title="
                target="_blank" rel="noreferrer"><img class="SoMe-icons" src="/linkdin-icon.png" alt="linkedin logo" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img class="SoMe-icons"
                src="/ig-icon.png" alt="insta logo" /></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fblogposts"
                target="_blank" rel="noreferrer"><img class="SoMe-icons" src="/fb-icon.png" alt="FB logo" /></a>
        </div>
        </div>
            <div className="article-content" dangerouslySetInnerHTML={{__html: post.content }} />
            <p className="keywords-grey">Keywords: {post.keywords}</p>
            <ContactButton blogPost={post} />
        </section>
    </>

    )
};

    export default BlogItem;

// <>
//     <LikeCounter blogPostId={match.params.id} />
//         <section className="blog-item-in-list">
//              <div className="article-head">
//              <p className="title-style">{post.title}</p>
//              <p>{post.keywords}</p>
//              </section>       
//             <section className="horizontal-over-content">
//             <p className="blog-description">{post.description}</p>
//             <p>{post.content}</p>
             {/* <img src={post.imageUrl} alt="this part needs checking" /> */}



            {/* <img class="byline-author-img" src="{post.user.imageUrl}">
            <div id="blog-author-info">
                <b> {post.user} </b>
                <p>{{post.publishedAt}} | {{timeToRead}} min </p>
            </div> */}
            {/* <div className="string-of-icons">
                <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A3000%2Fblogposts&text="
                    target="_blank"><img className="SoMe-icons" src="/images/twitter-icon.png"></a>
                <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Flocalhost%3A3000%2Fblogposts&title="
                    target="_blank"><img className="SoMe-icons" src="/images/linkdin-icon.png"></a>
                <a href="https://www.instagram.com" target="_blank"><img className="SoMe-icons"
                        src="/images/ig-icon.png"></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fblogposts"
                    target="_blank"><img className="SoMe-icons" src="/images/fb-icon.png"></a> */}



