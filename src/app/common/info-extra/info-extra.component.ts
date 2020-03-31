import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Dicctionary,DicctionaryList } from 'src/clases';
import { BoleeanServiceService } from "src/app/services/boleean-service.service";

@Component({
  selector: 'app-info-extra',
  templateUrl: './info-extra.component.html',
  styleUrls: ['./info-extra.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoExtraComponent implements OnInit {
  dicctionaryHome:Dicctionary[];
  dicctionaryList:DicctionaryList;
  os:string;
  infoUbuntu:string;
  infoWindows:string;
  programacion:string;
  db:string;

  constructor(private opcLanguage: BoleeanServiceService) {
    this.opcLanguage.actualOpcLanguage;
    this.dicctionaryList=new DicctionaryList();
    this.refreshWords();
   }

  ngOnInit(): void {
    this.refreshWords();
  }
  refreshWords(){
    this.os=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"os");
    this.infoWindows=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"infoWindows");
    this.infoUbuntu=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"infoUbuntu");
    this.programacion=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"programacion");
    this.db=this.dicctionaryList.getWord(this.opcLanguage.actualOpcLanguage,"db");

  }
}
