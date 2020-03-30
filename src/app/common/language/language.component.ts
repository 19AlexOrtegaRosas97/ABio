import { Component, OnInit } from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases';
import { BoleeanServiceService } from "src/app/services/boleean-service.service";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  espanol:string;
  ingles:string;
  constructor(private opcLanguage: BoleeanServiceService) { 
    this.opcLanguage.actualOpcLanguage;
    this.dicctionaryList=new DicctionaryList();
    this.refreshWords();
  }

  ngOnInit(): void {
    this.refreshWords();
  }
  refreshWords(){
    this.ingles=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Ingles");
    this.espanol=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Espanol");
  }
}
