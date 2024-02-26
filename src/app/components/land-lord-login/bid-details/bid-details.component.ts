import { Component } from '@angular/core';


@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent {
[x: string]: any;
assets: any;
Img: any;
myImage2:string="assets/Img/Rectangle.png"


Rectangles: any;
rect:string="assets/Img/Rectangles.png"
openModal(){
  const modelDiv= document.getElementById('exampleModal');
  if(modelDiv!=null){
    modelDiv.style.display='block';
  }
}
closeModal(){
  const modelDiv= document.getElementById('exampleModal');
  if(modelDiv!=null){
    modelDiv.style.display='none';
  }
}
}
function openModal(element: any) {
  throw new Error('Function not implemented.');
}

function save() {
  throw new Error('Function not implemented.');
}

