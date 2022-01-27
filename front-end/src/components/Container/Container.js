import React from 'react';

function Container(props) {
  return (
    <div className="container-md" style={{marginTop: "2rem"}} /* style={{maxWidth: '70%'}} */>
      {props.children}
    </div>
  );
}

export default Container;