import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import './styles.css';

function TabsFeature(){
  return (
    <Tabs>
      <TabList
        className="flex items-center text-center max-w-[750px] mx-auto border-b-[1px] border-b-[#CCC]"
      >
        <Tab className="flex-1 cursor-pointer outline-none relative py-5">Simple Bookmarking</Tab>
        <Tab className="flex-1 cursor-pointer outline-none relative py-5">Speedy Searching</Tab>
        <Tab className="flex-1 cursor-pointer outline-none relative py-5">Easy Sharing</Tab>
      </TabList>

      <TabPanel>
        <div className="flex justify-center p-16 gap-x-20 relative">
          <img
            src='images/illustration-features-tab-1.svg'
            alt="Illustration features - Tab 1"
            loading="lazy"
            className="relative z-10"
          />
          <div className="mt-16 max-w-[400px]">
            <h3 className="text-h2">Bookmark in one click</h3>
            <p className="text-gray font-normal my-6">
              Organize your bookmarks however you like.
              Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
            </p>
            <a className="inline-block text-white bg-soft-blue rounded py-3 px-8" href="#">More info</a>
          </div>
          <div className="block absolute z-0 bottom-0 right-[70%] w-full max-w-350px h-80 bg-soft-blue rounded-br-[150px]"></div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex justify-center p-16 gap-x-20 relative">
          <img
            src='images/illustration-features-tab-2.svg'
            alt="Illustration features - Tab 2"
            loading="lazy"
            className="relative z-10"
          />
          <div className="mt-16 max-w-[400px]">
            <h3 className="text-h2">Intelligent search</h3>
            <p className="text-gray font-normal my-6">
              Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.
            </p>
            <a className="inline-block text-white bg-soft-blue rounded py-3 px-8" href="#">More info</a>
          </div>
          <div className="block absolute z-0 bottom-[50px] right-[62%] w-full max-w-350px h-80 bg-soft-blue rounded-br-[150px]"></div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex justify-center p-16 gap-x-20 relative">
          <img
            src='images/illustration-features-tab-3.svg'
            alt="Illustration features - Tab 3"
            loading="lazy"
            className="relative z-10"
          />
          <div className="mt-16 max-w-[400px]">
            <h3 className="text-h2">Share youe bookmarks</h3>
            <p className="text-gray font-normal my-6">
              Easily sjare your bookmarks and collections width others.
              Create a shareable link that you can send at the click of a button.
            </p>
            <a className="inline-block text-white bg-soft-blue rounded py-3 px-8" href="#">More info</a>
          </div>
          <div className="block absolute z-0 bottom-0 right-[62%] w-full max-w-350px h-80 bg-soft-blue rounded-br-[150px]"></div>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default TabsFeature;