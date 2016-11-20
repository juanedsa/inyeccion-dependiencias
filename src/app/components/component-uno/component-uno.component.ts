import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-component-uno',
  templateUrl: './component-uno.component.html',
  styleUrls: ['./component-uno.component.css']
})
export class ComponentUnoComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  addBike(bike: string) {
    this._dataService.addBike(bike);
  }

}
