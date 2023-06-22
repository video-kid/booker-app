export const palette = {
  background: {
    lightMode: "#F5F5F5",
    darkMode: "#616161",
  },
  grey: {
    "200": "#EEEEEE",
    "400": "#BDBDBD",
    "600": "#757575",
    "800": "#424242",
  },
  primary: {
    "200": "#B39DDB",
    "400": "#7E57C2",
    "600": "#5E35B1",
    "800": "#4527A0",
  },
  secondary: {
    "200": "#80CBC4",
    "400": "#26A699",
    "600": "#00897A",
    "800": "#00695C",
  },
  yellow: "#E5DB65",
  blue: "#5765C2",
  red: "#C6525B",
  green: "#4DB677",
};

export const color = {
  background: palette.background.lightMode,
  text: palette.grey["800"],
  primary: palette.primary["400"],
  severity: {
    success: palette.green,
    warning: palette.yellow,
    error: palette.red,
    information: palette.blue,
  },
  tableHeader: palette.primary["600"],
};
