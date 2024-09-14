import { CloseButton } from "@mantine/core"

const styles = {
    position: "absolute",
    top: "0px",
    dispplay: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid red",
    zIndex: 100
}

export const OpenCloseSideBarButtons = ({ open }) => {
    return (
        <div style={styles}>
            <CloseButton size="sm" />
        </div>
    )
}