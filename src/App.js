import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import JSONPretty from 'react-json-pretty';
import QuoteStore from './stores/QuoteStore';

import './App.css';

class App extends Component {
	// componentDidMount() {
	// 	this.props.QuoteStore.loadQuotes();
	// }

	handleSubmit = e => {
		e.preventDefault();
		const quote = this.quote.value;
		this.props.QuoteStore.addQuote(quote);
		this.quote.value = '';
	};

	render() {
		const { QuoteStore } = this.props;

		return (
			<div className='App'>
				<h1>Welcome to the Jesus Quotes Generator!</h1>
				<h2>Total Number of Jesus Quotes: {QuoteStore.quoteCount}</h2>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input
						type='text'
						placeholder='Enter Quote'
						ref={input => (this.quote = input)}
						required
					/>
					<button>Add Quote</button>
				</form>
				<ul>
					{!this.QuoteStore ? (
						QuoteStore.quotes.map((quote, index) => (
							<li key={index}>
								<strong>"{quote}"</strong> -Jesus
							</li>
						))
					) : (
						<div>Loading...</div>
					)}
				</ul>
				<JSONPretty json={this.props.QuoteStore.quoteData} />
			</div>
		);
	}
}

export default inject('QuoteStore')(observer(App));
