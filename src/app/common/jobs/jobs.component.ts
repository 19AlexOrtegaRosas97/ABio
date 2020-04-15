import { Component, OnInit } from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases';
import { BoleeanServiceService } from "src/app/services/boleean-service.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  dates:string;
  dateConti:string;
  dateMilenio:string;
  posicionConti:string;
  posicion:string;
  funciones:string;
  funcionesConti:string;
  jefe:string;
  mail:string;
  posicionMilenio:string;
  funcionesMilenio:string;

  constructor(private opcLanguage: BoleeanServiceService) { 
    this.opcLanguage.actualOpcLanguage;
    this.dicctionaryList=new DicctionaryList();
    this.refreshWords();
  }

  ngOnInit(): void {
    this.refreshWords();
  }
  refreshWords(){
    this.dates=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"fechas");
    this.dateConti=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"fechasConti");
    this.posicion=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"posicion");
    this.posicionConti=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"posicionConti");
    this.funcionesConti=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"funcionesConti");
    this.funciones=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"funciones");
    this.jefe=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"jefe");
    this.mail=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"mail");
    this.dateMilenio=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"fechasMilenio");
    this.posicionMilenio=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"posicionMilenio");
    this.funcionesMilenio=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"funcionesMilenio");

  }
}
