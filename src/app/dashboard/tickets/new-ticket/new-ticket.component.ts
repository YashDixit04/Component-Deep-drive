import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild, ViewChildren } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  // onSubmit(titleElement: HTMLInputElement ){
  //  console.log(titleElement.value) 
  // }

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) ---> for multiple button
  // --> 17.3 version available , Signal use case -->
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); 
  // @Output() add = new EventEmitter();
  add = output<{ title: string; text: string }>() 


  ngOnInit(): void {
    console.log("On Init")
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log("After View Init")
    console.log(this.form?.nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText})

    this.form?.nativeElement.reset();
  }
}
