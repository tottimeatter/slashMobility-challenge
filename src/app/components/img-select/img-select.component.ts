import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-img-select',
  templateUrl: './img-select.component.html',
  styleUrls: ['./img-select.component.scss']
})
export class ImgSelectComponent implements OnInit {

  constructor() { }

  @Output() imageSet = new EventEmitter();

  imgURL="";
  default = env.defaultUserIMG;

  ngOnInit(): void {
  }

  editImage(){
    document.getElementById('imageInput').click();
  }

  processFile(imageInput){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.imgURL = event.target.result;
      this.imageSet.emit(this.imgURL);

    })
    reader.readAsDataURL(file);
  }

}
