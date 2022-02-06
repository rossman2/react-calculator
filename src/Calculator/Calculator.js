import React from 'react';

import Display from './Display/Display';
import EntryPad from './EntryPad/EntryPad';

import classes from './Calculator.module.css';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [' ', ' ', ' ']
		};

		this.addToResults = this.addToResults.bind(this);
	}

	addToResults(result) {
		const newResults = [...this.state.results]
		newResults.push(result);
		newResults.shift();
		this.setState({results: newResults});
	}

	render() {
		return (
			<div className={classes.Calculator}>
				<Display results={this.state.results} />
				<EntryPad addResult={this.addToResults} />
			</div>
		);
	}
};

export default Calculator;
