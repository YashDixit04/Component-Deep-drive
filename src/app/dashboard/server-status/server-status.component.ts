import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = "offline";
  // Signal method --->>>
  currentStatus = signal<'online' | 'offline' | 'unknown'>("offline");
  private destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;

  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random();

  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9) {
  //       this.currentStatus = 'online';
  //     }
  //     else{
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000)
  // }
  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    })
  }

  ngOnInit() {
    console.log('ON INIT')
    const interval = setInterval(() => {
      const rnd = Math.random();
      // if (rnd < 0.5) {
      //   this.currentStatus = 'online';
      // } else if (rnd < 0.9) {
      //   this.currentStatus = 'offline';
      // }
      // else {
      //   this.currentStatus = 'unknown';
      // }

      // signal ---->>>
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      }
      else {
        this.currentStatus.set('unknown');
      }
    }, 5000)
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  // ---------->>>>>>>>>>> new version use for
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }


  // ngOnDestroy(): void { ------------->>>>>>>>>>>> older version use for
  //   clearTimeout(this.interval);
  // }
}
