import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-component-dos',
  templateUrl: './component-dos.component.html',
  styleUrls: ['./component-dos.component.css']
})
export class ComponentDosComponent implements OnInit {

  public bikes: string[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.bikes = this._dataService.getAllBikes();
  }


}
