import { useState } from "react";

import { MdDashboard } from "react-icons/md";
import styles from "./DashboardButton.module.css";

export const DashboardButton = ({ text, bg, color, hoverBg }) => {
    const [isOnHover, setIsOnHover] = useState(false);

    const buttonStyle = {
        background: isOnHover ? hoverBg : bg,
        color: color
    }

    return (
        <div
            className={styles.wrapper}
            style={buttonStyle}
            onMouseEnter={() => setIsOnHover(true)}
            onMouseLeave={() => setIsOnHover(false)}
        >
            <MdDashboard />
            {text}
        </div>
    )
}