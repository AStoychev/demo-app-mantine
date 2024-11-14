import { useEffect } from 'react';
import { Flex, Switch, Text, useMantineColorScheme, useMantineTheme, rem } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export const ChangeTheme = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    useHotkeys([
        ['ctrl+space', () => toggleColorScheme()],
    ])

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{
                width: rem(16),
                height: rem(16)
            }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', colorScheme);
    }, [colorScheme]);

    return (
        <Flex direction="column" mt="20px">
            <Switch
                size="md"
                color="dark.4"
                onLabel={sunIcon}
                offLabel={moonIcon}
                checked={colorScheme === 'dark'}
                onChange={() => toggleColorScheme()}
            />
            <Text size="10px" c="dimmed">Ctrl+Space</Text>
        </Flex>
    );
};