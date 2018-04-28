import React from 'react'

const bypassRouter = (component, ...props) => {
  const finalProps = Object.assign({}, props);
  return (React.createElement(component, finalProps));    
}

const RouteWithProps = ({ component }) => {
  console.log(arguments);
  return (
    <Route {...props} render={routeProps => {
      return this.bypassRouter(component, routeProps, props);
    }} />
  );
}

export default RouteWithProps;