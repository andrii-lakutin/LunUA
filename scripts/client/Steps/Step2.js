import React from 'react';

export let Step2 = React.createClass({
	getInitialState : function(){
		return {
			countries : "default",
			cities    : "default"
		}
	},

	renderCountries : function(){
		let countries = this.props.countries;
		let components = [];
		for (let key in countries) {
			components.push(<option key={key} value={countries[key]}>{countries[key]}</option>);
		};
		return components;
	},

	renderCities : function(index, country){
		let cities = this.props.cities;
		let CityComponents = [];
		
		for (let i = 0; i < cities.length; i++) {

		//Проверки: 1.Соответствие индексу 2.Исключение повторов 3.Город не должен являться страной 

			if (cities[i] === index && cities[i+1] != cities[i-1] && cities[i+1] != country) {  
				CityComponents.push(<option key={i} value={cities[i+1]}>{cities[i+1]}</option>);
			}
		};
	
		//Если данных о городах в стране нет - вводим опцию "Somewhere Inside".

		if (CityComponents.length == 0) {
			CityComponents.push(<option value="Somewhere Inside">Somewhere Inside</option>)
		};

		this.setState({cities : CityComponents});
	},
	
	countrySelected : function(event){

		let countries = this.props.countries;

		this.setState({countries : event.target.value},function(){
		switch(this.state.countries) {
   		case countries[1]:
			this.renderCities(1,countries[1]);
       		break;
    	case countries[2]:
    		this.renderCities(2,countries[2]);
        	break;
        case countries[3]:
        	this.renderCities(3,countries[3]);
        	break;
        case countries[4]:
        	this.renderCities(4,countries[4]);
        	break;
        case countries[5]:
        	this.renderCities(5,countries[5]);
        	break;
        case countries[6]:
        	this.renderCities(6,countries[6]);
        	break;
        case countries[7]:
        	this.renderCities(7,countries[7]);
        	break;
        case countries[8]:
        	this.renderCities(8,countries[8]);
        	break;
        case countries[9]:
        	this.renderCities(9,countries[9]);
        	break;
        case countries[10]:
        	this.renderCities(10,countries[10]);
        	break;
    	default:
        	break;
		}
		});
	},

	render : function () {
		return (
			<div className="Step2">
				<form action="#">
					<legend>2.Выберите страну и город</legend>
				</form>
				<div className="selectWrap">
					<select id="country"
							name="country" 
							form="#" 
							defaultValue="default" 
							ref="country" 
							onChange={this.countrySelected}>
						<option value="default" disabled>Страна</option>
						{this.renderCountries()}
					</select>
					<i className="fa fa-caret-down" aria-hidden="true"></i>
					<div className="er errorCountry">- Вы должны выбрать страну</div>
				</div>
				<div className="selectWrap">
					<select id="city"
							name="city" 
							form="#" 
							defaultValue="default" 
							ref="city">
						<option value="default" disabled >Город</option>
						{this.state.cities}
					</select>
					<i className="fa fa-caret-down" aria-hidden="true"></i>
					<div className="er errorCity">- Вы должны выбрать город</div>
				</div>
				
			</div>
			);
	}
});
