import { Text, List, ThemeIcon, rem } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export const TechnologiesList = () => {
    return (
        <>
            <Text size="xl" fw={700}>Technologies Used:</Text>
            <List
                spacing="xs"
                size="sm"
                center
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                }
            >
                <List.Item>React for creating a dynamic and responsive front-end</List.Item>
                <List.Item>Mantine for elegant and customizable UI components</List.Item>
                <List.Item>Redux for manage global state</List.Item>
                <List.Item>React Mantine Table for building feature-rich data tables</List.Item>
                <List.Item>TanStack for managing data fetching, caching, and synchronization in React</List.Item>
                <List.Item>FastAPI as the backend framework for serving APIs efficiently</List.Item>
                <List.Item>Redis and Celery for background task management, enabling real-time data processing and caching</List.Item>
                <List.Item>MongoDB for scalable, flexible data storage, particularly useful for managing large datasets like stock and forex data</List.Item>
            </List>
        </>
    )
}