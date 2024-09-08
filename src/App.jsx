import { useState } from 'react';
import { Group, Button, createTheme, MantineProvider } from '@mantine/core';
import { ChangeTheme } from './components/changeTheme/ChangeTheme';
import './App.css'

function App() {

    return (
        <MantineProvider defaultColorScheme="light">
            <ChangeTheme />
        </MantineProvider>
    )
}

export default App
