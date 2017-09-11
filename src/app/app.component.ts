import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = new Date();
  currZone = 'none';
  getTime(zone){
    this.display = new Date();
    this.currZone = zone;
    if (zone === 'MST') {
      this.display.setHours(this.display.getHours() + 1);
    } else if (zone === 'CST') {
      this.display.setHours(this.display.getHours() + 2);
    } else if (zone === 'EST') {
      this.display.setHours(this.display.getHours() + 3);
    }
  } 
}
