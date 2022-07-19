import { Component, OnInit } from "@angular/core";


@Component({
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{
    pesquisa = {
        procurar:''
    }

    ngOnInit(){
        console.log(this.pesquisa);
    }

    pesquisarFoto(e:Event){
        console.log(this.pesquisa);
    }

}