import React from 'react';

export let Step4 = React.createClass({

	iChooseYou : function(e){
		let animals = document.querySelectorAll('.animals');
		for (var i = 0; i < animals.length; i++) {
			animals[i].classList.remove('chosen');
		}
		e.target.classList.add('chosen');
	},
	shouldComponentUpdate: function(nextProps, nextState) {
  		return this.props.isReset !== nextProps.isReset;
	},

	render : function () {
		return (
			<div className="Step4">
				<form action="#">
					<legend>4.Выберите любимого котика</legend>
					<div id="cat1" className="animals" onClick={this.iChooseYou}></div>
					<div id="cat2" className="animals" onClick={this.iChooseYou}></div>
					<div id="cat3" className="animals" onClick={this.iChooseYou}></div>
					<div id="dog4" className="animals" onClick={this.iChooseYou}></div>
					<p id="noOne">Не может быть! Хоть один котик должен понравиться.</p>
					<p id="doggy">Вы выбрали собачку.А надо котика.</p>
				</form>
			</div>
			);
	}
});