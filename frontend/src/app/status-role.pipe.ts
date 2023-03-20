import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusRole'
})
export class StatusRolePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'ROLE_OPERATOR':
        return 'Gerente';
        case 'ROLE_ADMIN':
          return 'Administrador';
          default:
            return value;
    }
  }

}
