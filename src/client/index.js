
import { createElement } from 'lwc';
import Main from 'teams/main';

const main = createElement('teams-main', { is: Main });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(main);
