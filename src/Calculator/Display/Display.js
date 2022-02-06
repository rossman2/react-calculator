import React from 'react';

import classes from './Display.module.css';

const Display = (props) => {
	const resultStack = props.results.map((item, index) => {
		if (item === '') {
			console.log("Setting item to blank space");
			item = "&#x200b";
		}
		return <p className={classes.Item} key={index} >{item}</p>
	});
	return (
		<div className={classes.Display}>
			{resultStack}
		</div>
	);
};

export default Display;
