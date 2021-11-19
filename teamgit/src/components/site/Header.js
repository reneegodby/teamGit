import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <h3>Team SpecialSmarts Project</h3>
        {/* we can use the code below if we want to add any links to our navbar/header */}
        {/* <NavbarBrand href='/'> Team SpecialSmarts Project </NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink>GitHub repo? some other link?</NavLink>
                    </NavItem>
                </Nav> */}
      </Navbar>
    </header>
  );
};

export default Header;
