import { useForm } from "react-hook-form";

function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section className="bg-soft-blue mt-16 max-lg:px-8" id="contact">
      <div className="max-w-container mx-auto py-16 text-center text-white">
        <p className="tracking-[.2rem] text-[.813rem]">
          35.000+
          <strong className="font-medium inline-block ml-2">ALREADY JOINED</strong>
        </p>
        <h2 className="text-h2 lg:max-w-[400px] mx-auto my-7">Stay up-to-date with what we're doing</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex items-start justify-center gap-3 max-lg:flex-col">
          <div className="relative w-full lg:max-w-[330px]">
            <input
              {...register("email", {required: true})}
              placeholder="Enter your email address"
              className={`
                bg-white rounded py-2.5 px-4 w-full text-dark-blue placeholder:text-[#ccc]
                font-normal max-lg:max-w-[100%] ${errors.email ? 'border-2 border-soft-red outline-none' : ''}
              `}
            />
            {errors.email && <img src="images/icon-error.svg" alt="Ícone de erro" loading="lazy" className="absolute right-3 top-3" />}
            {errors.email && <p className="text-[.75rem] text-left bg-soft-red rounded-b py-1 px-2 relative bottom-[2px]">Whoops, make sure it's an email</p>}
          </div>

          <button
            type="submit"
            className={`
              bg-soft-red rounded py-2 px-5 border-2 border-soft-red duration-300
              hover:bg-white hover:text-soft-red max-lg:w-full
            `}
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;