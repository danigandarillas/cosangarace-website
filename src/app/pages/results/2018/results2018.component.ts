import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as participants from './winners2018.json';
import * as qualifiers from './clasificatorias2018.json';
import * as winners from '../2019/winners2019.json';

@Component({
    selector: 'app-participants2018',
    templateUrl: './results2018.component.html',
    styleUrls: ['./results2018.scss']
})

export class Results2018Component {
    participants: any = (participants as any).default;
    qualifiers: any = (qualifiers as any).default;

    constructor() {

    }
}
