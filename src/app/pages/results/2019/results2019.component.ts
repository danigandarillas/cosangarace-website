import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as winners from './winners2019.json';
import * as qualifiers from './clasificatorias2019.json';

@Component({
    selector: 'app-participants2018',
    templateUrl: './results2019.component.html',
    styleUrls: ['./results2019.scss']
})

export class Results2019Component {

    participants: any = (winners as any).default;
    qualifiers: any = (qualifiers as any).default;

    constructor() {

    }
}
