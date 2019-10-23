import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-input-xh',
  templateUrl: './input-xh.component.html',
  styleUrls: ['./input-xh.component.css']
})
export class InputXhComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {}
  ok() {
    this.router.navigateByUrl('/input-order')
  }

}