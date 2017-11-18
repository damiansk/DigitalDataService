import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from './navigation/NavigationItem';

class Header extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      title: 'DigitalDataUpload',
      navigationItems: [
        {name: 'New records', iconClass: 'fa-plus', link: '#'},
        {name: 'Records', iconClass: 'fa-list-alt', link: '#'},
        {name: 'Account', iconClass: 'fa-user', link: '#'}
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
            <Link className="navbar-brand align-middle" href="#">
              <i className="fa fa-folder-open" aria-hidden="true"/>
              {` ${this.title}`}
            </Link>
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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