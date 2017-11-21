import React, { Component } from 'react';

import Heading from '../../../components/pages/heading/Heading';
import ContentTabsNavigation from '../../../components/pages/contentTabsNavigation/ContentTabsNavigation';
import ContentTabs from '../../../components/pages/contentTabs/ContentTabs';
import ContentTab from '../../../components/pages/contentTabs/ContentTab';
import Table from '../../../components/pages/table/Table';
import TableRow from '../../../components/pages/table/TableRow';

class Records extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      activeTabId: 'new',
      columns: ['new','reported','accepted','rejected'],
      tabsItems: {
        'new': {name: 'New', id: 'new', isActive: true },
        'reported': {name: 'Reported', id: 'reported', isActive: false },
        'accepted': {name: 'Accepted', id: 'accepted', isActive: false },
        'rejected': {name: 'Rejected', id: 'rejected', isActive: false }
      }
    };
    
    this.tableContent = {
      columns: [
        {name: 'Declarant', size: '2'},
        {name: 'Title', size: '4'},
        {name: 'Type', size: '2'},
        {name: 'Keywords', size: '2'},
        {name: 'Actions', size: '2'}
      ],
      tableRows: [
        ['Mark', 'Otto', '@mdo', '', null],
        ['Jacob', 'Thornton', '@fat', '', null],
        ['Larry', 'the Bird', '@twitter', '', null],
      ]
    };
    
    this.updateTabsItems = this.updateTabsItems.bind(this);
    this.mapTableRows = this.mapTableRows.bind(this);
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
  
  mapTableRows() {
    const { columns, tableRows } = this.tableContent;
    return tableRows
      .map((row, index) => <TableRow key={index} columns={columns} row={row}/>);
  }
  
  render() {
    const tabsItems = this.state.tabsItems;
    return (
      <div>
        <Heading title="Records"/>
        <article>
          <ContentTabsNavigation tabsItems={tabsItems} onClick={this.updateTabsItems}/>
          <ContentTabs>
            <ContentTab id={tabsItems['new'].id} isActive={tabsItems['new'].isActive}>
              <Table columns={this.tableContent.columns}>
                {this.mapTableRows()}
              </Table>
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
        </article>
      </div>
    )
  }
}

export default Records;