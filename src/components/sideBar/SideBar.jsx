import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Flex, UnstyledButton, Button } from '@mantine/core';
import { OpenCloseSideBarButtons } from '../buttons/openCloseSideBarButtons/OpenCloseSideBarButtons';
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";

const groupStyles = {
    width: '80%',
    padding: '10px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: '#4caf50',
        color: 'white',
    },
}

export const SideBar = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    return (
        <>
            <Drawer offset={8} radius="md" size="xs" opened={opened} onClose={close} title="Authentication"
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
                    <Group sx={groupStyles}>
                        <FaHome />
                        <UnstyledButton>Home</UnstyledButton>
                    </Group>
                    <Group sx={groupStyles}>
                        <FaRegUser />
                        <UnstyledButton>Profile</UnstyledButton>
                    </Group>
                    <Group sx={groupStyles}>
                        <MdMailOutline />
                        <UnstyledButton>Message</UnstyledButton>
                    </Group>
                    <Group sx={groupStyles}>
                        <VscSettingsGear />
                        <UnstyledButton>Settings</UnstyledButton>
                    </Group>
                    <Group sx={groupStyles}>
                        <IoMdLogOut/>
                        <UnstyledButton>Logout</UnstyledButton>
                    </Group>
                </Flex>
            </Drawer>

            <OpenCloseSideBarButtons open={open} close={close} toggle={toggle} />
        </>
    );
}