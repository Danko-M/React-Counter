import React from 'react';

class Reset extends React.Component {
  handleReset(e) {    
    this.props.onClick(e);
  }
  render() {    
    return (
        <div className="reset" onClick={(e) => this.handleReset(e)}>reset</div>     
     )
  }
}

export default Reset;