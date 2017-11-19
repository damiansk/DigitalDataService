import React, { Component } from 'react';

class ContentTabsNavigation extends Component {
  
  mapTabsList() {
    return Object.values(this.props.tabsList)
      .map((tab, index) => (
        <a key={index}
              className={`nav-item nav-link text-muted ${tab.isActive ? 'active' : ''}`}
              id={`nav-${tab.id}-tab`}
              data-toggle="tab"
              href={`#nav-${tab.id}`}
              role="tab"
              aria-controls="nav-home"
              aria-selected="true">{tab.name}</a>
      ))
  }
  
  render() {
    return (
      <nav className="nav nav-tabs nav-fill mb-5" id="myTab" role="tablist">
        {this.mapTabsList()}
      </nav>
    )
  }
}

export default ContentTabsNavigation;