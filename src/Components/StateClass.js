import React from 'react';

class StateClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id:2,
          Name: "Sri"};
          
    }
    changeName = () => {
        this.setState({Name: "veer"});
      }
    render() {
      return (
        <div>
          <h1>My id: {this.state.id}</h1>
          <h1>My name: {this.state.Name}</h1>

          <p> hi from <u>state</u></p>
          <button
          type="button"
          onClick={this.changeName}
        >Change Name</button>
        </div>
      );
    }
  }

   export default StateClass;