// import React from 'react';

// class Users extends React.Component {
//   render() {
//     const { id } = this.props.match.params;
//     const { greetingMessage } = this.props;

//     return (
//         <div>
//           <h2> Users </h2>
//           <p> {greetingMessage}, this is my awesome Users component </p>
//           <h1> {id} </h1>
//         </div>
//       )
//   }
// }

// export default Users

import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match: { params: { id } }}) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    <h1> {id} </h1>
  </div>
);

export default Users;
