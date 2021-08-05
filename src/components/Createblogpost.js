
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { createBlogPost } from '../api';
import '../styles/Createblogpost.css'
import TinyEditor from '../UI/TinyEditor';

// ✋ IS the submit button correctly set here??

const Createblogpost = ({user}) => {
    
    const [enteredPublisher, setEnteredPublisher ] = useState('');    
    const [enteredKeywords, setEnteredKeywords ] = useState('');
    const [enteredTitle, setEnteredTitle ] = useState('');
    const [enteredDescription, setEnteredDescription ] = useState('');
    const [enteredContent, setEnteredContent] = useState('');
    
//When the even change fires, the handler function starts and updates the state    

    const publisherChangeHandler = (event) => {
        setEnteredPublisher(event.target.value);
    };

    const keywordsChangeHandler = (event) => {
        setEnteredKeywords(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

//Getting the date automatically and assigning in dd-mm-yyyy format
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const dateOutput = month  + '\n'+ day  + ', ' + year;

//Creating a form submission function and ensuring it doesn't re-load the page when clicked 
const submitHandler = async (e) => {
    e.preventDefault();

    //Getting our submitted data from the user into an object that stores the data together
    const blogData = {
        title: enteredTitle,
        appointedPublisher: enteredPublisher, 
        description: enteredDescription,
        publishedAt: new Date(), //try the slice here to .slice(0, 10) 🤚
        content: enteredContent,
        keywords: enteredKeywords,
        user: user,
        timeToRead: Math.round(enteredContent.split(' ').length / 200),
        blogResume: enteredContent.slice(0, 450),
        date: dateOutput
    };

    // console.log("creating post with user:", user);
    await createBlogPost(blogData);
    setEnteredPublisher('');
    setEnteredKeywords('');
    setEnteredTitle('');
    setEnteredDescription('');
    // this.history.push("/"); // how do I get this to re-direct?? ✋
};

    return ( 
<>
    <form onSubmit={submitHandler} className="body-create-blogpost">
    <TinyEditor setEnteredContent={setEnteredContent} />
        <section className="horizontal_blogpost_alignment">
            <div>
            <div className="leftside_blogpost">
                <label>Who are you directing the piece towards?</label>
                <input type="text" value={enteredPublisher} onChange={publisherChangeHandler} /> 
                <label>What's the main keywords?</label>
                <input type="text" value={enteredKeywords} onChange={keywordsChangeHandler} />
            </div>
                <button className="create-blogpost-btn" type="submit">Create post</button>
            </div>
            <div className="rightside_blogpost">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                <label>A rubric (that captures the essence of your piece)</label>
                <textarea value={enteredDescription} onChange={descriptionChangeHandler}></textarea>

            </div>
        </section>  
    </form>
</>
)};

export default Createblogpost;