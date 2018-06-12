import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'student': {
        return 'Студент';
      }
      case 'collaborator': {
        return 'Сотрудник';
      }
      case 'lpr': {
        return 'ЛПР';
      }
      case 'secretary': {
        return 'Секретарь';
      }
      default: {
        return value
      }
    }
  }

}
