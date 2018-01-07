import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import {
  ACCOUNT, ADMIN, mapPathVariables, PUBLIC_SEARCH_RECORDS, RECORD_NEW, RECORDS, SIGN_IN,
  SIGN_OUT
} from '../../../constants/routes';
import NavigationItem from '../../../components/layout/header/navigation/NavigationItem';
import SearchNav from '../../../components/layout/header/search/SearchNav';

class Header extends Component {
  
  constructor(props) {
    super(props);
  
    this.title = 'DigitalDataUpload';
    this.navigationItems = [
        {name: 'New record', iconClass: 'fa-plus', link: RECORD_NEW},
        {name: 'Records', iconClass: 'fa-list-alt', link: RECORDS, activeClass: 'active'},
        {name: 'Account', iconClass: 'fa-user', link: ACCOUNT},
        {name: 'Sign out', iconClass: 'fa-sign-out', link: SIGN_OUT}
      ];
  }
  
  componentWillMount() {
    this.updateNavigationItems(this.props);
  }
  
  componentWillUpdate(props) {
    this.updateNavigationItems(props);
  }
  
  updateNavigationItems(props) {
    this.navigationItems = this.navigationItems
      .map(item => item.link.match(props.location.pathname)
        ? {...item, activeClass: 'active'}
        : {...item, activeClass: null});
  }
  
  renderLinks() {
    return this.navigationItems
      .map((item, index) => <NavigationItem key={index} {...item}/>);
  }
  
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand align-middle" to={'/'}>
              <i className="fa fa-folder-open" aria-hidden="true"/>
              {` ${this.title}`}
            </Link>
            
  
            <Switch>
              <Route path={ADMIN} render={() => (
                <React.Fragment>
                  {this.props.authenticated ?
                    <button className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                    </button>
                  : null}
                  {this.props.authenticated ?
                    <div className="collapse navbar-collapse justify-content-end"
                         id="navbarNav">
                      <ul className="navbar-nav">
                       {this.renderLinks()}
                      </ul>
                    </div>
                    :
                    <div className="justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                        <NavigationItem name="Sign in" iconClass="fa-sign-in" link={SIGN_IN}/>
                      </ul>
                    </div>
                  }
                </React.Fragment>
              )}/>
              <Route render={() => (
                <SearchNav onSubmit={values => this.props.handleSearchSubmit(values.search)}/>
                )}/>
            </Switch>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  location: state.router.location,
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: value =>
    dispatch(push(value && value.trim ? mapPathVariables(PUBLIC_SEARCH_RECORDS, {term: value})
                                      : '/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

