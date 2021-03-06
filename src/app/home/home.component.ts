import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountryserviceService } from '../services/countryservice.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	//variables
	@Output() countries: EventEmitter<any> = new EventEmitter();
	input: " ";

	constructor(private countryService: CountryserviceService, public router: Router) { }

	ngOnInit(): void {
		this.getData();
	}

	//set data from api to local storage
	getData() {
		// If there are no items in localStorage, set them
		if (!localStorage.getItem("Countries")) {
			this.countryService.getCountries().subscribe(data => {
				this.countries = data;
				localStorage.setItem('Countries', JSON.stringify(this.countries));
			})
			return
		}
		// else if items are available in localStorage, get them and put them in Countries[]
		this.countries = JSON.parse(localStorage.getItem("Countries"));
	}

	//trying to emit the clicked card in the info-component
	go_to_info(country) {
		this.router.navigate([`info/${country.alpha3Code}`]);
	}


	// Methods to route to my github and linkedin
	open_github() {
		window.open("https://github.com/katdarad/Countries")
	}

	open_linkedin() {
		window.open("https://www.linkedin.com/in/victor-lefu-a11627200/")
	}

}
