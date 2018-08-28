import React, { Component } from 'react';
import { Tabs } from 'antd';
import { TabContainer } from './styled';
import { UpdateRate } from './UpdateRate';

const TabPane = Tabs.TabPane;

export class MainTab extends Component {
  render() {
    return (
      <TabContainer>
        <UpdateRate />
      </TabContainer>
    );
  }
}

export default MainTab;
