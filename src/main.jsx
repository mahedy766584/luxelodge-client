import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import myCreatedRouter from './Routes/Routes';
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={myCreatedRouter} />
      </ThemeProvider>
      <Toaster />
    </QueryClientProvider>
  </HelmetProvider>
)