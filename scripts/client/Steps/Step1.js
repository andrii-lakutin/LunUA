import React from 'react';

export let Step1 = React.createClass({
getInitialState: function() {
  	return {
  		NameValue : null,
  		MailValue : null
  			};
	},
handleChangeName: function(event) {
	this.setState({NameValue: event.target.value});
},
handleChangeEmail: function(event) {
	this.setState({MailValue: event.target.value});
},
shouldComponentUpdate: function(nextProps, nextState) {
  return this.props.Step1ResetTimes !== nextProps.Step1ResetTimes;
},

render : function () {
		return (
			<div className="Step1">
				<form action="#">
					<legend>1.Введите имя и e-mail</legend>
   					<input id="name"
   						   ref="name"
   						   type="text"  
   						   placeholder="Имя" 
   						   maxLength="28"   
   						   value={this.state.NameValue} 
   						   onChange={this.handleChangeName}/>
   						   <div className="er nameErrors emptyName"> - Поле не должно оставаться пустым</div>
   						   <br/>
   					<input id="mail"
   						   ref="mail"
   						   type="email" 
   						   maxLength="20" 
   						   placeholder="E-mail" 
   						   value={this.state.MailValue} 
   						   onChange={this.handleChangeEmail}/>
   						   <div className="er mailErrors emptyMail">- Поле не должно оставаться пустым</div>
   						   <div className="er mailErrors nonMail">- Используйте следующий формат: example@example.expl</div>
				</form>
			</div>
			);
	}
});

