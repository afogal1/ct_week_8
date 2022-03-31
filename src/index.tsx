import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'react-redux'; // register our state provider inside of our overall application
import { FirebaseAppProvider, useSigninCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { Home, Dashboard, SignIn } from './components';
import './styles.css'; // for the CSS to take effect
import { theme } from './Theme/themes';
import { store } from './redux/store'; // register our state provider inside of our overall application


// we're talking about redux in this project, however because of the size (it being a small project) 
// we could get away without it completely. Redux is usually better served with larger projects and the simple state
// management that react already provides (IE useState) would be enough for our small project.
ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseConfig= {firebaseConfig}>
        <Provider store= {store}>
        <ThemeProvider theme = {theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Home title={'Ranger Drones'} />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signin' element={<SignIn />} />
          </Routes>
          </Router>
        </ThemeProvider>
        </Provider>
      </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
