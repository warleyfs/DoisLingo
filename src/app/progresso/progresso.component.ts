import { Component, OnInit, Input } from '@angular/core';

import { Frase } from './../shared/frase.model';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public progresso: number;

  constructor() { }

  ngOnInit() {
  }

}
