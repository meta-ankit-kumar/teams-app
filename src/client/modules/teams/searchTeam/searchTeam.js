/*
 * Copyright (c) 2019-2020 FinancialForce.com, inc. All rights reserved.
 */

import { LightningElement } from 'lwc';
import { SearchEvent } from './event'

export default class SearchTeam extends LightningElement {
    teamToBeSearched = '';
    
    handleSearch(event) {
        this.teamToBeSearched = event.target.value;
        this.dispatchEvent(new SearchEvent({
                query: this.teamToBeSearched
		}));
    }
}
