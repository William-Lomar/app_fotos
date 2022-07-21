import { Component, OnInit, ViewChild } from "@angular/core";
import { DxFileUploaderComponent } from "devextreme-angular";
import { UploadService } from "src/app/services/upload.service";


@Component({
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{

    constructor(
        private upload:UploadService
    ){}

    pesquisa = {
        procurar:''
    }

    @ViewChild('upload') uploadForm!:DxFileUploaderComponent;

    files!: Array<File>;

    imgs !: Array<string>;

    ngOnInit(){
        this.pegarFotos();
    }

    pegarFotos(){
      this.upload.getImgs().subscribe({
        next:(results)=>{
          this.imgs = results;
        }
      })
    }

    pesquisarFoto(){
      this.upload.getImgs().subscribe({
        next:(results)=>{
          this.imgs = results;
          this.imgs = this.imgs.filter(img => img.includes(this.pesquisa.procurar));
        }
      })
    }

    changeForm(event:any){ //Caso precise, achoq dá pra enviar diretamente
        console.log(event);
        this.files = this.uploadForm.value;
    }

    addFotos(){
        this.upload.uploadImg(this.uploadForm.value).subscribe({
            next:(res)=>{

            },error:()=>{

            },complete:()=>{
                console.log('Upload concluído');
                this.uploadForm.instance.reset();
                this.pegarFotos();
            }
        })
    }

    resetarUpload(){
        console.log("Resetando fotos selecionadas")
        this.uploadForm.instance.reset();
    }

    download(){//Falta fazer
    console.log("Download!")
    }

    excluirFoto(img:string){
      this.upload.deletarImg(img).subscribe({
        next:(results)=>{
          console.log(results);
        },
        complete:()=>{
          this.pegarFotos()
        }
      })
    }
}
