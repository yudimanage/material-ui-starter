"use client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    {children}
                </StyledEngineProvider>
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
