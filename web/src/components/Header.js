import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ButtonAsLink from './ButtonAsLink';

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const LogoText = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;
`;

const Header = (props) => {
    //!query hook for user logged-in state,
    //!including the client for referencing the Apollo store
    const { data, client } = useQuery(IS_LOGGED_IN);
    return (
        <HeaderBar>
            <img src={logo} alt="Notedly Logo" height="40" />
           <LogoText>Notedly</LogoText>
           {/*If logged in display a logout link, else display sign-in options*/}
           <UserState>
               {data.isLoggedIn ? (
                   <ButtonAsLink
                   onClick={() =>{
                       //* remove the token
                       localStorage.removeItem('token');
                       //! clear the application's cache
                       client.resetStore();
                       //? update local state
                       client.writeData({data: { isLoggedIn: false} });
                       //* redirect the user to the home page
                       props.history.push('/');
                   }}
                   >
                      Logout
                   </ButtonAsLink>
               ) : (
                   <p>
                       <Link to={'/signin'}>Sign In</Link> or{' '}
                       <Link to={'/signup'}>Sign Up</Link>
                   </p>
               )}
           </UserState>
        </HeaderBar>
    );
};
//TODO we wrap our component in the withRouter higher-order component
export default withRouter(Header);
