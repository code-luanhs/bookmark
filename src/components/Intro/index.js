function Intro() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-container mx-auto py-12 flex items-center justify-between max-lg:flex-col-reverse max-lg:justify-center">
        <div className="lg:max-w-[475px] max-lg:text-center max-lg:px-8">
          <h1 className="text-h1 max-lg:mt-14">A Simple Bookmark Manager</h1>
          <p className="my-8 text-gray font-normal">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.
            Try it for free.
          </p>
          <nav>
            <ul className="flex items-center gap-6 max-lg:justify-center max-[500px]:flex-col">
              <li className="max-[500px]:w-full">
                <a
                  href="#"
                  className="block text-white border-2 border-soft-blue bg-soft-blue rounded py-3 px-8 duration-300 hover:bg-white hover:text-soft-blue"
                >
                  Get it on Chrome
                </a>
              </li>
              <li className="max-[500px]:w-full">
                <a
                  href="#"
                  className="block text-dark-gray border-2 border-white bg-white rounded py-3 px-8 shadow-lg duration-300 hover:border-dark-gray"
                >
                  Get it on Firefox
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative">
          <img
            src="images/illustration-hero.svg"
            alt="Hero Illustration"
            loading="lazy"
            className="relative lg:left-[8%] z-10"
          />
          <div className={`
            block absolute z-0 bottom-0 left-[35%] w-full h-[75%] bg-soft-blue rounded-bl-[150px]
            after:content-[''] after:block after:w-full after:h-full after:absolute after:left-full after:bg-soft-blue
            `}
          >
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
