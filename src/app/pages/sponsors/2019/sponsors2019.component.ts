import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

const PARTICIPANTS = [
    {
        id: '53',
        name: 'Andrew Morrissey',
        email: 'andyt.Morrissey@gmail.com',
        mobile: null,
        personal_id: '123456788900',
        date_birth: '1996-02-12 00:00:00',
        category: '1',
        gender: 'm',
        nationality: 'US',
        city: null,
        size: null,
        creation_date: '2018-12-22 09:37:47',
        url_check: '1111111111111111',
        confirm: '1',
        payment: '1'
    }
];

@Component({
    selector: 'app-participants2018',
    templateUrl: './sponsors2019.component.html',
    styleUrls: ['./sponsors2019.scss']
})

export class Sponsors2019Component {

    participants = PARTICIPANTS;

    constructor() {

    }
}
