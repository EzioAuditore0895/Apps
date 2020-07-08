import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: "#0C4B9C",
  secondary: "#f2f2f2",
  tertiary: "#5DA6A7",
  white: "#fff",
};

export const margin = {
  xs: 8,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const padding = {
  xs: 8,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 18,
  lg: 28,
  xl: 36,
};

export const buttons = {
  cancel: {
    color: "#fff",
    backgroundColor: "#B10203",
  },
  confirm: {
    color: "#fff",
    backgroundColor: "#00a680",
  },
  continue: {
    color: "#fff",
    backgroundColor: "#00a680",
  },
  save: {
    color: "#fff",
    backgroundColor: "#00a680",
  },
};

const baseStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: padding.sm,
  },
  cancelBtn: buttons.cancel,
  confirmBtn: buttons.confirm,
  continueBtn: buttons.continue,
  saveBtn: buttons.save,
};

export default function createStyles(overrides = {}) {
  const styles = { ...baseStyles, ...overrides };
  return StyleSheet.create(styles);
}
