import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    )
  }
}

root.render(<App />);


// const tick = () => {
// }

// setInterval (()=> tick(), 1000);

