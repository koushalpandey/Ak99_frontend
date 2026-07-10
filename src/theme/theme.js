import { createTheme } from "@mui/material/styles";
import { COLORS } from "./palette";

export const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
        },

        secondary: {
            main: COLORS.orange,
        },
        orangeHover: {
            main: COLORS.orangeHover,
        },
        black: {
            main: COLORS.black,
        },
        white: {
            main: COLORS.white,
        },
        topDeal:{
            main:COLORS.topDeal
        },
        background:{
            main:COLORS.background
        },
        backgroundBlue:{
            main:COLORS.backgroudBlue
        },
        backgroundPurpleSoft:{
            main:COLORS.backgroundPurpleSoft
        },
        backgroundOrangeSoft:{
            main:COLORS.backgroundOrangeSoft
        },

        custom: {
            border: COLORS.border,
            textSecondary: COLORS.textSecondary,

        },
    },
    typography: {
        fontFamily: "Be Vietnam Pro",

    },
    box: {
        fontFamily: "Be Vietnam Pro"
    },
    button: {
        fontFamily: "Be Vietnam Pro"
    },


});