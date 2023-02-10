import TabsAsk from '../TabsAsk';

function Ask() {
  return (
    <section className="py-16">
      <h2 className="text-center text-h2">Frequently Asked Questions</h2>
      <p className="text-gray font-normal text-center mx-auto mt-5 max-w-[500px]">
        Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
      </p>

      <ul className="max-w-[500px] mx-auto my-10">
        <TabsAsk title="Whats is Bookmark" />
        <TabsAsk title="Hot can I request a new browser?" />
        <TabsAsk title="Is there a mobile app?" />
        <TabsAsk title="What about other Chromium browsers?" lastItem={true} />
      </ul>

      <a href="#" className="block w-fit mx-auto text-white bg-soft-blue rounded py-3 px-8">More info</a>
    </section>
  )
}

export default Ask;