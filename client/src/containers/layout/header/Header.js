import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavigationItem from '../../../components/layout/header/navigation/NavigationItem';

class Header extends Component {
  
  constructor(props) {
    super(props);
  
    this.title = 'DigitalDataUpload';
    this.navigationItems = [
        {name: 'New record', iconClass: 'fa-plus', link: '/new-record'},
        {name: 'Records', iconClass: 'fa-list-alt', link: '/records', activeClass: 'active'},
        {name: 'Account', iconClass: 'fa-user', link: '/account'}
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
  
  mapNavigationItems() {
    return this.navigationItems
      .map((item, index) => <NavigationItem key={index} {...item}/>);
  }
  
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand align-middle" to="/">
              <i className="fa fa-folder-open" aria-hidden="true"/>
              {` ${this.title}`}
            </Link>
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse justify-content-end"
                 id="navbarNav">
              <ul className="navbar-nav">
                {this.mapNavigationItems()}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}


const mapStateToProps = ({router: {location}}) => ({location});

export default connect(mapStateToProps)(Header);