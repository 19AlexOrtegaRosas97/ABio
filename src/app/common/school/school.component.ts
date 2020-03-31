import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases';
import { BoleeanServiceService } from "src/app/services/boleean-service.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SchoolComponent implements OnInit {
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  Universidad:string;
  Preparatoria:string;
  carrera:string;
  arrSHighSchool={
    name:'Universidad De Guadalajara',
    centro:' PREPA REG DE SANTA ANITA',
    dates:'2012B - 2015A',
    carrera:'BACHILLERATO GENERAL POR COMPETENCIAS (BGC)'
  }
  arrSUniversity={
    name:'Universidad De Guadalajara',
    centro:'CENTRO UNIVERSITARIO DE CIENCIAS EXACTAS E INGENIERIAS',
    dates:'2016A - 2020A',
    carrera:'INGENIERIA EN COMPUTACION (INCO)'
  }

  constructor(private opcLanguage: BoleeanServiceService) { 
    this.opcLanguage.actualOpcLanguage;
    this.dicctionaryList=new DicctionaryList();
    this.refreshWords();
  }

  ngOnInit(): void {
    this.refreshWords();
  }
  refreshWords(){
    this.Preparatoria=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Preparatoria");
    this.Universidad=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Universidad");
    this.carrera=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"carrera");
  }
}
