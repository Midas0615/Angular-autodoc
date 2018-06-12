import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claim_status'
})
export class ClaimStatusPipe implements PipeTransform {

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
