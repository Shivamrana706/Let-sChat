import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import MainApp from './components/main/mainApp';
import AccountProvider from './context/accountProvider';




function App() {
  return (
    <GoogleOAuthProvider clientId='167804297803-1uhmip8rche1og1j26orbj8163nrjs5c.apps.googleusercontent.com' >
      <AccountProvider>
        <MainApp />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
