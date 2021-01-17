import React from 'react';
import ChartWrapper from '../components/WrapperExample/ChartWrapper/ChartWrapper';

function WrapperPage(): JSX.Element {
  return (
    <div className="App">
        <h2>Basic React Wrapper Example</h2>
        <ChartWrapper />
        <p>Simple example – examine codebase for further detail</p>
    </div>
  );
}

export default WrapperPage;