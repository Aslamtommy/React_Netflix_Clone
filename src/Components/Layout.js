import React from 'react'
import NavBar from './NavBar/NavBar'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'
import { action, originals, romance,HorrorMovies } from '../urls';
import { Outlet } from 'react-router-dom'
import Sample from './Sample';
const Layout = () => {

  const value={

    name:'Aslam '
  }
  return (
    <div className='App'>


      <NavBar /> 
      
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={romance} title='Romance Movies' isSmall />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
      <Sample value={value}/>
      <Outlet /> 


    </div>
  );
}

export default Layout;
