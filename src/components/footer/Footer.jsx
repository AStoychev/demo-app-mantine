import { Flex, Container, Group, Text, Anchor } from '@mantine/core';

export const Footer = () => {
    return (
        <Flex align="center" justify="center" py="md" wrap="wrap" gap={15} style={{ borderTop: '1px solid #e9ecef' }}>
            <Flex gap={10}>
                <Anchor href="#" size="sm">Privacy Policy</Anchor>
                <Anchor href="#" size="sm">Terms of Service</Anchor>
                <Anchor href="https://astoychev.onrender.com/" target="_blank" size="sm">Contacts</Anchor>
            </Flex>
            <Text size="sm" color="dimmed">
                © 2024 A.Stoychev
            </Text>
        </Flex>
    );
};
