import TabsFeature from '../TabsFeature';

import { motion } from 'framer-motion';

function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: '70px' }}
      whileInView={{ opacity: 1, translateY: '0' }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-container mx-auto py-16 px-4 max-lg:px-8"
    >
      <h2 className="text-center text-h2">Features</h2>
      <p className="text-gray font-normal text-center mx-auto mt-5 mb-12 lg:max-w-[500px]">
        Our aim is to make it quick and easy for you to access your favourite websites.
        Your bookmarks sync between your devices so you can access them on the go.
      </p>

      <TabsFeature />
    </motion.section>
  )
}

export default Features;
