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
	quotes = [];
	quoteData = {};
	addQuote = quote => {
		this.quotes.push(quote);
	};

	// get quoteCount() {
	// 	return this.quotes.length;
	// }
}

decorate(QuoteStore, {
	quotes: observable,
	quoteData: observable,
	addQuote: action
	// quoteCount: computed
});

// const store = new QuoteStore();
export default new QuoteStore();
