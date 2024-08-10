import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
clicked:boolean = false;
data:string= '';
displayImg(e: MouseEvent):string{
  // console.log(e.sp);

  this.clicked = true;
  let target = e.target as HTMLImageElement;
  console.log(target);

  const previousElement = target.lastElementChild as HTMLImageElement;
  console.log(previousElement);

// console.log(target.src);
this.data = previousElement.src;
return this.data;
}
}
