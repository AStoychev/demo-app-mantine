import { useDisclosure } from '@mantine/hooks';
import { Drawer, Text, Title, Flex } from '@mantine/core';
import { OpenCloseSideBarButtons } from '../buttons/openCloseSideBarButtons/OpenCloseSideBarButtons';
import { PurposeListTop } from './Lists/PurposeListTop';
import { TechnologiesList } from './Lists/TechnologiesList';
import { FeaturesList } from './Lists/FeaturesList';
import { PurposeListDown } from './Lists/PurposeListDown';

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
                    <PurposeListTop />
                    <TechnologiesList />
                    <FeaturesList />
                    <PurposeListDown />
                </Flex>
            </Drawer>
            <OpenCloseSideBarButtons open={open} close={close} toggle={toggle} />
        </>
    );
}