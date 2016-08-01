import React from 'react';

export let Result = React.createClass({

	createSocialSpans : function(){
		let array = [];
		if (this.props.facebook != "") {
			array.push(<div key="fb"><span>Facebook: </span><span>{this.props.facebook}</span><br/></div>);
		} 
		if (this.props.vkontakte != "") {
			array.push(<div key="vk"><span>Vkontakte: </span><span>{this.props.vkontakte}</span><br/></div>);
		}
		if (this.props.twitter != "") {
			array.push(<div key="tw"><span>Twitter: </span><span>{this.props.twitter}</span><br/></div>);
		}
		if (this.props.odnoklassniki != "") {
			array.push(<div key="ok"><span>OK: </span><span>{this.props.odnoklassniki}</span><br/></div>);
		}
		return array;
	},

	resetAll : function(){
		this.props.onResetAll();
	},

	render : function () {
		return (
			<div className="Result">
				<div className="card">
					<div className="img" id={this.props.favoriteCat}></div>
					<h1>{this.props.name}</h1>
					<p>{this.props.mail}</p>
					<p>{this.props.city + ',' + this.props.country}</p>
					<div className="table">
						{this.createSocialSpans()}
					</div>
				</div>
				<input type="button" value="Пройти заново" onClick={this.resetAll}/>
			</div>
			);
	}
});
