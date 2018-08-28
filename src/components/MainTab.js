import React, { Component } from 'react';
import { Tabs } from 'antd';
import { TabContainer } from './styled';
import { UpdateRate } from './UpdateRate';

const TabPane = Tabs.TabPane;

export class MainTab extends Component {
  render() {
    return (
      <TabContainer>
        {/* <Tabs tabPosition="left">
          <TabPane tab="Update Rate" key="1">
            <UpdateRate />
          </TabPane>
          <TabPane tab="Comming" key="2">
            Hello
          </TabPane>
          <TabPane tab="Comming" key="3">
            Hello
          </TabPane>
        </Tabs> */}
        <UpdateRate />
      </TabContainer>
    );
  }
}

export default MainTab;
