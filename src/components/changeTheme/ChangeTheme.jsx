import { useEffect } from 'react';
import { useMantineColorScheme, Button, Group } from '@mantine/core';

export const ChangeTheme = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    useEffect(() => {
        document.body.setAttribute('data-theme', colorScheme);
    }, [colorScheme]);

    return (
        <Group>
            <Button onClick={() => setColorScheme('light')}>Light</Button>
            <Button onClick={() => setColorScheme('dark')}>Dark</Button>
            <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        </Group>
    );
}