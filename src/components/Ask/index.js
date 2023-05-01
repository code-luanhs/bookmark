import TabsAsk from '../TabsAsk';

import { motion } from 'framer-motion';

function Ask() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: '70px' }}
      whileInView={{ opacity: 1, translateY: '0' }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 max-lg:px-8"
    >
      <h2 className="text-center text-h2">Frequently Asked Questions</h2>
      <p className="text-gray font-normal text-center mx-auto mt-5 max-w-[500px]">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>

      <ul className="lg:max-w-[500px] mx-auto my-10">
        <TabsAsk title="Whats is Bookmark" />
        <TabsAsk title="Hot can I request a new browser?" />
        <TabsAsk title="Is there a mobile app?" />
        <TabsAsk title="What about other Chromium browsers?" lastItem={true} />
      </ul>

      <a href="#" className="block w-fit mx-auto text-white bg-soft-blue rounded py-2 px-8 border-2 border-soft-blue duration-300 hover:bg-white hover:text-soft-blue">More info</a>
    </motion.section>
  )
}

export default Ask;