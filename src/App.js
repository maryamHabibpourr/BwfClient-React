import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './theme';
import Header from './components/layout/header';
import Main from './components/layout/main';
import Sidebar from './components/layout/sidebar';


function App() {

  const user = JSON.parse(localStorage.getItem('bwf-user'));

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
        <BrowserRouter>
          <div className="App">
          <ToastContainer />
            <Header />
            <div className="general-content">
              <Sidebar />
              <Main />
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
