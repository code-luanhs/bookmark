function Intro() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-container mx-auto py-12 flex items-center justify-between relative">
        <div className="max-w-[475px]">
          <h1 className="text-h1">A Simple Bookmark Manager</h1>
          <p className="my-8 text-gray font-normal">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly.
            Try it for free.
          </p>
          <nav>
            <ul className="flex items-center gap-x-6">
              <li>
                <a href="#" className="block text-white bg-soft-blue rounded py-3 px-8">Get it on Chrome</a>
              </li>
              <li>
                <a href="#" className="block text-dark-gray bg-white rounded py-3 px-8 shadow-lg">
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
          className="relative left-[8%] z-10"
        />
        <div className="block absolute z-0 bottom-0 left-[70%] w-full max-w-350px h-80 bg-soft-blue rounded-bl-[150px]"></div>
      </div>
    </div>
  );
}

export default Intro;
