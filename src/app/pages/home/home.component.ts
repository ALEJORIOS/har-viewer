import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommService } from '../../services/comm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private communication: CommService, private router: Router) { }

  uploadFile(evn: Event) {
    const file: File = (evn.target as HTMLInputElement).files![0];
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (e) => {
      const fileString: string = fileReader.result as string;
      this.communication.fileData.next(eval('('+fileString+')'));
      this.router.navigate(['viewer']);
    }
    fileReader.readAsText(file);
  }

}
