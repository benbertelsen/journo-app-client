
//Is this part necessary...
//Doc.: "The switch requires JavaScript to function, so it is necessary to instantiate MDCSwitch on the mdc-switch element."
// import {MDCSwitch} from '@material/switch';
// const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));

//NB, we'll treat our Toggle as a stateless (aka. 'dumb') component. And let the parent (FrontPage) keep track of it's state.

import React from "react";
import '../styles/BlogItem.css';
import Switch from "@material-ui/core/Switch";

// const Toggle = () => {
//   const [checked, setChecked] = React.useState();
//   const handleChange = event => {
//     setChecked(event.target.checked);
//   };
  
const Toggle = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle;