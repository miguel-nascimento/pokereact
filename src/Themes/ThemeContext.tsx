import React from "react";

// theme for index page
const themeColours = {
    light: {
        backgroundColor: "green"
    },
    dark: {
        backgroundColor: "red"
    }
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
    theme: ThemeName;
    setTheme: (name: ThemeName) => void;
};
const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
    children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
    const [themeName, setThemeName] = React.useState<ThemeName>("light");

    React.useEffect(() => {
        const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(darkOS ? "dark" : "light");
    }, []);

    const setTheme = (name: ThemeName) => {
        document.body.style.setProperty(
            "--background-color",
            themeColours[name].backgroundColor
        );
        setThemeName(name);
    };
    return (
        <ThemeContext.Provider value={
            { theme: themeName, setTheme }}> {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);