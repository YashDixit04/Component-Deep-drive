import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]', //button is element and appButton is attribute, more example : 'button[appButton], a[appButton]' 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
