import React, { Component } from 'react';

import Heading from '../../../components/pages/heading/Heading';
import ContentTabsNavigation from '../../../components/pages/contentTabsNavigation/ContentTabsNavigation';
import ContentTabs from '../../../components/pages/contentTabs/ContentTabs';
import ContentTab from '../../../components/pages/contentTabs/contentTab/ContentTab';

class Records extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      activeTabId: 'new',
      idList: ['new','reported','accepted','rejected'],
      tabsItems: {
        'new': {name: 'New', id: 'new', isActive: true },
        'reported': {name: 'Reported', id: 'reported', isActive: false },
        'accepted': {name: 'Accepted', id: 'accepted', isActive: false },
        'rejected': {name: 'Rejected', id: 'rejected', isActive: false }
      }
    };
    
    this.updateTabsItems = this.updateTabsItems.bind(this);
  }
  
  updateTabsItems(item) {
    const { activeTabId, tabsItems } = this.state;
    const activeTab = tabsItems[activeTabId];
    
    this.setState({
      activeTabId: item.id,
      tabsItems: {
        ...tabsItems,
        [activeTabId]: {...activeTab, isActive: false},
        [item.id]: {...item, isActive: true}
      }
    });
  }
  
  render() {
    const tabsItems = this.state.tabsItems;
    return (
      <div>
        <Heading title="Records"/>
        <ContentTabsNavigation tabsItems={tabsItems} onClick={this.updateTabsItems}/>
        <ContentTabs>
          <ContentTab id={tabsItems['new'].id} isActive={tabsItems['new'].isActive}>
            New
          </ContentTab>
          <ContentTab id={tabsItems['reported'].id} isActive={tabsItems['reported'].isActive}>
            Reported
          </ContentTab>
          <ContentTab id={tabsItems['accepted'].id} isActive={tabsItems['accepted'].isActive}>
            Accepted
          </ContentTab>
          <ContentTab id={tabsItems['rejected'].id} isActive={tabsItems['rejected'].isActive}>
            Rejected
          </ContentTab>
        </ContentTabs>
      </div>
    )
  }
}

export default Records;