import React from 'react';

import Entry from './Entry/Entry';
import KeypadButton from './KeypadButton/KeypadButton';

import classes from './EntryPad.module.css';

class EntryPad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentEntry: []
		};

		this.addToEntry = this.addToEntry.bind(this);
		this.clearEntry = this.clearEntry.bind(this);
		this.processEntry = this.processEntry.bind(this);
	}

	addToEntry(newItem) {
		// Copy array in state
		const tempEntry = [...this.state.currentEntry];

		// Add new item to the end of the array
		tempEntry.push(newItem)

		// Set the currentEntry state to the new array
		this.setState({
			currentEntry: tempEntry
		});
	}

	clearEntry() {
		// Set the currentEntry state to an empty array
		this.setState({currentEntry: []});
	}

	processEntry() {
		// Convert the current entry values into a string
		const equation = this.state.currentEntry.join('');

		let newResult = 0;
		try {
			// Evaluate the equation string
			newResult = eval(equation);
		} catch (e) {
			if (e instanceof SyntaxError) {
				alert("That's not a valid equation and you are dumb.");
				return;
			} else {
				throw e;
			}
		}

		// Add the result to the results state in the Calculator component
		this.props.addResult(newResult);

		// Clear the entry so we're ready to enter a new one
		this.clearEntry();
	}

	render() {
		return(
			<div>
				<Entry entryValues={this.state.currentEntry} />
				<table className={classes.KeypadContainer}>
					<tbody>
						<tr>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('7')} buttonText="7" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('8')} buttonText="8" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('9')} buttonText="9" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry(' / ')} buttonText="/" /></td>
						</tr>
						<tr>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('4')} buttonText="4" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('5')} buttonText="5" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('6')} buttonText="6" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry(' * ')} buttonText="*" /></td>
						</tr>
						<tr>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('1')} buttonText="1" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('2')} buttonText="2" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('3')} buttonText="3" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry(' - ')} buttonText="-" /></td>
						</tr>
						<tr>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('0')} buttonText="0" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry('.')} buttonText="." /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={this.clearEntry} buttonText="C" /></td>
							<td className={classes.NormalButton}><KeypadButton buttonAction={() => this.addToEntry(' + ')} buttonText="+" /></td>
						</tr>
						<tr>
							<td className={classes.EnterButton} colSpan="4"><KeypadButton buttonAction={this.processEntry} buttonText="=" /></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
};

export default EntryPad;
