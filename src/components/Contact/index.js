function Contact() {
  return (
    <section className="bg-soft-blue mt-16 max-lg:px-8">
      <div className="max-w-container mx-auto py-16 text-center text-white">
        <p className="tracking-[.2rem] text-[.813rem]">
          35.000+
          <strong className="font-medium inline-block ml-2">ALREADY JOINED</strong>
        </p>
        <h2 className="text-h2 lg:max-w-[400px] mx-auto my-7">Stay up-to-date with what we're doing</h2>

        <form className="flex items-center justify-center gap-3 max-lg:flex-col">
          <input
            type="name"
            placeholder="Enter your email address"
            className="bg-white rounded py-2.5 px-4 w-full max-w-[330px] text-dark-blue placeholder:text-[#ccc] font-normal max-lg:max-w-[100%]"
            required
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-soft-red rounded py-2 px-5 border-2 border-soft-red duration-300 hover:bg-white hover:text-soft-red max-lg:w-full"
          >
            Contact Us
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;