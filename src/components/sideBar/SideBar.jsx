import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export const SideBar = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
                {/* Drawer content */}
            </Drawer>

            {/* <Button onClick={open}>Open Drawer</Button> */}
        </>
    );
}