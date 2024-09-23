import { Header, Text, Group, Button, UnstyledButton, useMantineTheme } from '@mantine/core';
import { DashboardButton } from '../buttons/openCloseSideBarButtons/dashboarButton/DashboardButton';
import { ChangeTheme } from '../changeTheme/ChangeTheme';
// import { Search } from '../search/Search';
import { MdDashboard } from "react-icons/md";
import { AiOutlineStock, AiOutlineNodeIndex } from "react-icons/ai";
import { FcCurrencyExchange } from "react-icons/fc";
import styles from "./Header.module.css";

const groupStyles = {
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: '#4caf50',
        color: 'white',
    },
}

export const Headers = () => {
    const theme = useMantineTheme();

    return (
        <Header className={styles.header} height={60}>
            <div className={styles.leftSide}>
                {/* <Search /> */}
            </div>
            <div className={styles.rightSide}>
                <DashboardButton text={"Dashboard"} bg={theme.colorScheme === 'light' ? '#20294C' : '#5AA1C2'} color={'white'}/>
                <Group sx={groupStyles}>
                    <AiOutlineStock />
                    <UnstyledButton>Stocks</UnstyledButton>
                </Group>
                <Group sx={groupStyles}>
                    <FcCurrencyExchange />
                    <UnstyledButton>Currency</UnstyledButton>
                </Group>
                <Group sx={groupStyles}>
                    <AiOutlineNodeIndex />
                    <UnstyledButton>Index</UnstyledButton>
                </Group>
                <ChangeTheme />
            </div>
        </Header>
    );
}