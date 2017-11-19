import React, { Component } from 'react';

import Heading from '../../../components/pages/heading/Heading';
import ContentTabsNavigation from '../../../components/pages/contentTabsNavigation/ContentTabsNavigation';

class Records extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 'new',
      idList: ['new','reported','accepted','rejected'],
      tabsList: {
        'new': {name: 'New', id: 'new', isActive: true },
        'reported': {name: 'Reported', id: 'reported', isActive: false },
        'accepted': {name: 'Accepted', id: 'accepted', isActive: false },
        'rejected': {name: 'Rejected', id: 'rejected', isActive: false }
      }
    }
  }
  
  render() {
    return (
      <div>
        <Heading title="Records"/>
        <ContentTabsNavigation tabsList={this.state.tabsList}/>
        
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-new" role="tabpanel" aria-labelledby="nav-home-tab">New
          </div>
          <div className="tab-pane fade" id="nav-reported" role="tabpanel" aria-labelledby="nav-profile-tab">Reported</div>
          <div className="tab-pane fade" id="nav-accepted" role="tabpanel" aria-labelledby="nav-contact-tab">Accepted</div>
          <div className="tab-pane fade" id="new-rejected" role="tabpanel" aria-labelledby="nav-contact-tab">Rejected</div>
        </div>
      
      
      </div>
    )
  }
}

export default Records;