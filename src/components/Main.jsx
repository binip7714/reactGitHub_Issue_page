import React from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';
const Main = ({children}) => {
    return (
        <>
           <Header/>
           <NavigationBar/>
           {children} 
        </>
    );
};

export default Main;