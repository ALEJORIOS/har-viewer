import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommService } from '../../services/comm.service';
import { MethodColorPipe } from '../../pipes/method-color.pipe';
import { StatusColorPipe } from '../../pipes/status-color.pipe';
import { StatusDescriptionPipe } from '../../pipes/status-description.pipe';
import { FormatDescriptionPipe } from '../../pipes/format-description.pipe';
import { TotalCellComponent } from './components/total-cell/total-cell.component';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule, MethodColorPipe, StatusColorPipe, StatusDescriptionPipe, TotalCellComponent],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  data: any;
  selected: any[] = [];
  showDetails: boolean[] = [];
  constructor(private communication: CommService) {
    this.checkDataInStorage();
  }
  
  readChanges() {
    this.communication.fileData.subscribe({
      next: (res) => {
        this.data = res;
        localStorage.setItem("data", JSON.stringify(this.data))
        console.log('> ', this.data);
      }
    })
  }

  checkDataInStorage() {
    if(localStorage.getItem('data')) {
      this.data = JSON.parse(localStorage.getItem('data')!);
      this.communication.fileData.next(this.data);
    }else{
      this.readChanges();
    }
  }

  expand(id: number) {
    if(this.selected.includes(id)) {
      this.selected = this.selected.filter(sel => sel !== id);
    }else{
      this.selected.push(id);
    }
  }

  expandRequest(id: number) {
    console.log('Entra: ', id);
    if(this.selected.includes(id)) {
      this.selected = this.selected.filter(sel => sel !== id);
    }else{
      this.selected.push(id);
    }
    console.log('Sale: ', this.selected);
  }
}
