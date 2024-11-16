import { useDisclosure } from '@mantine/hooks';
import { Drawer, Text, Title, Flex } from '@mantine/core';
import { OpenCloseSideBarButtons } from '../buttons/openCloseSideBarButtons/OpenCloseSideBarButtons';
import { PurposeListTop } from './Lists/PurposeListTop';
import { TechnologiesList } from './Lists/TechnologiesList';
import { FeaturesList } from './Lists/FeaturesList';
import { PurposeListDown } from './Lists/PurposeListDown';
import { FaEarlybirds } from "react-icons/fa6";

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
                    <Flex gap={3} align="center" justify="center">
                        <Text>
                            Welcome to my demo application!
                        </Text>
                        <FaEarlybirds size="30px" color='rgba(38, 117, 98, 0.8)' />
                    </Flex>
                    {/* <Text>
                        Welcome to my demo application! 🎉
                    </Text> */}
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