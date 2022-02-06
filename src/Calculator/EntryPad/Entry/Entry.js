import React from 'react';

import classes from './Entry.module.css';

const Entry = (props) => {
	return (
		<div className={classes.Entry}>{props.entryValues.join('')}</div>
	);
}

export default Entry;
