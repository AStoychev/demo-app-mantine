import { useMantineTheme } from "@mantine/core";
import styles from "./Marquee.module.css";

export const Marquee = () => {

    return (
        <div className={styles.movingTextWrapper}>
            <p className={styles.movingText}>
                This site is only for demo purposes to showcase programming skills.
            </p>
        </div>
    )
}