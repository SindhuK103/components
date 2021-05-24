import React from 'react';

class Updating1 extends React.Component {
    
        constructor(props) {
          super(props);
          this.state = {Colour: "red"};
        }
        static getDerivedStateFromProps(props, state) {
          return {colour: props.New };
        }
        changeColor = () => {
          this.setState({Colour: "blue"});
        }
        render() {
          return (
            <div>
            <h1>My Favorite Color : {this.state.Colour}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
          );
        }
      
}

 //export default Updating1;

class Updating2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }
    shouldComponentUpdate() {
      return false;
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

 // export default Updating2;

 class Updating3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My  Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  // export default Updating3


  class Updating4 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
 // export default Updating4;

 class Updating5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      );
    }
  }
  
  export default  Updating5

  class Updating6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

 // export default Updating6;

  