
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Toggle from '../Old/Toggle';
import '../styles/Frontpage.css';
import '../styles/Toggle.css';
import WriterPitchCard from '../UI/WriterPitchCard';

function FrontPage(newsletter) {
    return ( 
        <>
        <section>
            <div className="landingpage">
                <div className="horizontal-landing-header-logo">
                    <p className="landing-name">journo</p>
                    <img className="landing-page-logo" src="/jorno-icon.png" alt="logo" />
                </div>
            </div>
                
                <div className="landing-catchphrase">
                A platform, blog and text editor that support readers to become writers. 
                Begin crafting your story <NavLink to="/signup" className="landing-catchphrase-link">today.</NavLink>
                </div>
                <div className="app">
                </div>
                <div>
                <img className="tiny-mce-screendump" src="/text-editor-img-2.png" alt="text-editor" />
                </div>

                <div className="landing-black-divider">
                    <p className="second-catch-phrase"><b>Reader-driven content creation.
                    </b> Newspaper editors, we help you engange your readers
                        to write quality content for your digital paper. Learn more on journo.io.</p>
                </div>
                <div className="container">
                <WriterPitchCard />
                </div>
            </section>
        </>
)};


export default FrontPage;