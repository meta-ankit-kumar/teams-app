 export class FormSubmitEvent extends CustomEvent {
    static type = 'formsubmit';

    constructor(value) {
		super(FormSubmitEvent.type, {detail: {value}});
	}
}


