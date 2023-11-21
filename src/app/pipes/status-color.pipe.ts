import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {

  methodObject: Status = {
    200:'#00c100'
  }
  transform(value: keyof Status, ...args: unknown[]): unknown {
    return this.methodObject[value];  
  }
}

type HexaColor = `#${string}`;

interface Status {
  200: HexaColor
}