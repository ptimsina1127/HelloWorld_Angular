import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld_Angular';
  message:string = "";
  display(email:HTMLInputElement,pass:HTMLInputElement){
    this.message = email.value;
  }
}
