import { Text, List, ThemeIcon, rem } from "@mantine/core"
import { IconCircleCheck } from "@tabler/icons-react"

export const FeaturesList = () => {
    return (
        <>
            <Text
                size="xl"
                fw={700}>
                App Features:
            </Text>
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
                <List.Item>Real-time Stock and Forex data</List.Item>
                <List.Item>Interactive charts for financial data visualization</List.Item>
                <List.Item>Fast and responsive data tables using Mantine and React Mantine Table</List.Item>
                <List.Item>A seamless integration between front-end and back-end technologies to manage data efficiently</List.Item>
                <List.Item>Real-time updates using background processes for smooth data refreshes</List.Item>
            </List>
        </>
    )
}