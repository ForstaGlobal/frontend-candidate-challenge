import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../navigation/routes.enum";
import { FC } from "react";

// This component is used on all pages and it is consisted of the components
//  which are the same for all pages and props which can be different.
// To go back to the home page useNavigate hook is used

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  text?: string;
}

export const UILayout: FC<LayoutProps> = ({ text, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            color="secondary"
            disableRipple
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Typography variant="h2" title="App Name" color="text.primary">
              ToDoApp
            </Typography>
            <DriveFileRenameOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        mt="64px"
      >
        <Box
          p={5}
          bgcolor="background.paper"
          borderRadius={1}
          maxWidth={400}
          minWidth={{ xs: "auto", md: 400 }}
          m={3}
        >
          <Typography variant="h1" color="text.secondary" textAlign="left">
            {text}
          </Typography>
          {children}
        </Box>
      </Box>
    </>
  );
};
