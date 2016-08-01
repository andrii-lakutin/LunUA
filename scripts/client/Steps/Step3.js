import React from 'react';

export let Step3 = React.createClass({
	toggleInput : function(e){
		switch(e.target.id) {
    	case "fb":
    	    document.querySelector('#fb-input').classList.toggle('display-block');
    	    break;
    	case "vk":
    	    document.querySelector('#vk-input').classList.toggle('display-block');
    	    break;
    	case "tw":
    	    document.querySelector('#tw-input').classList.toggle('display-block');
    	    break;
    	case "ok":
    	    document.querySelector('#ok-input').classList.toggle('display-block');
    	    break;
    	default:
    	    break;
		}
	},

	render : function () {
		return (
			<div className="Step3">
				<form action="#">
					<legend>3.Отметьте социальные сети</legend>
					<div className="row">
						<label><input id="fb" type="checkbox" value="Facebook" onChange={this.toggleInput}/>Facebook</label>
						<input maxLength="24" id="fb-input" type="text" name="name" placeholder="Ваша страница в Facebook"/>
					</div>
					<div className="row">
						<label><input id="vk" type="checkbox" value="Вконтакте" onChange={this.toggleInput}/>Вконтакте</label>
						<input maxLength="24" id="vk-input" type="text" name="name" placeholder="Ваша страница Вконтакте"/>
					</div>
					<div className="row">
						<label><input id="tw" type="checkbox" value="Twitter" onChange={this.toggleInput}/>Twitter</label>
						<input maxLength="24" id="tw-input" type="text" name="name" placeholder="Ваша страница в Twitter"/>
					</div>
					<div className="row">
						<label><input id="ok" type="checkbox" value="Одноклассники" onChange={this.toggleInput}/>Одноклассники</label>
						<input maxLength="24" id="ok-input" type="text" name="name" placeholder="Ваша страница в Одноклассники"/>
					</div>
					<div className="er ShowPattern">Формат: example.com/name</div>
				</form>
			</div>
			);
	}
});
