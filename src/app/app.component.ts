import { Component } from '@angular/core';
import { BoleeanServiceService } from 'src/app/services/boleean-service.service';
import { Dicctionary, DicctionaryList } from "src/clases";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modeSelect: boolean;
  menuSelected: any[];
  dicctionaryHome: Dicctionary[];
  dicctionaryList: DicctionaryList;
  espanol: string;
  ingles: string;
  menuS: any[] = [
    { nombre: 'Inicio', icon: 'home', path: '/#/homeS' },
    { nombre: 'Idiomas', icon: 'record_voice_over', path: '/#/language' },
    { nombre: 'Formacion Academica', icon: 'school', path: '/#/school' },
    { nombre: 'Informacion Complementaria', icon: 'book', path: '/#/info' },
    { nombre: 'Objetivo', icon: 'assignment', path: '/#/objetive' },
    { nombre: 'Experiencia Laboral', icon: 'work', path: '/#/jobs' },
    { nombre: 'Actitudes', icon: 'face', path: '/#/qualities' }
  ];
  menuE: any[] = [
    { nombre: 'Home', icon: 'home', path: '/#/homeE' },
    { nombre: 'Language', icon: 'record_voice_over', path: '/#/language' },
    { nombre: 'Education', icon: 'school', path: '/#/school' },
    { nombre: 'Additional Information', icon: 'book', path: '/#/info' },
    { nombre: 'Objetive', icon: 'assignment', path: '/#/objetive' },
    { nombre: 'Work Experience', icon: 'work', path: '/#/jobs' },
    { nombre: 'Qualities', icon: 'face', path: '/#/qualities' }
  ];
  constructor(private opcSelected: BoleeanServiceService) {
    this.dicctionaryList=new DicctionaryList();
    this.opcSelected.actualOpcLanguage = true;
    this.modeSelect = this.opcSelected.actualOpcLanguage;
    this.menuSelected = this.menuS;
    this.ingles = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Ingles");
      this.espanol = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Espanol");
  }
  title = 'ABio';
  changeOpc(value) {
    if (value == 'espanol') {
      this.opcSelected.actualOpcLanguage = true;
      this.menuSelected = this.menuS;
      this.ingles = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Ingles");
      this.espanol = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Espanol");
    } else {
      this.opcSelected.actualOpcLanguage = false;
      this.menuSelected = this.menuE;
      this.ingles = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Ingles");
      this.espanol = this.dicctionaryList.getWord(this.opcSelected.actualOpcLanguage, "Espanol");
    }
  }
}
