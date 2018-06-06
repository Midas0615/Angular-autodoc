import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'notExamined') {
      return 'Не рассмотрена';
    } else if (value === 'accepted') {
      return 'Одобрена';
    } else {
      return 'Отклонена';
    }
  }

}
