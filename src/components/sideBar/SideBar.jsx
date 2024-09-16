import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { OpenCloseSideBarButtons } from '../Buttons/OpenCloseSideBarButtons';

export const SideBar = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    return (
        <>
            <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication"
                closeButtonProps={{
                    size: 'lg',
                    // color: 'red',
                    // style: { borderRadius: '50%', borderColor: 'black', color: 'black' }, // Custom CSS styles
                }}
            >
                <div>Table</div>
                <div>Charts</div>
            </Drawer>

            <OpenCloseSideBarButtons open={open} close={close} toggle={toggle} />
        </>
    );
}