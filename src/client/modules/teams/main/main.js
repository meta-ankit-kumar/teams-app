/*
 * Copyright (c) 2019-2020 FinancialForce.com, inc. All rights reserved.
 */

import { track, LightningElement, api } from 'lwc';
const teamData = require("./data/teamData.json");
export default class Main extends LightningElement {
    counter = 1;
    teams; 
    @track members = [];
    queryString = '';
    connectedCallback() {
        this.teams = JSON.parse(JSON.stringify(teamData));
    }

    handleFormSubmit(event) {
        this.members.push({ id: this.counter, ...event.detail.value.memberDetails});
        this.counter++;
    }

    handleSearch(event) {
        this.queryString = event.detail.value.query;
    }

    get membersList() {
        if(this.queryString.length)
            return this.getFilteredResults();
        return JSON.parse(JSON.stringify(this.members));
    }

    getFilteredResults() {
        return JSON.parse(JSON.stringify(this.members.filter(member => {
            if(member.team.toLowerCase().includes(this.queryString.toLowerCase()))
                return member;
        })));
    }
}
