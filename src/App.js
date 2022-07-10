import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { About } from "./MyComponent/About";
import { AddTodo } from "./MyComponent/AddTodo";
import { Test } from "./MyComponent/Test";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import React, { useState, useEffect } from "react";
import StateCompProfile from "./TutorialComp/StateCompProfile";
import HideShow from "./TutorialComp/HideShow";
import EventHandling from "./TutorialComp/EventHandling";
import EventHandlingFun from "./TutorialComp/EventHandlingFun";
import LifeCycleMethod from "./TutorialComp/LifeCycleMethod";
import ComponentDidMount from "./TutorialComp/CompDidMount";
import ComponentDidUpdate from "./TutorialComp/CompDidUpdate";
import CompWillUnmount from "./TutorialComp/CompWillUnmount";
import CompHooks from "./TutorialComp/CompHooks";
import FormComp from "./TutorialComp/FormComp";
import FormValidation from "./TutorialComp/FormValidation";
import CompMapFunction from "./TutorialComp/CompMapFunction";
import ReactStyle from "./TutorialComp/ReactStyle";
import ApiCall from "./TutorialComp/ApiCall";
import UseRef from "./TutorialComp/UseRef";
import ErrorBoundry from "./TutorialComp/ErrorBoundry";
import User from "./TutorialComp/User";
import PureComponent from "./TutorialComp/PureComponent";
import MemeoApp from "./TutorialComp/MemoApp";
import Authetication from "./TutorialComp/Authetication";
import UncontrolledComp from "./TutorialComp/UncontrolledCom";
import ControlledComp from "./TutorialComp/ControlledComp";
import LazyLoadTest from "./TutorialComp/LazyLoadTest";
import UploadFile from "./TutorialComp/UploadFile";
import TypeProps from "./TutorialComp/TypeProps";
import ReactHooks from "./TutorialComp/ReactHooks";
import {HooksOne} from "./ReactHooks/HooksOne";
import HomeOne from "./NewComp/HomeOne";
import AboutOne from "./NewComp/AboutOne";
import ContactOne from "./NewComp/ContactOne";
import Navbar from "./Layouts/Navbar";
import AddUser from "./NewComp/User/AddUser";
import EditUser from "./NewComp/User/EditUser";





function App() {
  // let initTodo;
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // } else {
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // }

  // const onDelete = (todo) => {
  //   //console.log("I am OnDelete of todo", todo);
  //   setTodos(
  //     todos.filter((e) => {
  //       return e !== todo;
  //     })
  //   );
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const a = localStorage.getItem("todos");

  // const addTodo = (title, desc) => {
  //   console.log("I am adding this todo", title, desc);
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }

  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc,
  //   };
  //   setTodos([...todos, myTodo]);
  //   console.log(myTodo);
  // };

  // const [todos, setTodos] = useState(initTodo);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <div>
        {/* <StateCompProfile />
        <HideShow />
        <EventHandling /> */}
        {/* <EventHandlingFun /> */}

        {/* <ComponentDidMount /> */}
        {/* <ComponentDidUpdate /> */}
        {/* <CompWillUnmount /> */}
        {/* <CompHooks /> */}
        {/* <FormComp></FormComp> */}
        {/* <FormValidation /> */}
        {/* <CompMapFunction /> */}
        {/* <ReactStyle data="apply" /> */}
        {/* <LifeCycleMethod /> */}
        {/* <UseRef /> */}

        {/* <ErrorBoundry>
          <User />
        </ErrorBoundry> */}
        {/* <PureComponent/> */}
        {/* <MemeoApp/> */}
        {/* <UncontrolledComp/> */}
        {/* <ControlledComp/> */}
        {/* <LazyLoadTest/> */}
        {/* <UploadFile/> */}
        {/* <TypeProps age={23} name={'niles'}/> */}
        {/* <ReactHooks/> */}
        {/* <HooksOne/> */}
        <Router>
          <Navbar/>

          <Switch>
            <Route exact path="/" component={HomeOne} >
               <HomeOne/>
            </Route>
            <Route  path="/about"   component={AboutOne} >
               <AboutOne/>
            </Route>
            <Route exact path="/contact" component={ContactOne} >
               <ContactOne/>
            </Route>
            <Route  exact path="/users/adduser" component={AddUser} >
              <AddUser/>
            </Route>
            <Route  exact path="/users/edituser/:id" component={EditUser} >
              <EditUser/>
            </Route>
           
           
          
          </Switch>
          
        </Router>
       
      </div>


      {/* <Router>
        <Header title="my todo list " searchBar={false} />
        <Switch>
          {/* <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route> 
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/hideshow">
            <HideShow />
          </Route>
        </Switch>

        <Footer />
      </Router> */}
    </>
  );
}

export default App;
