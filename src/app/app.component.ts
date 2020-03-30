import { Component } from '@angular/core';
import { BoleeanServiceService } from 'src/app/services/boleean-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modeSelect:boolean;
  menu:any[]=[
    {nombre:'Inicio',icon:'home',path:'/#/home'},
    {nombre:'Idiomas',icon:'record_voice_over',path:'/#/language'},
    {nombre:'Formacion Academica',icon:'school',path:'/#/school'},
    {nombre:'Informacion Complementaria',icon:'book',path:'/#/info'},
    {nombre:'Objetivo',icon:'assignment',path:'/#/objetive'},
    {nombre:'Experiencia Laboral',icon:'work',path:'/#/jobs'}
  ];
  constructor(private opcSelected: BoleeanServiceService){
    this.opcSelected.actualOpcLanguage=true;
    this.modeSelect=this.opcSelected.actualOpcLanguage;
  }
  title = 'ABio';
  changeOpc(value){
    if(value=='espanol'){
      this.opcSelected.actualOpcLanguage=true;
    }else{
      this.opcSelected.actualOpcLanguage=false;
    }
  }
}
