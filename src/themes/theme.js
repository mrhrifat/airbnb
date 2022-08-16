import { createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      primary: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
      },
      variants: "subtitle2",
      textTransform: "capitalize",
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: "row",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        p: 0,
        // disableRipple: true,
      },
      variant: "text",
    },
    MuiTab: {
      defaultProps: {
        // disableRipple: true,
      },
    },
  },
});
