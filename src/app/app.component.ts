import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image';
  public imagepath;
  imgURL:any;

  preview(files){
    var reader=new FileReader();
    //this.imagepath=reader;
    reader.readAsDataURL(files[0]);
    reader.onload=(event)=>{
      this.imgURL=reader.result;
    }
  }
}
