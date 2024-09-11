import { useState } from 'react';
import { Group, Button, MantineProvider } from '@mantine/core';
import { ChangeTheme } from './components/changeTheme/ChangeTheme';
import { Header } from './components/header/Header';
// import { Table } from './components/table/Table';
import './App.css'

function App() {

    return (
        <MantineProvider defaultColorScheme="light">
            <ChangeTheme />
        </MantineProvider>
    )
}

export default App
