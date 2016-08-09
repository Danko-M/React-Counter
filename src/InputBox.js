import React from 'react';

class InputBox extends React.Component {
  handleChange(e) {    
    this.props.onChange(e);
  }
  render() {    
    return (
      <div>
        <input type="number" value={this.props.value} onChange={(e) => this.handleChange(e)} />    
        <div className="tip">(Pssst, you can change this value)</div> 
        <small>Made with ♥ by <a href="http://danko-m.github.io/" target="_blank">Danko</a></small>
     </div>   
     )
  }
}

export default InputBox;