import React from 'react';
import ReactDOM from 'react-dom';

import {Step1} from './Steps/Step1';
import {Step2} from './Steps/Step2';
import {Step3} from './Steps/Step3';
import {Step4} from './Steps/Step4';
import {Result} from './Result/result';

import {httpGet} from'./getData';

import {NumNavigation} from './Navigation/NumNavigation';
import {PrevNext} from './Navigation/PrevNext';


let App = React.createClass({
	getInitialState : function(){
		return { 
			cityData    : null,
			countryData : null,
			currentStep : 1,
			name          : null,
			mail          : null,
			country       : null,
			city          : null,
			facebook      : null,
			vkontakte     : null,
			twitter       : null,
			odnoklassniki : null,
			favoriteCat   : null,
			step1Valid : false,
			step2Valid : false,
			step3Valid : false,
			step4Valid : false,
			Step1ResetTimes : 1, 
			Step2ResetTimes : 1
		};
	},

	getData : function(){
		// Берем данные городов
		httpGet("../../data/cities.json")
	  		.then(
	  		response => {
	  			let data = JSON.parse(response);
	  			let mutateData = [];

	  			for (let key in data){
					mutateData.push(data[key].country, data[key].name);
				};

	  			this.setState({cityData: mutateData});
	  			console.log(mutateData);
	  		},
	    	error => console.log(`Rejected: ${error}`)
			);
	  	// Берем данные стран	
		httpGet("../../data/countries.json")
  			.then(
  			response => {
  				this.setState({countryData: JSON.parse(response)});
  				console.log(JSON.parse(response));
  			},
    		error => console.log(`Rejected: ${error}`)
			);
	},

	componentDidMount : function(){
		this.getData();
		this.displayCurrentStep();
	},

	componentDidUpdate : function(){
		this.displayCurrentStep();
	},

	changeStep : function(value){
		this.setState({currentStep : value});
	},  

	displayCurrentStep : function(){

		let steps = {
			st1 : document.querySelector('.Step1'),
			st2 : document.querySelector('.Step2'),
			st3 : document.querySelector('.Step3'),
			st4 : document.querySelector('.Step4'),
			result : document.querySelector('.Result')
		};

		let nav = {
			num : document.querySelector('.NumNavigation'),
			prevNext : document.querySelector('.PrevNext')
		};

		switch(this.state.currentStep) {
    		case 1:
    			this.hideAllSteps(steps);
    			steps.st1.classList.remove('display-none');
        		break;
    		case 2:
    			this.hideAllSteps(steps);
    			steps.st2.classList.remove('display-none');
        		break;
        	case 3:
        		this.hideAllSteps(steps);
    			steps.st3.classList.remove('display-none');
        		break;
        	case 4:
        		this.hideAllSteps(steps);
    			steps.st4.classList.remove('display-none');
        		break;
        	case 5:
        		this.hideAllSteps(steps);
        		nav.num.classList.add('display-none');
        		nav.prevNext.classList.add('display-none');
        		steps.result.classList.remove('display-none');
   		default:
        		break;
		}
	},

	hideAllSteps : function(steps){

		for (let key in steps){
			steps[key].classList.add('display-none');
		};

	},


	validateStep1 : function(){
		// inputs
		let name = document.querySelector('#name');
		let mail = document.querySelector('#mail');
		// errors
		let emptyName = document.querySelector('.emptyName');
		let emptyMail = document.querySelector('.emptyMail');
		let nonMail = document.querySelector('.nonMail');
		var r = /^\w+@\w+\.\w{2,4}$/i;   //английские буквы, собака,
										 //опять буквы , точка, буквы от 2 до 4шт. Регистр не учитывается.

		if (name.value == "" || name.value == null) {
   			name.classList.add('invalid');
   			emptyName.classList.add('display-block');
   			return false
   		} else if (mail.value == "" || mail.value == null) {
   			name.classList.remove('invalid');
   			emptyName.classList.remove('display-block');
   			mail.classList.add('invalid');
   			emptyMail.classList.add('display-block');
   			return false
   		} else if (!r.test(mail.value)){
   			name.classList.remove('invalid');
   			emptyName.classList.remove('display-block');
   			emptyMail.classList.remove('display-block');
   			mail.classList.add('invalid');
   			nonMail.classList.add('display-block');
   			return false
   		} else {
   			name.classList.remove('invalid');
   			mail.classList.remove('invalid');
   			emptyMail.classList.remove('display-block');
   			emptyName.classList.remove('display-block');
   			nonMail.classList.remove('display-block');

   			this.setState({step1Valid : true});
   			this.setState({name : name.value, mail: mail.value});
   			return true;
   		}
	},
	validateStep2 : function(){
		// selects
		let city = document.querySelector('#city');
		let country = document.querySelector('#country');
		// errors
		let errorCity = document.querySelector('.errorCity');
		let errorCountry = document.querySelector('.errorCountry');

		if (country.value == "default") {
   			country.classList.add('invalid');
   			errorCountry.classList.add('display-block');
   			return false
   		} else if (city.value == "default"){
   			country.classList.remove('invalid');
   			errorCountry.classList.remove('display-block');
   			city.classList.add('invalid');
   			errorCity.classList.add('display-block');
   			return false
   		} else {
   			city.classList.remove('invalid');
   			errorCity.classList.remove('display-block');

   			this.setState({step2Valid : true});
   			this.setState({country : country.value, city: city.value});
   			return true;
   		}

	},
	validateStep3 : function(){
		// checkboxes
		let fb = document.querySelector('#fb');
		let vk = document.querySelector('#vk');
		let tw = document.querySelector('#tw');
		let ok = document.querySelector('#ok');
		//inputs
		let fb_inp = document.querySelector('#fb-input');
		let vk_inp = document.querySelector('#vk-input');
		let tw_inp = document.querySelector('#tw-input');
		let ok_inp = document.querySelector('#ok-input');
		//pattern
		let r = /^\w{2,}\.+\w{2,3}\/\w{2,}$/i; //dsjsdds.com/dsdsdsds
		// errors
		let errorPattern = document.querySelector('.ShowPattern');

		if (fb.checked == true && !r.test(fb_inp.value)) {
			fb_inp.classList.add('invalid');
			errorPattern.classList.add('display-block');
			return false		
   		} else if (vk.checked == true && !r.test(vk_inp.value)){
   			fb_inp.classList.remove('invalid');
			errorPattern.classList.remove('display-block');
			vk_inp.classList.add('invalid');
			errorPattern.classList.add('display-block');
   			return false
   		} else if (tw.checked == true && !r.test(tw_inp.value)){
   			fb_inp.classList.remove('invalid');
			errorPattern.classList.remove('display-block');
   			vk_inp.classList.remove('invalid');
			errorPattern.classList.remove('display-block');
			tw_inp.classList.add('invalid');
			errorPattern.classList.add('display-block');
   			return false
   		} else if (ok.checked == true && !r.test(ok_inp.value)){
   			fb_inp.classList.remove('invalid');
   			vk_inp.classList.remove('invalid');
   			tw_inp.classList.remove('invalid');
			errorPattern.classList.remove('display-block');
			ok_inp.classList.add('invalid');
			errorPattern.classList.add('display-block');
   			return false
   		} else {
   			fb_inp.classList.remove('invalid');
   			vk_inp.classList.remove('invalid');
   			tw_inp.classList.remove('invalid');
   			ok_inp.classList.remove('invalid');
			errorPattern.classList.remove('display-block');

   			this.setState({step3Valid : true});
   			this.setState( 
   				{facebook : fb_inp.value,
   				 vkontakte: vk_inp.value,
   				 twitter : tw_inp.value,
   				 odnoklassniki: ok_inp.value }
   				);
   			return true;
   		}

	},
	validateStep4 : function(){
		// selects
		let animals = document.querySelectorAll('.animals');
		// selected
		let chosen = document.querySelector('.chosen');
		// errors
		let noOneChosen = document.querySelector('#noOne');
		let dogChosen = document.querySelector('#doggy');

		if (chosen == null) {
   			noOneChosen.classList.add('display-block');
   			return false
   		} else if (animals[3].classList.contains("chosen")){
   			noOneChosen.classList.remove('display-block');
   			dogChosen.classList.add('display-block');
   			return false
   		} else {
   			dogChosen.classList.remove('display-block');
   			this.setState({step4Valid : true});
   			this.setState({favoriteCat : chosen.id});
   			return true;
   		}

	},

	resetAll : function(){
		let nav = {
			num : document.querySelector('.NumNavigation'),
			prevNext : document.querySelector('.PrevNext')
		};
		// reset App state
		this.setState({
			currentStep : 1,
			name          : null,
			mail          : null,
			country       : null,
			city          : null,
			facebook      : null,
			vkontakte     : null,
			twitter       : null,
			odnoklassniki : null,
			favoriteCat   : null,
			step1Valid : false,
			step2Valid : false,
			step3Valid : false,
			step4Valid : false,	
		});
		// display navigation
		nav.num.classList.remove('display-none');
        nav.prevNext.classList.remove('display-none');
        //Reset Step 2 
        document.getElementById('country').value = "default";
        document.getElementById('city').value = "default";
        //Reset Step 3
        document.getElementById('fb').checked = false;
        document.getElementById('vk').checked = false;
        document.getElementById('tw').checked = false;
        document.getElementById('ok').checked = false;
        document.getElementById('fb-input').value = null;
        document.getElementById('vk-input').value = null;
        document.getElementById('tw-input').value = null;
        document.getElementById('ok-input').value = null;
        document.getElementById('fb-input').classList.remove("display-block");
        document.getElementById('vk-input').classList.remove("display-block");
        document.getElementById('tw-input').classList.remove("display-block");
        document.getElementById('ok-input').classList.remove("display-block");
        // Reset Step 4
        document.getElementById('cat1').classList.remove("chosen");
        document.getElementById('cat2').classList.remove("chosen");
        document.getElementById('cat3').classList.remove("chosen");
	},

	reRenderStep1 : function(){
		let counter = this.state.Step1ResetTimes + 1;
		this.setState({Step1ResetTimes : counter});
	},

	render : function () {
		return (
				<div className="app">
					<NumNavigation onValidCheck1 = {this.validateStep1}
							  	   onValidCheck2 = {this.validateStep2}
							  	   onValidCheck3 = {this.validateStep3}
							  	   onValidCheck4 = {this.validateStep4}
								   currentStep   = {this.state.currentStep}
								   onChangeStep  = {this.changeStep} />
					<Step1 key={this.state.Step1ResetTimes} isReset = {this.state.Step1ResetTimes}/>
					<Step2 cities    = {this.state.cityData} 
						   countries = {this.state.countryData}
						   />
					<Step3 />
					<Step4 />
					<PrevNext onReRender    = {this.reRenderStep1}
							  onValidCheck1 = {this.validateStep1}
							  onValidCheck2 = {this.validateStep2}
							  onValidCheck3 = {this.validateStep3}
							  onValidCheck4 = {this.validateStep4}
							  currentStep   = {this.state.currentStep}
							  onChangeStep  = {this.changeStep} />
					<Result name          = {this.state.name}
							mail          = {this.state.mail}
							country       = {this.state.country}
							city          = {this.state.city}
							facebook      = {this.state.facebook}
							vkontakte     = {this.state.vkontakte}
							twitter       = {this.state.twitter}
							odnoklassniki = {this.state.odnoklassniki}
							favoriteCat   = {this.state.favoriteCat}
							onResetAll    = {this.resetAll} />
				</div>
			);
	}
});

ReactDOM.render(
	<App />,
  document.getElementById('app')
);
