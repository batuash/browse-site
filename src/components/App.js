import React from 'react';
import {TabList, Tabs, Tab, TabPanel, Header, Topics} from './index';

// @todo remove these

const Archives = ({isShow, ...props}) => {
  return isShow && <span>This is Archives Content</span>;
};

const Pages = ({isShow, ...props}) => {
  return isShow && <span>This is Pages Content</span>;
};

const App = () => (
  <div className="appWrapper">
    <Header />
    <TabList>
      <Tabs>
        <Tab title="Topics" />
        <Tab title="Archives" />
        <Tab title="Pages" />
      </Tabs>
      <TabPanel>
        <Topics />
      </TabPanel>
      <TabPanel>
        <Archives />
      </TabPanel>
      <TabPanel>
        <Pages />
      </TabPanel>
    </TabList>
  </div>
);

export default App;
