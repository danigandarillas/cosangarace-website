import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { Participants2018Component } from './participants/2018/participants2018.component';
import { Participants2019Component } from './participants/2019/participants2019.component';
import { Results2018Component} from './results/2018/results2018.component';
import { Results2019Component} from './results/2019/results2019.component';
import { Sponsors2018Component} from './sponsors/2018/sponsors2018.component';
import { Sponsors2019Component} from './sponsors/2019/sponsors2019.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        Participants2018Component,
        Participants2019Component,
        Results2018Component,
        Results2019Component,
        Sponsors2018Component,
        Sponsors2019Component
    ]
})
export class PagesModule { }
