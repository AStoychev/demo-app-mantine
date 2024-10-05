import { Container, Group, Text, Anchor } from '@mantine/core';

export const Footer = () => {
    return (
        <Container py="md" style={{ borderTop: '1px solid #e9ecef' }}>
            <Group position="apart">
                <Text size="sm" color="dimmed">
                    © 2024 A.Stoychev
                </Text>
                <Group spacing="xs">
                    <Anchor href="#" size="sm">Privacy Policy</Anchor>
                    <Anchor href="#" size="sm">Terms of Service</Anchor>
                </Group>
            </Group>
        </Container>
    );
};
