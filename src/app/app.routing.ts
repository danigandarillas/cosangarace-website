import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { HomeComponent } from './pages/home/home.component';
import { ObjetivoComponent } from './pages/carrera/objetivo/objetivo.component';
import { LugarComponent } from './pages/carrera/lugar/lugar.component';
import { ProgramaComponent } from './pages/carrera/programa/programa.component';
import { ReglamentoComponent } from './pages/carrera/reglamento/reglamento.component';
import { Staff2019Component } from './pages/staff/2019/staff2019.component';
import { MediaComponent } from './pages/media/media.component';
import { Participants2018Component } from './pages/participants/2018/participants2018.component';
import { Participants2019Component } from './pages/participants/2019/participants2019.component';
import { Results2018Component} from './pages/results/2018/results2018.component';
import { Results2019Component} from './pages/results/2019/results2019.component';
import { Sponsors2018Component} from './pages/sponsors/2018/sponsors2018.component';
import { Sponsors2019Component} from './pages/sponsors/2019/sponsors2019.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                 component: HomeComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'objetivo',             component: ObjetivoComponent },
    { path: 'lugar',                component: LugarComponent },
    { path: 'programa',             component: ProgramaComponent },
    { path: 'reglamento',           component: ReglamentoComponent },
    { path: 'staff-2019',           component: Staff2019Component },
    { path: 'media',                component: MediaComponent },
    { path: 'participantes-2018',   component: Participants2018Component },
    { path: 'participantes-2019',   component: Participants2019Component },
    { path: 'resultados-2018',      component: Results2018Component },
    { path: 'resultados-2019',      component: Results2019Component },
    { path: 'auspiciantes-2018',    component: Sponsors2018Component },
    { path: 'auspiciantes-2019',    component: Sponsors2019Component }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
