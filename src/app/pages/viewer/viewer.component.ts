import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommService } from '../../services/comm.service';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  data: any;
  selected: any[] = [];
  constructor(private communication: CommService) {
    this.checkDataInStorage();
  }
  
  readChanges() {
    this.communication.fileData.subscribe({
      next: (res) => {
        this.data = res;
        this.addIds();
        localStorage.setItem("data", JSON.stringify(this.data))
        console.log('> ', this.data);
      }
    })
  }

  checkDataInStorage() {
    if(localStorage.getItem('data')) {
      this.data = JSON.parse(localStorage.getItem('data')!);
    }else{
      this.readChanges();
    }
  }

  addIds() {
    this.data.log.entries = this.data.log.entries.map((query: any, index: number) => {
      return {...query, id: index}
    });
  }

  expand(id: number) {
    if(this.selected.includes(id)) {
      this.selected = this.selected.filter(sel => sel !== id);
    }else{
      this.selected.push(id);
    }
  }
}
