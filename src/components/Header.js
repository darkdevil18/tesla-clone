import { useState } from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Nav>
      <a href="/">
        <img
          style={{
            width: "50px",
          }}
          src="/images/logo.svg"
          alt="tesla logo"
        />
      </a>
      <MiddleMenu>
        <Link href="/">Model S</Link>
        <Link href="/">Model 3</Link>
        <Link href="/">Model X</Link>
        <Link href="/">Model Y</Link>
        <Link href="/">Solar Roof</Link>
        <Link href="/">Solar Panels</Link>
      </MiddleMenu>
      <RightMenu>
        <Link href="/">Shop</Link>
        <Link href="/">Account</Link>
        <Button onClick={() => setBurgerStatus(true)}>Menu</Button>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWraper>
        <ul
          style={{
            listStyle: 'none'
          }}
        >
          <li>
            <Link href="/">Existing Inventory</Link>
          </li>
          <li>
            <Link href="/">Used Inventory</Link>
          </li>
          <li>
            <Link href="/">Trade-in</Link>
          </li>
          <li>
            <Link href="/">CyberTruck</Link>
          </li>
          <li>
            <Link href="/">Roadster</Link>
          </li>
          <li>
            <Link href="/">Semi</Link>
          </li>
          <li>
            <Link href="/">Charging</Link>
          </li>
          <li>
            <Link href="/">Powerwall</Link>
          </li>
          <li>
            <Link href="/">Commercial Energy</Link>
          </li>
          <li>
            <Link href="/">Utilities</Link>
          </li>
          <li>
            <Link href="/">Find Us</Link>
          </li>
          <li>
            <Link href="/">Support</Link>
          </li>
          <li>
            <Link href="/">Investor Relations</Link>
          </li>
        </ul>
      </BurgerMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100vw;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 16px;
  min-height: 60px;
  font-size: 12px;
  font-weight: 600;
  z-index: 100;
`;

const MiddleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 2s ease-in-out 0s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const BurgerMenu = styled.div`
  position: fixed;
  background-color: white;
  z-index: 200;
  top: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s ease-in-out;
  & a {
    padding: 8px 12px;
    border-radius: 16px;
    margin:12px 0;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 5px 10px 0;
`;

const Button = styled.button`
  display: block;
  color: #000;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 2s ease-in-out 0s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;
