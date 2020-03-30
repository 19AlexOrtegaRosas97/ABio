const pathServer = "http://localhost:4200/#"

export class Dicctionary{
    id:string;
    spanish:string;
    english:string;
}
export class DicctionaryList{
    arr:Dicctionary[];

    constructor(){
        this.arr=[
            {id:'Profesión',spanish:'Profesión',english:'Profession'},
            {id:'Ingeniero en computación',spanish:'Ingeniero en computación',english:'Computer Engineer'},
            {id:'Fecha Nacimiento',spanish:'Fecha Nacimiento',english:'Birth Date'},
            {id:'23-Enero-1997',spanish:'23-Enero-1997',english:'January 23th, 1997'},
            {id:'Edad',spanish:'Edad Actual',english:'Current Age'},
            {id:'Anos',spanish:'Años',english:'Years Old'},
            {id:'Nacionalidad',spanish:'Nacionalidad',english:'Nationality'},
            {id:'Estado Civil',spanish:'Estado Civil',english:'Marital Status'},
            {id:'Mexicano',spanish:'Mexicano',english:'Mexican'},
            {id:'Soltero',spanish:'Soltero',english:'Single'},
            {id:'Ocupacion Actual',spanish:'Ocupacion Actual',english:'Current occupation'},
            {id:'Becario',spanish:'Becario en Continental',english:'Intern in Continental'},
            {id:'Espanol',spanish:'Español',english:'Spanish'},
            {id:'Ingles',spanish:'Ingles',english:'English'},

          ];
    }

    getWord(language,word){
        var _word="Null";
        this.arr.forEach(element => {
            if(element.id==word){
                if(language==true){
                    _word=element.spanish;
                }else{
                    _word= element.english;
                }
            }
        });
        return _word;
      }
}