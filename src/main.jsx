import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
