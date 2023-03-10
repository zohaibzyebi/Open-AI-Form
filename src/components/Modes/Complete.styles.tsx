import { createStyles } from "@mantine/core";

export const useCompleteModeStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex ",
    flexDirection: "column",
    gridGap: "1rem",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dataBoxWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1rem",
    height: "100%",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: "1fr",
    },
  },
  inputBox: {
    width: "100%",
    height: "100%",
    resize: "none",
    fontSize: `${theme.fontSizes.sm}px`,
    padding: "0.5rem 0.5rem",
    borderRadius: "4px",
    color: theme.colors.lightGray[0],
    border: `2px solid ${theme.colors.lightGray[0]}`,
    "&:focus": {
      border: `2px solid ${theme.colors.lightGray[0]}`,
      outline: "none",
    },
    "&::placeholder": {
      color: theme.colors.lightGray[0],
      fontSize: `${theme.fontSizes.xs}px`,
      display: "none",
    },
  },

  textAreaRoot: {
    height: "100%",
    width: "100%",
  },
  textAreaWrapper: {
    height: "100%",
  },
  textAreaInput: {
    height: "100%",
    "&:focus": {
      borderColor: theme.colors.lightGray[0],
    },
  },
  btnRoot: {
    backgroundColor: theme.colors.blueGreen[0],
    fontSize: `${theme.fontSizes.sm}px`,
    "&:hover": {
      backgroundColor: theme.colors.blueGreen[0],
      opacity: "80%",
    },
  },

  btnWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  submitBtn: {
    padding: "8px 20px",
    borderRadius: "4px",
    color: theme.colors.fonts[1],
    transition: "all 0.3s ease",
    backgroundColor: theme.colors.blueGreen,
    border: "none",
    fontSize: `${theme.fontSizes.xs}px`,
    cursor: "pointer",
    "&:hover": {
      opacity: "85%",
    },
  },
}));
