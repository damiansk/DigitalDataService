import React, { Component } from 'react';

class ContentTabsNavigation extends Component {
  
  mapTabsList() {
    return Object.values(this.props.tabsItems)
      .map((tab, index) => (
        <a key={index}
            className={`nav-item nav-link ${tab.isActive ? 'active' : 'text-muted'}`}
            id={`nav-${tab.id}-tab`}
            data-toggle="tab"
            href={`#nav-${tab.id}`}
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => this.props.onClick(tab)}>{tab.name}</a>
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