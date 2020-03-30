import { Component, OnInit} from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases';
import { BoleeanServiceService } from "src/app/services/boleean-service.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dateBorn:Date= new Date(1997,0,23);
  age:number;
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  languageOpc:boolean;// true spanish false English
  Profesion:string;
  Ingenieroencomputacion:string;
  FechaNacimiento:string;
  myBirth:string;
  Edad:string;
  years:string;
  Nacionalidad:string;
  EstadoCivil:string;
  Mexicano:string;
  Soltero:string;
  OcupacionActual:string;
  Becario:string;
constructor( private opcLanguage: BoleeanServiceService) { 
  this.opcLanguage.actualOpcLanguage;
  this.dicctionaryList=new DicctionaryList();
  this.refreshWords();
}

ngOnInit(): void {
  this.age=this.calculateAge();
  this.refreshWords();
}
calculateAge():any {
  var today = new Date();
  var edad = today.getFullYear() - this.dateBorn.getFullYear();
  var m = today.getMonth() - this.dateBorn.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < this.dateBorn.getDate())) {
      edad--;
  }
  return edad;
}
refreshWords(){
  this.Profesion=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Profesión");
  this.Ingenieroencomputacion=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Ingeniero en computación");
  this.FechaNacimiento=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Fecha Nacimiento");
  this.myBirth=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"23-Enero-1997");
  this.Edad=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Edad");
  this.years=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Anos");
  this.Nacionalidad=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Nacionalidad");
  this.EstadoCivil=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Estado Civil");
  this.Mexicano=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Mexicano");
  this.OcupacionActual=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Ocupacion Actual");
  this.Becario=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Becario");
  this.Soltero=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Soltero");
}
}
