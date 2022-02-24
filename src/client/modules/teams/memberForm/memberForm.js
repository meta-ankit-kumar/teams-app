/*
 * Copyright (c) 2019-2020 FinancialForce.com, inc. All rights reserved.
 */

import { track, LightningElement, api } from 'lwc';
import { FormSubmitEvent } from './event'

export default class MemberForm extends LightningElement {
    @api 
    get teamList() {
        return this.teams;
    }
    set teamList(value) {
        this.teams = JSON.parse(JSON.stringify(value));
    }
    teams;
    warningClassForName = '';
    warningClassForSkills = '';
    isSubmitButtonDisabled = true;
    @track state = {
        memberName: '',
        teamName: 'FF-M14',
        skills: ''
    }

    handleNameChange(event) {
        const name = event.target.value;
        if(!name.length){
            this.warningClassForName = 'warning';
            this.state.memberName = '';
            return;
        }
        this.warningClassForName = '';
        this.state.memberName = name;
    }

    handleTeamChange(event) {
        const teamName = event.target.value;
        this.state.teamName = teamName;
    }

    handleSkillsChange(event) {
        const skills = event.target.value;
        if(!skills.length) {
            this.warningClassForSkills = 'warning';
            this.state.skills = '';
            return;
        }
        this.state.skills = skills;
        this.warningClassForSkills = '';
    }

    handleSubmitForm() {
        if(this.isDisabled)
            return;
        
        this.dispatchEvent(new FormSubmitEvent({
			memberDetails: {
                name: this.state.memberName,
                team: this.state.teamName,
                skills: this.state.skills
            }
		}));
        this.emptyFields();
    }

    emptyFields() {
        this.template.querySelectorAll('input').forEach(inputElement => {
            if(inputElement.type === 'text')
                inputElement.value = '';
        })
        this.state.memberName = '';
        this.state.skills = '';
        this.state.teamName = 'FF-M14';
    }

    get isWarningForName() {
        return this.warningClassForName;
    }

    get isWarningForSkills() {
        return this.warningClassForSkills;
    }

    get isDisabled() {
        return !(this.state.memberName.length && this.state.teamName.length && this.state.skills.length);
    }
}
