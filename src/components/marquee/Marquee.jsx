import { useMantineTheme } from "@mantine/core";
import styles from "./Marquee.module.css";

export const Marquee = () => {
  const theme = useMantineTheme();

  return (
    <div className={styles.movingTextWrapper} style={{
      // backgroundColor: theme.colorScheme === 'light' ? '#20294C' : '#5AA1C2'
    }}>
            <p className={styles.movingText}>
                This site is only for demo purposes to showcase programming skills.
            </p>
        </div>
  )
}