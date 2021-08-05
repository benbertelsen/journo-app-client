import React from "react";
import { getInterests, giveInterests, getBlogItem } from "../api";
import '../styles/BlogItem.css';



class ContactButton extends React.Component{
    state ={
        contact: 0,
        email: ""
    }
    getnumOfInterests = async () => {
        const numOfInterests = await getInterests(this.props.blogPost._id);
        console.log(numOfInterests);
        // const findMail = await getBlogItem(this.props.blogPost.user.email); //issues here 🤚
        //  this.setState({
        //      contact: numOfInterests.data,
        //      email: findMail.data 
        //  })
    }
    async componentDidMount () {
        this.getnumOfInterests()
    } 
    handleIncrementCounter = async () => {
       const interestsLength = await giveInterests(this.props.blogPost._id);
        this.setState({
            contact: interestsLength.data,
            email: this.props.blogPost.user.email
        })
        // document.querySelector("#like-thumbs").style.color = "blue";
        // document.querySelector("#like-thumbs").style.fontWeight = 900;
        // document.querySelector("#like-text-change").innerHTML = "You like this post! ";
    }
    render(){
        return (
            <>
            <button type="button"
            className="contact-btn" 
            onClick={this.handleIncrementCounter}>
            {this.state.email && <p>{this.state.email}</p>}
            <img className="dynamic-icons-heart" src="/favorites.png" alt="interest" /><span className="like-text-change">{this.state.contact} </span></button>
            </>
        )
    }
}

export default ContactButton;
