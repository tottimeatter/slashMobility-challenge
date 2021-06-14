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
  edit_icon = env.edit_icon;

  ngOnInit(): void {
  }

  /**
   * Trigger file selector
   */
  editImage(){
    document.getElementById('imageInput').click();
  }

  /**
   * Process image from the file selector
   * @param imageInput input from the file selector
   */
  processFile(imageInput){
    const file: File = imageInput.files[0];
    const fileType = file.type.split("/");
    // debugger
    if(fileType[0] === "image"){
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.imgURL = event.target.result;
        this.imageSet.emit(this.imgURL); // Emit info to user-profile component

      })
      reader.readAsDataURL(file); // Read data from file
    } else{
      console.error("Only image files are allowed");
    }
  }

}
