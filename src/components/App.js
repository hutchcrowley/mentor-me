import React from "react";
import Header from "./header/Header";
import "../styles/Styles.scss";
import Landing from "./body/Landing";
import RegisterUser from "./Register/RegisterUser";
import Login from "./body/login/Login";
import { Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import Feed from "./feed/Feed";
import DummyRoute from "./dummy/DummyRoute";
import QuestionAdd from "./feed/QuestionAdd";
import QuestionEdit from "./feed/QuestionEdit";
import QuestionSearch from './feed/QuestionSearch'
const App = () => {
  return (
    <div>
      <Header />
      <PrivateRoute path={'/user-feed/post/:id', '/user-feed'} component={QuestionSearch} />
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={RegisterUser} />
      <Route path="/signin" component={Login} />
      <PrivateRoute exact path="/user-feed" component={Feed} />
      <Route path="/dummy-route" component={DummyRoute} />
      <PrivateRoute exact path="/user-feed/add" component={QuestionAdd} />
      <Route exact path="/user-feed/edit/:id"
        render={(props) => <QuestionEdit {...props}  />} />
      <PrivateRoute path='/user-feed/post/:id' component={/*SuperAmazingComponent DON'T FORGET THE FUCKING ROUTE IN THE SEARCH SUBMIT*/} />
      

    </div>
  );
};

export default App;
