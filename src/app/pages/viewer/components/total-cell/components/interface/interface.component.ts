import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { Interface } from '../../../../../../types';

@Component({
  selector: 'interface',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent {
  @Output('interface') interfaceOutput = new EventEmitter<Interface>()

  status: any = {
    general: false,
    request: false,
    response: false
  }

  selectInterface(evn: Interface) {
    this.interfaceOutput.emit(evn);
  }
}
