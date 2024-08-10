import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userNameClicked: boolean = false;
  userAgeClicked: boolean = false;
  userEmailClicked: boolean = false;
  userPasswordClicked: boolean = false;
userName: string = '';
userAge: string = '';
userEmail: string = '';
userPassword: string = '';
labelName: string = '';
labelAge: string = '';
labelEmail: string = '';
labelPassword: string = '';

onInput(e:Event): void {
  let target = e.target as HTMLImageElement; ;
  console.log(target.id);
  if(target.id === 'userName'){
    this.userNameClicked = this.userName.trim().length > 0;
    this.labelName = target.id;
  }if (target.id === 'userAge') {
    this.userAgeClicked = this.userAge.trim().length > 0;
    this.labelAge = target.id;
  }if(target.id === 'userEmail'){
    this.userEmailClicked = this.userEmail.trim().length > 0;
    this.labelEmail = target.id;
  }if(target.id === 'userPassword'){
    this.userPasswordClicked = this.userPassword.trim().length > 0;
    this.labelPassword = target.id;
  }


  console.log(e);

}
// onClicked():void{
// this.clicked = true;
// }
}
