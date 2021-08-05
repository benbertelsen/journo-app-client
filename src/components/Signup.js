
import React, { useState } from 'react';
import { signUpUser, uploadFile } from '../api';
import '../styles/Signup.css' 

//IS the role saved?? 🤚

const Signup = (props) => {
    
    const [enteredUserName, setEnteredUserName ] = useState('');    
    const [enteredMail, setEnteredMail ] = useState('');
    const [enteredPassword, setEnteredPassword ] = useState('');
    const [enteredBio, setEnteredBio ] = useState('');
    const [enteredImage, setEnteredImage ] = useState('');
    const [enteredRole, setEnteredRole ] = useState('');

    //When the even change fires, the handler function starts and updates the state    
    const nameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
    };

    const PWChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const bioChangeHandler = (event) => {
        setEnteredBio(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.files[0]);
    };

    // const roleChangeHandler = (event) => {
    //     setEnteredRole(event.target.value);
    // };


//Creating a form submission function and ensuring it doesn't re-load the page when clicked 
const submitHandler = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("image", enteredImage);

    const response = await uploadFile(uploadData);

    //Getting our submitted data from the user into an object that stores the data together
    const userData = {
        username: enteredUserName,
        password: enteredPassword, 
        email: enteredMail,
        imageUrl: response.data.fileUrl, // 🤚 Is this supposed to be from the response variable?? 
        role: enteredRole,
        bio: enteredBio,
    };

    await signUpUser(userData);         // ✋ Is there supposed to be a response variable passed as argument here??
    setEnteredUserName('');
    setEnteredMail('');
    setEnteredPassword('');
    setEnteredBio('');
    setEnteredImage('');
    setEnteredRole('');
    props.history.push("/signin");
};

    return (
    <>
        <h1 className="h1-singup">...sign up and get started on your best writing.</h1>
        <form className="signup-form" action="/signup" method="POST" enctype="multipart/form-data" onSubmit={submitHandler}>
            
            <div>
            <p>Username</p>
            <input className="input-signup" type="text" value={enteredUserName} onChange={nameChangeHandler} />
            </div>

            <p>email</p>
            <input className="input-signup" type="email" value={enteredMail} onChange={mailChangeHandler} />

            <p>Password</p>
            <input className="input-signup" type="password" value={enteredPassword} onChange={PWChangeHandler} />

            <p>What do you write about?</p>
            <textarea className="text-area-signup" row="20" cols="100" value={enteredBio} onChange={bioChangeHandler}></textarea>

            <label>Image</label> 
            <input type="file" className="file-input label" onChange={imageChangeHandler} name="enteredImage" />
            <br></br>
            {/* <section className="div-signup-btns"> */}
                    <div className="radio-btn">
                        Writer <input type="radio" name="role" value="writer" checked="true" />
                    </div>

                    <div className="radio-btn">
                        Editor <input type="radio" name="role" value="editor" />
                    </div>
            <button className="create-blogpost-btn" type="submit">Create profile</button>
            {/* </section> */}
            </form>
    </>
)};

            {/* <div className="register-error-div">

                {{!-- TEST --}}
                <button id="register-btn" class="black-btn" type="submit">Register</button>
                {{#if errorMessage}}
                <p class="error-message">{{errorMessage}}</p>
                {{/if}}
            </div> */}

export default Signup;