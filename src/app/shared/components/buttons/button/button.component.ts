import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'xc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: ThemePalette;

  constructor() { }

  ngOnInit() {
  }

}
