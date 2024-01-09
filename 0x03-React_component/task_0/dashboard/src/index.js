// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App'; // Assuming App is your main component

const root = createRoot(document.getElementById('root'));
root.render(<App />);
