import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dialogue-line',
  templateUrl: './dialogue-line.component.html',
  styleUrls: ['./dialogue-line.component.less']
})
export class DialogueLineComponent implements OnInit {

  constructor() { }

  @Input() speaker: string;

  ngOnInit(): void {
  }

}
