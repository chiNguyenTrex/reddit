import { Component, OnInit } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
