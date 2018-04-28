import React from 'react';
import { Route, Switch } from 'react-router-dom';


const bypassRouter = (component, ...props) => {
  const finalProps = Object.assign({}, props);
  return (React.createElement(component, finalProps));    
}

const RouteWithProps = (props) => {
  // const extracted = Object.keys(props).reduce((a, e) => {
  //   if (e === 'component') a.push(props[e]);
  //   else a[0][e] = props[e];
  //   return a;
  // }, [{}]);
  const component = props.component;
  props = Object.assign({}, props);
  delete props.component;
  console.log(props);
  return (
    <Route {...props} render={routeProps => bypassRouter(component, routeProps, props)} />
  );
}

export default RouteWithProps;