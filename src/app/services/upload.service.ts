import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class UploadService{
    constructor(
        private http:HttpClient
    ){}

    uploadImg(imgs:File[]){
        const formData = new FormData();
        imgs.forEach((img)=>{
            formData.append('file',img,img.name)
        })

        const request = new HttpRequest('POST',' http://localhost:3080/upload',formData); // Da pra add o reportProgress para criar uma barra de carregamento
        return this.http.request(request);
    }

    getImgs():Observable<Array<string>>{
        return this.http.get<Array<string>>('http://localhost:3080/getImgs');
    }

    deletarImg(img:string){
      return this.http.delete('http://localhost:3080/deletarImg/'+img);
    }

    downloadImg(img:string){
      return this.http.get('http://localhost:3080/download/'+img,{responseType:'blob'});
    }

}
