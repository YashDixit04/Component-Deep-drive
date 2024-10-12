import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // onSubmit(titleElement: HTMLInputElement ){
  //  console.log(titleElement.value) 
  // }


  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) ---> for multiple button
  // --> 17.3 version available , Signal use case -->
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); 

  onSubmit(title: string, ticketText: string) {
    console.log(title)
    console.log(ticketText)
    this.form()?.nativeElement.reset();
  }
}
