import { Component } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";


@Component({
    templateUrl:'./header.component.html',
    selector:'app-header'
})

export class HeaderComponent{
    
    constructor(
        private menuService:MenuService
    ){}

    mudarRota(event:any){
        let rota = '';
        //Criar função para seleção de rotas
        if(Object.keys(event.itemData)[0] == 'icon'){
            rota = 'home'
        }else{
            rota = event.itemData.text;
        }

        console.log('Clicou em: '+rota);

        this.menuService.rotasMenu(rota);
    }

}