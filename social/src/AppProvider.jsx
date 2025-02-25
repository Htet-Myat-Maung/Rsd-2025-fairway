import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { createContext, useContext, useMemo, useState } from "react";
import AppRouter from "./AppRouter";

const AppContext = createContext();

export const useApp = () => {
    return useContext(AppContext);
};

export default function AppProvider() {
    const [mode, setMode] = useState("dark");
    const [openDrawer, setOpenDrawer] = useState(false);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
            },
        });
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{ mode, setMode, openDrawer, setOpenDrawer }}>
                <CssBaseline />
                <AppRouter />
            </AppContext.Provider>
        </ThemeProvider>
    );
}
