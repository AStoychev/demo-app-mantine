import { useDisclosure } from '@mantine/hooks';
import { Drawer, Text, Title, Flex } from '@mantine/core';
import { OpenCloseSideBarButtons } from '../buttons/openCloseSideBarButtons/OpenCloseSideBarButtons';
import { TechnologiesList } from './Lists/TechnologiesList';
import { FeaturesList } from './Lists/FeaturesList';

export const SideBar = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    return (
        <>
            <Drawer offset={8} radius="md" size="md" opened={opened} onClose={close}
                closeButtonProps={{
                    size: 'lg',
                }}
            >
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                >
                    <Title order={3}>About This Demo App</Title>
                    <Text>
                        Welcome to my demo application! 🎉
                    </Text>
                    <Text>
                        This app has been built to showcase my full-stack development skills using cutting-edge technologies.
                        The purpose of this demo is to display Stock and Forex data, along with interactive charts
                        and tables for enhanced user interaction and data visualization.
                    </Text>
                    <TechnologiesList />
                    <FeaturesList />
                    <Text>
                        This app is for demonstration purposes only and is designed to highlight my expertise in building scalable,
                        interactive applications. I hope this demo provides a clear example of how these technologies work together to
                        create a rich, real-time data experience.
                    </Text>

                    <Text>
                        Feel free to explore the features, and don’t hesitate to reach out with any questions or feedback!
                    </Text>
                </Flex>
            </Drawer>
            <OpenCloseSideBarButtons open={open} close={close} toggle={toggle} />
        </>
    );
}