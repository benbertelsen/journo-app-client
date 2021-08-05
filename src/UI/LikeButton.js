import React from "react";
import { getLikes, giveLikes } from "../api";
import '../styles/BlogItem.css';

class LikeButton extends React.Component{
    state ={
        like: 0
    }
    getNumOfLikes = async () => {
        const numOfLikes = await getLikes(this.props.blogPostId);
        this.setState({
            like: numOfLikes.data
        })
    }
    async componentDidMount () {
        this.getNumOfLikes()
    } 
    handleIncrementCounter = async () => {
       const likesLength = await giveLikes(this.props.blogPostId);
        this.setState({
            like: likesLength.data
        })
        // document.querySelector("#like-thumbs").style.color = "blue";
        // document.querySelector("#like-thumbs").style.fontWeight = 900;
        // document.querySelector("#like-text-change").innerHTML = "You like this post! ";
    }
    render(){
        return (
            <>
            <button
            className="like-btn" 
            onClick={this.handleIncrementCounter}>
            <span className="like-text-change">{this.state.like}</span><img className="dynamic-icons-heart" src="/like-icon.png" /></button>
            </>
        )
    }
}
export default LikeButton;
