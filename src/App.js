import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import JSONPretty from 'react-json-pretty';

import './App.css';

class App extends Component {
	// componentDidMount() {
	// 	this.props.QuoteStore.loadQuotes();
	// }

	render() {
		const { QuoteStore } = this.props;

		return (
			<div className='App'>
				<h1>Welcome to the Kanye Random Quotes Generator!</h1>
				<h2>Total Number of Kanye Quotes: {QuoteStore.quoteCount}</h2>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type='text'
						placeholder='Enter Quote'
						ref={input => (this.quote = input)}
					/>
					<button>Add Quote</button>
				</form>
				<JSONPretty json={this.props.QuoteStore.quoteData} />
			</div>
		);
	}
}

export default inject('QuoteStore')(observer(App));
