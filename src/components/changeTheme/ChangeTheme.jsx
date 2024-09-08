import { useMantineColorScheme, Button, Group } from '@mantine/core';

export const ChangeTheme = () => {
    const { setColorScheme } = useMantineColorScheme();

    return (
        <Group>
            <Button onClick={() => setColorScheme('light')}>Light</Button>
            <Button onClick={() => setColorScheme('dark')}>Dark</Button>
            <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        </Group>
    );
}