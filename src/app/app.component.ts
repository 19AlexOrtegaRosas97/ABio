import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu:any[]=[
    {nombre:'Inicio',icon:'home',path:'/#/home'},
    {nombre:'Idiomas',icon:'record_voice_over',path:'/#/language'},
    {nombre:'Formacion Academica',icon:'school',path:'/#/school'},
    {nombre:'Informacion Complementaria',icon:'book',path:'/#/info'},
    {nombre:'Objetivo',icon:'assignment',path:'/#/objetive'},
    {nombre:'Experiencia Laboral',icon:'work',path:'/#/jobs'}
  ];

  title = 'ABio';
}
