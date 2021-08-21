import React from 'react';
import{ 
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import MainImage from '../image/Main.jpg'
  import logBar from '../image/logbar.JPG'

const Header = () => {
   
    return (
        <div>
        <h4 className = "headbar">Welcome To India Smart Grid Knowledge Portal</h4>
        <img src={logBar} alt="" />
        <Navbar style = {{background:'rgb(107, 178, 248)',}} light expand="md">
    
         <Nav className="mr-auto" navbar>
          <NavItem>
             <NavLink href="https://www.indiasmartgrid.org/#">ISGF</NavLink>
          </NavItem>
         <NavItem>
             <NavLink href="https://www.indiasmartgrid.org/reports/Smart%20Grid%20Handbook%20for%20Regulators%20and%20Policy%20Makers_20Dec.pdf">Resource Centre</NavLink>
         </NavItem>
         <NavItem>
             <NavLink href="https://www.indiasmartgrid.org/reports/Smart%20Grid%20Handbook%20for%20Regulators%20and%20Policy%20Makers_20Dec.pdf">ISGF Initiatives</NavLink>
         </NavItem>
              <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                   Media
                 </DropdownToggle>
                 <DropdownMenu right>
                  <DropdownItem>
                    Videos
                  </DropdownItem>
                  <DropdownItem>
                    Photos
                  </DropdownItem>
                  <DropdownItem>
                    News
                  </DropdownItem>
                  <DropdownItem>
                    Webinars
                  </DropdownItem>
                  

                </DropdownMenu>
              </UncontrolledDropdown>
            
            <NavItem>
             <NavLink href="https://www.indiasmartgrid.org/membership.php">Membership</NavLink>
         </NavItem>
         <NavItem>
             <NavLink href="https://www.indiasmartgrid.org/contributions.php">Contribution</NavLink>
         </NavItem>
         </Nav>
        </Navbar>
        <img src={MainImage} alt="" style = {{width:'100%'}} />
      </div>
      
    )
}

export default Header
