import { Header, Text, Group, Button, useMantineTheme } from '@mantine/core';
import { ChangeTheme } from '../changeTheme/ChangeTheme';

export const Headers = () => {
    const theme = useMantineTheme();
    const color = theme.colors;
    
    return (
        <Header height={60}>
            <Group position="apart" style={{ height: '100%' }}>
                <Text weight={500}>My App</Text>
                <ChangeTheme />
                {/* <Button variant="outline">Login</Button> */}
            </Group>
        </Header>
    );
}