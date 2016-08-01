import React from 'react';

export let NumNavigation = React.createClass({

	changeStep : function(step){
		switch(step) {
    		case 1:
    			this.resetAllActiveButtons();
        		this.refs.one.classList.add('active-color');
        		break;
    		case 2:
    			this.resetAllActiveButtons();
    			this.refs.one.classList.add('complete-color');
        		this.refs.two.classList.add('active-color');
        		break;
        	case 3:
        		this.resetAllActiveButtons();
        		this.refs.one.classList.add('complete-color');
        		this.refs.two.classList.add('complete-color');
        		this.refs.three.classList.add('active-color');
        		break;
        	case 4:
        		this.resetAllActiveButtons();
        		this.refs.one.classList.add('complete-color');
        		this.refs.two.classList.add('complete-color');
        		this.refs.three.classList.add('complete-color');
        		this.refs.four.classList.add('active-color');
        		break;
   		default:
        		break;
		}
	},

	componentDidUpdate : function(){
		this.changeStep(this.props.currentStep);
	},

	resetAllActiveButtons : function(){
		for (let key in this.refs){
			this.refs[key].classList.remove('complete-color');
		};

		for (let key in this.refs){
			this.refs[key].classList.remove('active-color');
		};
	},

	sendInfoUp : function(e){
		let val = +e.target.value;
        switch(val) {
            case 1:
                this.props.onChangeStep(val);   //1 доступна всегда
                break;
            case 2:
                if (this.props.onValidCheck1() == true) {
                    this.props.onChangeStep(val);
                }
                break;
            case 3:
                if (this.props.onValidCheck1() == true && this.props.onValidCheck2() == true) {
                    this.props.onChangeStep(val);
                }
                break;
            case 4:
                if (this.props.onValidCheck1() == true &&
                    this.props.onValidCheck2() == true &&
                    this.props.onValidCheck3() == true) {
                    this.props.onChangeStep(val);
                }
            default:
                break;
        }   
	},

	render : function () {

		return (
			<div className="NumNavigation">
   				<input type="button" value="1" ref="one"   onClick={this.sendInfoUp}/>
   				<input type="button" value="2" ref="two"   onClick={this.sendInfoUp}/>
   				<input type="button" value="3" ref="three" onClick={this.sendInfoUp}/>
   				<input type="button" value="4" ref="four"  onClick={this.sendInfoUp}/>
			</div>
			);
	}
});

