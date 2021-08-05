import React, { useState } from "react";
import ToggleSwitch from "../UI/ToggleSwitch";
import '../styles/Cards.css';

 export const WriterPitchCard = (props) => {
  let [newsletter, setNewsletter] = useState(false);
//   let [daily, setDaily] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
    if (!checked) {
    //   setDaily(false);
    console.log("We checked the toggle!")
    console.log(checked)
    }
  };

  return (
    <div>
      <h1>Value prop-toggle</h1>
      <div>
        <ToggleSwitch
          id="newsletter"
          checked={newsletter}
          onChange={onNewsletterChange}
        />
        <label htmlFor="newsletter">How we service writers</label>
      </div>
      {/* <div>
        <ToggleSwitch
          id="daily"
          small
          disabled={!newsletter}
          checked={daily}
          onChange={setDaily}
        />
        <label htmlFor="daily">Daily Briefs</label>
      </div> */}

      <div>
      {
        props.checked ? 
        <p>Switch is on!</p>
        :
        <p>Swithc is off</p>
        }
      </div>
      <div className="writer-value-card">
        This is a test card talking about how great the platform is if you are a writer...
      </div>}
    </div>
  );
}

export default WriterPitchCard;
