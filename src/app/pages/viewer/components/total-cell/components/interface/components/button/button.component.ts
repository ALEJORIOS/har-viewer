import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interface } from '../../../../../../../../types';

@Component({
  selector: 'int-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Output('selectInterface') selectInterface = new EventEmitter<Interface>();
  @Input('interface') id: Interface = 'request';
  @Input('active') active: boolean = false;
  
  select() {
    this.selectInterface.emit(this.id);
  }
}
