import { FaBars } from "react-icons/fa";
import styles from "./OpenCloseSideBarButtons.module.css";

export const OpenCloseSideBarButtons = ({ open, close, opened }) => {
    return (
        <div
            className={styles.wrapper}
            onClick={opened ? close : open}
        >
            <div
                style={{
                    transform: opened
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                }}
                className={styles.iconWrapper}
            >
                <FaBars />
            </div>
        </div>
    );
};