import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const AppLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AppLayout;
