import React, { Component } from "react";
// class StudentProp extends Component {
//   state = {};
//   render() {
//     const { username, age } = this.props;
//     return (
//       <>
//         <h1>Hello, {username}</h1>
//         <p>Your age is: {age}</p>
//       </>
//     );
//   }
// }
StudentProp.defaultProps = {
  username: "Student",
  age: "NA",
};
// For functional components just pass the props and deconstruct the props
function StudentProp(props) {
  const { username, age } = props;
  return (
    <>
      <h1>Hello, {username}</h1>
      <p>Your age is: {age}</p>
    </>
  );
}

export default StudentProp;
