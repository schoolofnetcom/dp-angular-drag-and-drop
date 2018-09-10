import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p';
  letters = [];
  // source = ['e', 'r', 'i', 'k'];
  // index = 0;

  onDrop(e) {
    console.log(e);
    this.letters.push(e.data);

    // this.index ++;

    // if (this.index > 3) {
    //   this.index = 0;
    //   this.letters.push('----');
    // }
  }
}
