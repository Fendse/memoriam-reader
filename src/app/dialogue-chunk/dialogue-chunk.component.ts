import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dialogue-chunk',
  templateUrl: './dialogue-chunk.component.html',
  styleUrls: ['./dialogue-chunk.component.less']
})
export class DialogueChunkComponent implements OnInit {

  constructor() { }

  @Input() chunk;

  ngOnInit(): void {
  }

}
