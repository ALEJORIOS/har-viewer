import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDescription',
  standalone: true
})
export class StatusDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
