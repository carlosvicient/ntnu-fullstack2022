import React, { Component } from 'react';
import { UIDConsumer, uid } from "react-uid";

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];
const DEFAULT_CONTROLS = ['clear', 'push', 'reset'];
const DEFAULT_STATE = {
	list: INITIAL_LIST,
	input: {
		value: '',
		index: null
	}
};

class AwesomeList extends Component {

	constructor(props) {
		super(props);
		this.state = { ...DEFAULT_STATE, list: this.props.list };
		this.input = React.createRef();
		this.clearArray = this.clearArray.bind(this);
		this.pushElem = this.pushElem.bind(this);
		this.resetArray = this.resetArray.bind(this);
		this.addElement = this.addElement.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onBlurInput = this.onBlurInput.bind(this);
	}

	render() {
		return (
			<>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<li key={uid(item)}>
								{item}
								<span className="edit" onClick={() => this.selectItem(item, index)} style={{ cursor: 'pointer' }}> 📝 </span>
								<span className="delete" onClick={() => this.deleteItem(item, index)} style={{ cursor: 'pointer' }}> ❌ </span>
							</li>
						)
					})}
				</ul>
				<div>
					<UIDConsumer name={id => `awesomelist-input-${id}`}>
						{id => (
							<>
								<label htmlFor={id}>List item</label>
								<input
									id={id}
									type="text"
									value={this.state.input.value}
									onChange={this.onChangeValue}
									onBlur={this.onBlurInput}
									ref={this.input}
								/>
							</>
						)}
					</UIDConsumer>
				</div>
				{this._isControlSet('clear') && <button onClick={this.clearArray}>Clear array</button>}
				{this._isControlSet('push') && <button onClick={this.pushElem}>Add random string</button>}
				{this._isControlSet('reset') && <button onClick={this.resetArray}>Reset array</button>}
				<button onClick={this.addElement} disabled={this.state.input.index !== null ? true : false}>Add element</button>
			</>
		);
	}

	clearArray() {
		this.setState({ list: [] });
	}

	pushElem() {
		const randomString = Math.random().toString(36).substring(2, 7);
		this.setState((state) => {
			return {
				list: [...state.list, randomString]
			}
		});
	}

	resetArray() {
		this.setState({ list: this.props.list });
	}

	addElement() {
		console.log('addElement');

		//empty elements cannot be added to the new list
		if (!this.state.input.value)
			return;

		//add new element (index is null)
		if (this.state.input.index === null) {
			this.setState((state) => {
				return {
					list: [...state.list, state.input.value],
					input: {
						value: '',
						index: null
					}
				}
			});
		}
	}

	onChangeValue(event) {
		console.log('onChange: ', event.target.value);
		const value = event.target.value;
		//Creating mode
		if (this.state.input.index === null) {
			this._updateInputValue(value);
		}//editing mode
		else {
			this._updateInputValueAndEditedElementInList(value);
		}
	}

	onBlurInput() {
		//if we are modifying the state, when losing focus we reset the input
		if (this.state.input.index !== null) {
			this.setState({
				input: {
					index: null,
					value: ''
				}
			});
		}
	}

	selectItem(item, index) {
		console.log('SelectItem; ', index);
		this.setState((state) => {
			return {
				input: {
					index: index,
					value: item
				}
			}
		}, () => this.input.current.focus());
	}

	deleteItem = (item, index) => {
		console.log('deleteItem; ', index);
		this.setState((state) => {
			//filter your best friend for removing items from lists
			const list = state.list.filter((item, j) => index !== j);
			return {
				list,
				input: {
					...state.input,
					index: null,
				}
			}
		});
	}

	_isControlSet(controlName) {
		return this.props.controls.find(elem => elem === controlName);
	}

	_updateInputValue(value) {
		// will not work, shallow merge, we lose index
		// this.setState({
		//     input: { value }
		// });
		/*equivalent to:
				this.setState((state) => {
						//let newState =  Object.assign({}, state);
						let newState = {...state};
						newState.input.value = value;
						return newState;
				});
		*/
		this.setState((state) => {
			return {
				input: {
					...state.input,
					value
				}
			}
		});
	}

	_updateInputValueAndEditedElementInList(value) {
		this.setState((state) => {
			let newList = [...state.list];
			newList[state.input.index] = value;
			return {
				list: newList,
				input: {
					...state.input,
					value,
				}
			}
		});
	}

	static defaultProps = {
		list: INITIAL_LIST,
		controls: DEFAULT_CONTROLS
	};
}

export default AwesomeList;