import TabsFeature from '../TabsFeature';

function Features() {
  return (
    <section className="max-w-container mx-auto py-16 max-lg:px-8" id="features">
      <h2 className="text-center text-h2">Features</h2>
      <p className="text-gray font-normal text-center mx-auto mt-5 mb-12 lg:max-w-[500px]">
        Our aim is to make it quick and easy for you to access your favourite websites.
        Your bookmarks sync between your devices so you can access them on the go.
      </p>

      <TabsFeature />
    </section>
  )
}

export default Features;
