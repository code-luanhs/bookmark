function Contact() {
  return (
    <section className="bg-soft-blue mt-16">
      <div className="max-w-container mx-auto py-16 text-center text-white">
        <p className="tracking-[.2rem] text-[.813rem]">
          35.000+
          <strong className="font-medium inline-block ml-2">ALREADY JOINED</strong>
        </p>
        <h2 className="text-h2 max-w-[400px] mx-auto my-7">Stay up-to-date with what we're doing</h2>

        <form className="flex items-center justify-center gap-3">
          <input
            type="name"
            placeholder="Enter your email address"
            className="bg-white rounded py-3 px-4 w-full max-w-[330px] text-[#ccc] placeholder:text-[#ccc] font-normal"
            required
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-soft-red rounded py-3 px-4"
          >
            Contact Us
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;