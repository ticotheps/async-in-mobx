import {
	configure,
	action,
	observable,
	runinaction,
	flow,
	decorate,
	computed
} from 'mobx';

class QuoteStore {
	@observable quotes = [];

	@action addQuote = quote => {
		this.quotes.push(quote);
	};

	@computed get quoteCount() {
		return this.quotes.length;
	}
}

const store = new QuoteStore();
export default store;
