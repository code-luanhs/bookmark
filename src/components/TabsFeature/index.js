import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabsFeature(){
  return (
    <Tabs>
      <TabList>
        <Tab>Simple Bookmarking</Tab>
        <Tab>Speedy Searching</Tab>
        <Tab>Easy Sharing</Tab>
      </TabList>

      <TabPanel>
        <div className="flex justify-center items-center p-16 gap-x-20">
          <img
            src='images/illustration-features-tab-1.svg'
          />
          <div>
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like.
              Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
            </p>
            <a className="inline-block text-white bg-soft-blue rounded py-3 px-8" href="#">More info</a>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Speedy Searching</h2>
      </TabPanel>
      <TabPanel>
        <h2>Easy Sharing</h2>
      </TabPanel>
    </Tabs>
  )
}

export default TabsFeature;