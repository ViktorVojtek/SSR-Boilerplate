import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);

export default Layout;

