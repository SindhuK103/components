import React  from 'react';
import Student from './FirstComponent';

class Employee extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
       <h1>Emp ID: {this.props.id}</h1>
       <Student age={22}></Student>
      </div>
    )
  }
}

export default Employee;


