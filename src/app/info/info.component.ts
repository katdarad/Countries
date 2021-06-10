import { Component, OnInit } from '@angular/core';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  countries:any

  constructor(private countryService: CountryserviceService) { }

  ngOnInit(): void {
  }

  get_countries(){
    this.countryService.getCountries().subscribe(data=>{
      this.countries= data;
    })
  }


}
