import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"; 
import Header2 from "../../components/Header/Header";

const AppLayout = () => {
  return (
    <>
       <Header2/>
      <Container>
        <Outlet />
       </Container>
    </>
  );
};

export default AppLayout;
