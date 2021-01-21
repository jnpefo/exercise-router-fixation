import React from 'react';

class StrictAcess extends React.Component {
  render() {
    const { greetingMessage } = this.props;

    return (
      <div>
        <h2> StrictAcess </h2>
        <p> {greetingMessage}, this is my awesome StrictAcess component </p>
      </div>
      )
  }
}

export default StrictAcess