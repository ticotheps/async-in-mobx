import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'mobx-react';
import QuoteStore from './stores/QuoteStore';

const Root = (
	<Provider>
		<App QuoteStore={QuoteStore} />
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
