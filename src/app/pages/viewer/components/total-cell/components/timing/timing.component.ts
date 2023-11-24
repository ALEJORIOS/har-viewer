import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'timing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timing.component.html',
  styleUrl: './timing.component.scss'
})
export class TimingComponent implements OnInit {

  @Input('data') data: any;
  dataArray: any[] = [];

  ngOnInit(): void {
    console.log('>>> ', this.data);
    Object.keys(this.data).forEach((prop) => {
      this.dataArray.push({property: prop, value: this.data[prop]});
    })
  }


}
