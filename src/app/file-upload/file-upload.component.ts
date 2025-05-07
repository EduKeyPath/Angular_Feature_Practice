import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

  selectedFile:any = [];

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
  }

  selectFile(e:any){
   let files = e.target.files;
   this.selectedFile = Array.from(files);
  }

  uploadFilesSubmit(){
    const fileData = new FormData();
    this.selectedFile.forEach((element:any, i:any) => {
      fileData.append(`file${i}`, element, element.name)
    });

    const headerData = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })

    this.http.post('url', fileData, {headers: headerData}).subscribe((res) => {
      console.log(res)
    },err => {
      console.log(err)
    })



  }

}
