 export class SearchEvent extends CustomEvent {
    static type = 'search';

    constructor(value) {
		super(SearchEvent.type, {detail: {value}});
	}
}


