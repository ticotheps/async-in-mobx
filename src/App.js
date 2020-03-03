import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import JSONPretty from 'react-json-pretty';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.QuotesStore.loadQuotes();
	}

	render() {
		return (
			<div className='App'>
				<h1>Welcome to the Kanye Random Quotes Generator!</h1>
				<JSONPretty json={this.props.QuotesStore.quotesData} />
			</div>
		);
	}
}

export default App;
