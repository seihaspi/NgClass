import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngClass';
  primaryColor = "primary-color";
  backGroundColor ="container-bg";

  ChangeTheme(){
    if(this.primaryColor == "primary-color"){
      this.primaryColor = "secondary-color";
    }else{
      this.primaryColor = "primary-color";
    }
  }
  changeBackround(){
    if(this.backGroundColor == "container-bg"){
      this.backGroundColor = "container-bg1";
    }else{
      this.backGroundColor = "container-bg";
    }
  }
}
