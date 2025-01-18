import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import myCreatedRouter from './Routes/Routes';
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './Components/provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import LanguageProvider from './Components/provider/LanguageProvider';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={myCreatedRouter} />
          </AuthProvider>
        </ThemeProvider>
        <ToastContainer />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
)
