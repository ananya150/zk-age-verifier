import { HStack } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <HStack gap={'15px'} >
          {NAV_LINKS.map((link) => (
            <NavItem key={`link-${link.label}`} {...link} />
          ))}
        </HStack>
      </div>
      <div className='md:hidden'>
          <NavItem label='Home' href='/' />
      </div>
    </div>
  );
};

export default NavBar;
