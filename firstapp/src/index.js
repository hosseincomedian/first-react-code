import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [title, setTitle] = useState("num: ")

  return (
    <div>
      <Hello title={title} />
      <Timer />
    </div>
  )

}

root.render(<App />);



