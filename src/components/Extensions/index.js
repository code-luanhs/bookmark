function Extensions() {
  return (
    <section>
      <h2 className="text-center text-h2">Download the extension</h2>
      <p className="text-gray font-normal text-center mx-auto mt-5 max-w-[500px]">
        We've got more browsers in the pipeline.
        Please do let us know if you've got a favourite you'd like us to prioritize.
      </p>
      <div className="flex items-start justify-center gap-x-8">
          <div className="text-center mt-12 shadow-lg rounded-xl">
            <img src="images/logo-chrome.svg" alt="Google Chrome" loading="lazy" className="mx-auto my-8" />
            <h3 className="text-[1.125rem]">Add to Chrome</h3>
            <p className="mt-2 mb-10 text-gray font-normal">Mininum version 62</p>
            <img src="images/bg-dots.svg" alt="Dots" loading="lazy" className="mx-auto" />
            <a href="#" className="block text-white bg-soft-blue rounded py-3 px-8 m-6">Add & Install Extension</a>
          </div>
          <div className="text-center mt-20 shadow-lg rounded-xl">
            <img src="images/logo-firefox.svg" alt="Firefox" loading="lazy" className="mx-auto my-8" />
            <h3 className="text-[1.125rem]">Add to Firefox</h3>
            <p className="mt-2 mb-10 text-gray font-normal">Mininum version 55</p>
            <img src="images/bg-dots.svg" alt="Dots" loading="lazy" className="mx-auto" />
            <a href="#" className="block text-white bg-soft-blue rounded py-3 px-8 m-6">Add & Install Extension</a>
          </div>
          <div className="text-center mt-28 shadow-lg rounded-xl">
            <img src="images/logo-opera.svg" alt="Opera" loading="lazy" className="mx-auto my-8" />
            <h3 className="text-[1.125rem]">Add to Opera</h3>
            <p className="mt-2 mb-10 text-gray font-normal">Mininum version 46</p>
            <img src="images/bg-dots.svg" alt="Dots" loading="lazy" className="mx-auto" />
            <a href="#" className="block text-white bg-soft-blue rounded py-3 px-8 m-6">Add & Install Extension</a>
          </div>
      </div>
    </section>
  );
}

export default Extensions;