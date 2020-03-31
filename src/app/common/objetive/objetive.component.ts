import { Component, OnInit } from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases'
import { BoleeanServiceService } from "src/app/services/boleean-service.service";

@Component({
  selector: 'app-objetive',
  templateUrl: './objetive.component.html',
  styleUrls: ['./objetive.component.scss']
})
export class ObjetiveComponent implements OnInit {
  objetive:string;
  text:string;
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  constructor(private opcLanguage: BoleeanServiceService) {
    this.opcLanguage.actualOpcLanguage;
    this.dicctionaryList=new DicctionaryList();
    this.refreshWords();
   }

  ngOnInit(): void {
    this.refreshWords();
  }
  refreshWords(){
    this.objetive=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"Objetivo");
    this.text=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"ObjetivoText");
  }

}
