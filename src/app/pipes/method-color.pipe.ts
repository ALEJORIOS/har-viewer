import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'methodColor',
  standalone: true
})
export class MethodColorPipe implements PipeTransform {

  methodObject: Methods = {
    GET:'#00c100',
    POST: "#46bafc",
    PUT: "#ff9900",
    DELETE: "#fc4646",
    PATCH: "#ee00ff",
    OPTIONS: "#C0C0C0",
  }

  transform(value: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'): HexaColor {
    return this.methodObject[value];  
  }

}

type HexaColor = `#${string}`;

interface Methods {
  GET: HexaColor
  POST: HexaColor
  PUT: HexaColor
  DELETE: HexaColor
  PATCH: HexaColor
  OPTIONS: HexaColor
}