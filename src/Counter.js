import React from 'react';
import Result from './Result.js';
import Reset from './Reset.js';
import Button from './Button.js';
import InputBox from './InputBox.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.initialStep, 
      count: props.initialCount     
    };       
  }
  up() {
    this.setState({count: this.state.count + this.state.step});
  }
  down() {
    this.setState({count: this.state.count - this.state.step});
  }  
  updateSteps(e){
    this.setState({
      step: parseInt(e.target.value, 10) || 0
    });
  }  
  reset(e){
    this.setState({count: 0 });
  }    
  render() {
    return (
      <div className="counter">
        <Result result={this.state.count}/>
        <Reset  onClick={(e) => this.reset(e)}/>        
        <Button onClick={() => this.up()}>Add {this.state.step}</Button>
        <Button onClick={() => this.down()}>Subtract {this.state.step}</Button>
        <InputBox value={this.state.step} onChange={(e) => this.updateSteps(e)}/>               
      </div>   
   );    
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialStep: 5, initialCount: 0 };

export default Counter;