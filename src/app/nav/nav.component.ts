import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  show = false;
  hamburger = false;
  toggle() {
    this.hamburger = !this.hamburger;
  }
  constructor() { }

  ngOnInit() {
  }

}
