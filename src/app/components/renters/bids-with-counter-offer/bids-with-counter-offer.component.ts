import { Component } from '@angular/core';

@Component({
  selector: 'app-bids-with-counter-offer',
  templateUrl: './bids-with-counter-offer.component.html',
  styleUrls: ['./bids-with-counter-offer.component.css']
})
export class BidsWithCounterOfferComponent {
  myImage2:string="assets/Img/Rectangle.png"


  Rectangles: any;
  rect:string="assets/Img/Rectangles.png"
  bath:string="assets/icons/f2.png"
  micro:string="assets/icons/microwave-icon.png"
  fridge:string="assets/icons/fridge.png"
  suite:string="assets/icons/in-suite-dryer.png"
  cable:string="assets/icons/cable-icon.png"
  electricity:string="assets/icons/electricity.png"
  heat:string="assets/icons/heat.png"
}
