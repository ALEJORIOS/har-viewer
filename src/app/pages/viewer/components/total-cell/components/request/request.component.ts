import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent implements OnInit{
  @Input('data') data: any;

  constructor() {
  }
  
  ngOnInit(): void {

  }
}
