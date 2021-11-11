import React from 'react';
import './App.css';
// import Home from './components/Home';
// import Modal from './components/Modal';

const Modal = React.lazy(() => import('./components/Modal'));
const Home = React.lazy(() => import('./components/Home'));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Modal />
        <Home />
      </React.Suspense>
    </div>
  );
}

export default App;
