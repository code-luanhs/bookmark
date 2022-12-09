function Intro() {
  return (
    <div className="max-w-[1440px] mx-auto py-12">
      <h1>A Simple Bookmark Manager</h1>
      <p>
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
            <a href="#" className="block text-soft-blue bg-white rounded py-3 px-8">Get it on Firefox</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Intro;
