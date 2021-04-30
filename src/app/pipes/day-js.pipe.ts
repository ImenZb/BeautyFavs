import { Pipe, PipeTransform } from '@angular/core';
import * as dayJS from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Pipe({
  name: 'dayJS',
})
export class DayJSPipe implements PipeTransform {
  transform(
    value: string,
    method: 'fromNow' | 'toNow',
    withoutSuffix: boolean = false
  ): string {
    if (!value) return '';
    switch (true) {
      case method === 'fromNow':
        return dayJS(value).fromNow(withoutSuffix);
      case method === 'toNow':
        return dayJS(value).toNow(withoutSuffix);
    }
    return null;
  }
}
