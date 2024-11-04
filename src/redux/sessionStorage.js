export const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('reduxState', serializedState);
    } catch (error) {
        console.error("Could not save state", error);
    }
};

export const loadFromSessionStorage = () => {
    try {
        const serializedState = sessionStorage.getItem('reduxState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Could not load state", error);
        return undefined;
    }
};
