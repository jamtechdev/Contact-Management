import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contacts'
})
export class ContactsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
