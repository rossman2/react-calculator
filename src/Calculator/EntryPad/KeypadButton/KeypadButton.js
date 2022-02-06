import React from 'react';

import classes from './KeypadButton.module.css';

const KeypadButton = (props) => {
	return(
		<button className={classes.KeypadButton} onClick={props.buttonAction}>{props.buttonText}</button>
	);
};

export default KeypadButton;
