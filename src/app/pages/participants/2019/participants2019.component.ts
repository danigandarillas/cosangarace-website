import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as participants from './participants2019.json';

@Component({
    selector: 'app-participants2018',
    templateUrl: './participants2019.component.html',
    styleUrls: ['./participants2019.scss']
})

export class Participants2019Component {
    participants: any = (participants as any).default;

    constructor() {

    }
}
