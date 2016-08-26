import React from 'react';

const GiversWaiting = React.createClass({
  render() {
    const styleTitle = {
      textAlign: 'center',
      display: 'inline-block',
      fontFamily: 'Mallanna',
      color: 'black',
      textShadow: '2px 2px #e5f3e9',
      fontSize: '2.5em',
      fontWeight: '200',
      borderBottom: '2px solid #ff7f66',
      marginTop: '0px'
    };

    const styleDiv = {
      textAlign: 'center'
    };

    const styleText = {
      fontFamily: 'Mallanna',
      fontSize: '18px',
      padding: '10px'
    };

    /* eslint-disable max-len */
    return <div style={styleDiv}>
      <h1 style={styleTitle}>Thank You!</h1>
      <p style={styleText}>Wait for a text inviting you to chat with a bummer.</p>
    </div>;

    /* eslint-enable max-len */
  }
});

export default GiversWaiting;
