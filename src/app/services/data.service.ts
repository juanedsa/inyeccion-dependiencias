import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _bikes = ['MT'];

  constructor() { }

  addBike(bike: string) {
    this._bikes.push(bike);
  }

  getAllBikes() {
    return this._bikes;
  }

}
