import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  const [title, setTitle] = useState("num: ")

  return (
    <Fragment>
        <Todo/>
    </Fragment>
  )

}
root.render(<App />);



