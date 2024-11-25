import { Link } from 'react-router-dom';
import { Header, Group, Flex, UnstyledButton, useMantineTheme } from '@mantine/core';
import { DashboardButton } from '../buttons/openCloseSideBarButtons/dashboarButton/DashboardButton';
import { ChangeTheme } from '../changeTheme/ChangeTheme';
import { AiOutlineStock } from "react-icons/ai";
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
            <div className={styles.wrapper}>
                <Link to="/charts" className={styles.links}>
                    <DashboardButton text={"Charts"}
                        bg={
                            theme.colorScheme === 'light'
                                ?
                                '#20294C'
                                :
                                '#5AA1C2'
                        }
                        color={'white'}
                    />
                </Link>
                <Flex
                    align="center"
                    justify="center"
                    gap={5}
                    sx={groupStyles}
                >
                    <AiOutlineStock />
                    <UnstyledButton>Stocks</UnstyledButton>
                </Flex>
                <Link to="/" className={styles.links}>
                    <Flex
                        align="center"
                        justify="center"
                        gap={5}
                        sx={groupStyles}
                    >
                        <FcCurrencyExchange />
                        <UnstyledButton>Currency</UnstyledButton>
                    </Flex>
                </Link>
                <ChangeTheme />
            </div>
        </Header>
    );
}