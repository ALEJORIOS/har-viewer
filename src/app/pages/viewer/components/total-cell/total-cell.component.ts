import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDescriptionPipe } from '../../../../pipes/format-description.pipe';
import { InterfaceComponent } from './components/interface/interface.component';
import { Interface } from '../../../../types';
import { RequestComponent } from './components/request/request.component';
import { ResponseComponent } from './components/response/response.component';
import { GeneralComponent } from './components/general/general.component';
import { TimingComponent } from './components/timing/timing.component';

@Component({
  selector: 'total-cell',
  standalone: true,
  imports: [CommonModule, FormatDescriptionPipe, InterfaceComponent, RequestComponent, ResponseComponent, GeneralComponent, TimingComponent],
  templateUrl: './total-cell.component.html',
  styleUrl: './total-cell.component.scss'
})
export class TotalCellComponent implements OnInit {

  @Input('general') general: any; 
  @Input('request') request: any = {property: 1}; 
  @Input('response') response: any;
  @Input('timings') timings: any;
  @Input('interface') interface: Interface = 'request'

  constructor() {
  }

  ngOnInit(): void {

  }

  selectInterface(evn: Interface) {
    this.interface = evn;
  }
}