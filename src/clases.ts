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
            {id:'Preparatoria',spanish:'Preparatoria',english:'High School'},
            {id:'Universidad',spanish:'Universidad',english:'University'},
            {id:'carrera',spanish:'Carrera',english:'Career'},
            {id:'Objetivo',spanish:'Objetivo',english:'Objetive'},
            {id:'ObjetivoText',
            spanish:'Desarrollar conocimientos adquiridos en la universidad emplearlos en el área laboral y adquirir nuevos conocimientos sobre la práctica, ser un empleado útil para cualquier empresa que me da la oportunidad de desarrollar mis conocimientos adquiridas dentro de la ingenieria, y aprender nuevas cosas y tecnologias para mi desarrollo profesional. Ser un profesionista útil dentro de la empresa.',
            english:'Develop knowledge acquired in the university to use them in the labor area and acquire new knowledge during the practice, and also to be a useful employee for any company that gives me the opportunity to develop my knowledge acquired within my engineering career and learn new things and technologies for my professional development. Be a useful professional within the company. '
            },
            {id:'os',spanish:'Sistemas Operativos',english:'Operating Systems'},
            {id:'infoWindows',spanish:'Manejo de sistemas operativos Windows (todas las versiones)',english:'Management of Windows operating systems (all versions)'},
            {id:'infoUbuntu',spanish:'Conocimientos Basicos',english:'Basic Knowledge'},
            {id:'programacion',spanish:'Programación',english:'Programming'},
            {id:'db',spanish:'Lenguaje de Base de Datos',english:'Database Language'},
            {id:'fechas',spanish:'Fechas',english:'Dates'},
            {id:'fechasConti',spanish:'Semptiembre 2019 - Actual',english:'September 2019 - Current'},
            {id:'posicion',spanish:'Posicion',english:'Position'},
            {id:'posicionConti',spanish:'Practicante en desarrollo de aplicaciones web',english:'Intern applications Web developer'},
            {id:'funciones',spanish:'Funciones',english:'Functions perfomed'},
            {id:'funcionesConti',spanish:'Crear apps web para facturacion electronica',english:'Create web app for electronic invoicing'},
            {id:'jefe',spanish:'Jefe',english:'Direct Manager'},
            {id:'mail',spanish:'Correo Electronico',english:'E-Mail'},
            {id:'fechasMilenio',spanish:'Noviembre 2018 - Mayo 2019',english:'November 2018 - May 2019'},
            {id:'posicionMilenio',spanish:'Practicante en desarrollo web',english:'Web Development internship'},
            {id:'funcionesMilenio',spanish:'Desarrollo de Backend, y soporte de Api',english:'Web development Backend, support of Api'}, 
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