import React from 'react';
import Header from './Header';
import Hooks from './FunctionComponent';
import Employee from './ClassComponent';
import StateClass from './StateClass';
import GetDerived from './Mounting';
import Updating5 from './Updating';
import Parent from './UnmountingClass1';

function App(){
  function getApp(){
    const route = window.location.pathname;
     if (route ==="/Employee" )return <Employee name="Sindhu" id={1}/>
    else if (route === "/StateClass" )return <StateClass/>
    else if (route === "/GetDerived") return <GetDerived NewSubject="Chemistry"/>
    else if (route ==="/Updating5") return <Updating5/>
    else if (route ==="/Parent") return <Parent/>
    else  return <Hooks/>;
  }
 return(
  <div>
    <Header/>
    {getApp()}
  </div>
)

 }
 export default App;


