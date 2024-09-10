import { useState, useEffect } from 'react';
import { useMantineColorScheme, Button, Group, Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export const ChangeTheme = () => {
    const [mode, setMode] = useState(false);
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const theme = useMantineTheme();

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    useEffect(() => {
        if (mode) {
            setColorScheme('dark')
        } else {
            setColorScheme('light')
        }
    }, [mode])

    useEffect(() => {
        document.body.setAttribute('data-theme', colorScheme);
    }, [colorScheme]);

    return (
        <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} onClick={() => setMode(!mode)} />
        // <Group>
        //     <Button onClick={() => setColorScheme('light')}>Light</Button>
        //     <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        //     <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        // </Group>
    );
}