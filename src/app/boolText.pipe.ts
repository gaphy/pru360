import { PipeTransform, Pipe } from '@angular/core';

@Pipe ({
    name: 'boolText'
})
export class boolText implements PipeTransform {
    transform(value: any) {
      if (value === '1') {
        return 'Yes';
      } else {
          return 'No';
      }
    }
}