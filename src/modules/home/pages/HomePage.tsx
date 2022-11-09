import { Box, Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../core/navigation/routes.enum";
import { UILayout } from "../../../core/styles/shared/UILayout";

// This page is the first page that is displayed when you start the app.
// There is a button that you can click and be navigated to another page.
// Navigation is performed by using hook called useNavigate from react-router-dom.
// Routes are defined in other file

export const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <UILayout text="All time managment begins with planning.">
      <Box display="flex" justifyContent="flex-end" pt={10}>
        <Button onClick={() => navigate(ROUTES.TODOS)} variant="outlined">
          Let's plan
        </Button>
      </Box>
    </UILayout>
  );
};
