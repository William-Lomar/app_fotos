import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class MenuService{
    constructor(
        private router:Router
    ){}

    rotasMenu(key:string){
        switch (key) {
            case 'home':
                this.router.navigate(['/home'])
                return true
                break;

            default:
                this.router.navigate(['/error'])
                return true
                break;
        }
    }
}
