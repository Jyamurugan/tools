import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() content: string;

  facebook = new EventEmitter();
  twitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
