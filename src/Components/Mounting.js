import React from 'react';

 
class Constructor1 extends React.Component {
     constructor(props) {
       super(props);
       this.state = {Subject: "Maths"};
     }
    render() {
      return (
        <h3>Subject is :{this.state.Subject}</h3>
       );    
     }
   } 

  // export default Constructor1;

   
 class GetDerived extends React.Component {
      constructor(props) {
        super(props);
        this.state = {Subject: "English"};
      }
      static getDerivedStateFromProps(props, state) {
       return {Subject: props.NewSubject };
      }
      render() {
        return (
         <h1> My subject : {this.state.Subject}</h1>
       );
     }
    }
     export default GetDerived;


 class ComponentD extends React.Component {
     constructor(props) {
       super(props);
       this.state = {Name: "peter"};
     }
     componentDidMount() {
       setTimeout(() => {
         this.setState({Name:"Antony"})
       }, 1000)
    }
     render() {
       return (
         <h1>My Name is : {this.state.Name}</h1>
       );
     }
  }

   //export default ComponentD;


