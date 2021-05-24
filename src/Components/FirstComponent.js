import React  from 'react';


class Student extends React.Component {
  render() {
    return (
      <div>
        <h2> Age: {this.props.age} </h2>
      </div>
    )
  }
}

export default Student;