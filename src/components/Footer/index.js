function Footer() {
  return (
    <footer className="bg-dark-blue py-8">
      <div className="max-w-container mx-auto text-white flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img
            src="images/logo-bookmark-white.svg"
            alt="Logo"
            loading="lazy"
          />

          <ul className="flex items-center gap-x-10 ml-14 font-normal text-[.813rem]">
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>

        <ul className="flex items-center gap-x-8">
          <li>
            <a href="#">
              <img src="images/icon-facebook.svg" alt="Facebook" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="images/icon-twitter.svg" alt="Twitter" loading="lazy" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;