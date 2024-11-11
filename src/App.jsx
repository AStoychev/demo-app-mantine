import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Headers } from './components/header/Header';
import { SideBar } from './components/sideBar/SideBar';
import { Table } from './components/table/Table';
import { Chart } from './components/chart/Chart';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
    const localStorageTheme = localStorage.getItem('theme');
    const [colorScheme, setColorScheme] = useState(localStorageTheme);

    const toggleColorScheme = (value) => {
        setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
    };
    localStorage.setItem('theme', colorScheme)

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>
            <Headers />
                <div className="main-content">
                    {/* <div className='content'> */}
                        <SideBar />
                        <Routes>
                            <Route path='/' element={<Table />} />
                            <Route path='/charts' element={<Chart/>} />
                        </Routes>
                    {/* </div> */}
                </div>
                <Footer />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;