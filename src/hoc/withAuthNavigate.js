import React from "react";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import { connect } from "react-redux";


let mapStateToPropsFromNavigate = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.userId
    }
} 
export const withAuthNavigate = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthNavigateComponent = connect(mapStateToPropsFromNavigate) (RedirectComponent);
    return ConnectedAuthNavigateComponent;
}

export const profileWithAuthNavigate = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth && this.props.router.location.pathname === '/profile') return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthNavigateComponent = connect(mapStateToPropsFromNavigate) (RedirectComponent);
    return ConnectedAuthNavigateComponent;
}
export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
    return ComponentWithRouterProp;
  }