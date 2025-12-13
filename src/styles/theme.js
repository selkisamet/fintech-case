export const theme = {
    colors: {
        primary: "#c8ee44",
        secondary: "#29A073",
        light: "#FFFFFF",
        darkish: "#363A3F",
        error: "#FF4D4F",
        black: "#000000",

        gray: {
            gray1: "#FAFAFA",
            gray2: "#F8F8F8",
            gray3: "#F5F5F5",
            gray4: "#EBE8E8",
            gray5: "#F2F2F2",
            gray6: "#B2AEA9",
        },

        text: {
            text1: "#1b212d",
            text2: "#929eae",
            text3: "#78778b",
        },
    },

    typography: {
        fontFamily: {
            primary: `"Kumbh Sans", sans-serif`,
        },

        fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
            lg: "3rem",
        },

        fontWeight: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },

    breakpoints: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
    },

    media: {
        xs: `@media (max-width: 480px)`,
        sm: `@media (max-width: 640px)`,
        md: `@media (max-width: 768px)`,
        lg: `@media (max-width: 1024px)`,
        xl: `@media (max-width: 1280px)`,
        xxl: `@media (max-width: 1536px)`,
    },
};
