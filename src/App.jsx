import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Headers } from './components/header/Header';
import { Table } from './components/table/Table';
import { SideBar } from './components/sideBar/SideBar';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
    // State to manage light/dark theme
    const localStorageTheme = localStorage.getItem('theme');
    const [colorScheme, setColorScheme] = useState(localStorageTheme);

    // Function to toggle between light and dark mode
    const toggleColorScheme = (value) => {
        setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
    };

    localStorage.setItem('theme', colorScheme)

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
                <div className="main-content">
                    <div className='content'>
                        <Headers />
                        <SideBar />
                        <Table />
                    </div>
                    <Footer />
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;