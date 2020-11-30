import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[];

  constructor() {
    this.data = [
      {
        id: 1,
        forename: 'Catherine',
        surname: 'Williams',
        email: 'cwilliamsl@360.cn'
      },
      /* hier das gesamte Array einfügen! - an dieser Stelle gekürzt */
      {
        id: 50,
        forename: 'Eugene',
        surname: 'Williams',
        email: 'ewilliamsi@deliciousdays.com'
      }
    ];
  }

  getAll(): Data[] {
    return this.data;
  }
   getSingleId(id: string): Data {
      return this.data.find(data => (data.id.toString() === id));
    }

}
