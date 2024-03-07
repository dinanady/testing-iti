import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-servicetest',
  standalone: true,
  imports: [],
  templateUrl: './servicetest.component.html',
  styleUrl: './servicetest.component.css'
})
export class ServicetestComponent implements OnInit  {
  constructor( private Service :MyServiceService) {
    
  }
  ngOnInit():void{
    this.Service.getname();
  } 
}
