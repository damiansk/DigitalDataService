import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from './navigation/NavigationItem';

class Header extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      title: 'DigitalDataUpload',
      navigationItems: [
        {name: 'New records', iconClass: 'fa-plus', link: '/new-record'},
        {name: 'Records', iconClass: 'fa-list-alt', link: '/records', activeClass: 'active'},
        {name: 'Account', iconClass: 'fa-user', link: '/account'}
      ]
    };
  }
  
  mapNavigationItems() {
    return this.state
      .navigationItems
      .map(item => <NavigationItem {...item}/>);
  }
  
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand align-middle" to="/">
              <i className="fa fa-folder-open" aria-hidden="true"/>
              {` ${this.state.title}`}
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

export default Header;