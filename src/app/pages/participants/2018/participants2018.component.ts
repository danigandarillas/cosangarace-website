import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as participants from './participants2018.json';

@Component({
    selector: 'app-participants2018',
    templateUrl: './participants2018.component.html',
    styleUrls: ['./participants2018.scss']
})

export class Participants2018Component {
    participants: any = (participants as any).default;

    constructor() {
        console.log(participants);
    }
}
