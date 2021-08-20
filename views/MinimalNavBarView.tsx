import React from 'react';

import useIsSignedIn from '../hooks/useIsSignedIn';

import NavBarUserView from './NavBarUserView';
import NavBar from '../componenets/navbars/Navbar';
import NavButtons from '../componenets/navbars/NavButtons';
import MinimalNavBar from '../componenets/navbars/MinimalNavbar';

const MinimalNavBarView = (props: any) => {
  const { isSignedIn } = useIsSignedIn();

  return (
    <>
      <MinimalNavBar selected={props.selected}>
        {isSignedIn ? <NavBarUserView minimal={true} /> : null}
      </MinimalNavBar>
    </>
  );
};

export default MinimalNavBarView;
