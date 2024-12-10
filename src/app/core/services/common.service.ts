import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getSameValueOf(list: any[], critiria: string, value: any) {
    let nb = 0;
    for (let i in list) {
      if (list[i][critiria] == value) {
        nb++;
      }
    }
    return nb;
  }
}
