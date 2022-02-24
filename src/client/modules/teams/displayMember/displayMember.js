/*
 * Copyright (c) 2019-2020 FinancialForce.com, inc. All rights reserved.
 */

import { track, LightningElement, api } from 'lwc';

export default class DisplayMember extends LightningElement {
    @api
    get members() {
        return this.membersList;
    }
    set members(values) {
        this.membersList = JSON.parse(JSON.stringify(values));
    }
    @track membersList = [];

    get isAnyMember() {
        return this.membersList.length > 0;
    }

}
