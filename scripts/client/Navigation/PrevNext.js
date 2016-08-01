import React from 'react';

export let PrevNext = React.createClass({
	decrement : function(){
		let val = this.props.currentStep;
		if (val > 1) {
			val--;
			this.props.onChangeStep(val);
		}
	},

	increment : function(){
		let val = this.props.currentStep;

		switch(val) {
    		case 1:
    			if (this.props.onValidCheck1() == true) {
    				val++;
       				this.props.onChangeStep(val);
       			}
       			break;
    		case 2:
    			if (this.props.onValidCheck2() == true) {
    				val++;
        			this.props.onChangeStep(val);
    			}
        		break;
        	case 3:
        		if (this.props.onValidCheck3() == true) {
        			val++;
        			this.props.onChangeStep(val);
        		}
        		break;
    		default:
    			break;
     	}	
	},

	componentDidUpdate: function(){
		let val = this.props.currentStep;
		if (val == 4){
			this.refs.end.classList.add('display-block');
			this.refs.next.classList.add('display-none');
		} else {
			this.refs.end.classList.remove('display-block');
			this.refs.next.classList.remove('display-none');
		}
	},

	checkLastAndResult : function(){
		let val = this.props.currentStep;
		
		if (this.props.onValidCheck4() == true) {
        	val++;
        	this.props.onChangeStep(val);
        }

        this.props.onReRender();
	},

	render : function () {
		return (
			<div className="PrevNext">
   				<input ref="previous" type="button" value="&lt;&nbsp;&nbsp;&nbsp;Предыдущий" onClick={this.decrement}/>
   				<input ref="next"     type="button" value="Следующий&nbsp;&nbsp;&nbsp;&gt;"  onClick={this.increment}/>
   				<input ref="end"      type="button" value="Завершить" onClick={this.checkLastAndResult}/>
			</div>
			);
	}
});

