import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster
      toastOptions={{
        unstyled: false,
        classNames: {
          error: 'bg-red-400 text-white',
          success: 'bg-green-400 text-white',
          warning: 'bg-orange-400 text-white',
          info: 'bg-blue-400 text-white',
        },
        style: {
          borderRadius: '10px',
          padding: '15px'
        },
      }}
    />
    <App />
  </BrowserRouter>,
)
