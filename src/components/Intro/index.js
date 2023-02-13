function Intro() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-container mx-auto py-12 flex items-center justify-between relative max-lg:flex-col-reverse max-lg:justify-center">
        <div className="lg:max-w-[475px] max-lg:text-center max-lg:px-8">
          <h1 className="text-h1">A Simple Bookmark Manager</h1>
          <p className="my-8 text-gray font-normal">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.
            Try it for free.
          </p>
          <nav>
            <ul className="flex items-center gap-x-6 max-lg:justify-center">
              <li>
                <a
                  href="#"
                  className="block text-white border-2 border-soft-blue bg-soft-blue rounded py-3 px-8 duration-300 hover:bg-white hover:text-soft-blue"
                >
                  Get it on Chrome
                </a>
              </li>
              <li>
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
        <img
          src="images/illustration-hero.svg"
          alt="Hero Illustration"
          loading="lazy"
          className="relative lg:left-[8%] z-10"
        />
      </div>
    </section>
  );
}

export default Intro;
