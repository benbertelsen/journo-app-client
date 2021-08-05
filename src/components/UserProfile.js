import React, { useState, useEffect } from "react";
import { UserProfileData } from "../api";
import '../styles/UserProfile.css';

export const UserProfile = ({match}) => {
    const [info, setInfo] = useState([]);
    
//We can useEffect INTSTEAD of componentDidMount and componentDidUpdate 👍
useEffect(() => {
    async function fetchedUser() {
        const userId = match.params.id;
        const response = await UserProfileData(userId);
        setInfo(response.data)
    }
    fetchedUser();
  }, [match.params.id]); //<- dependency array shall be empthy for this one that is?? 🤚

    return (
        <>
        <div className="user-profile-div">
        <h2>Profile</h2>
        <img className="profile-icon" src={info.imageUrl} alt="profile pic" />
        <div className="user-profile-div-1">
        <p className="span-bold">{info.username}</p>
        <p>{info.email}</p>
        <br></br>
        <p>Bio:</p>
        <p>{info.bio}</p>
        </div>
        </div>
        </>
    )};

export default UserProfile;


////
