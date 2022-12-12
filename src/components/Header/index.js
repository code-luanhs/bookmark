import Navbar from '../Navbar';

function Header() {
  return (
    <div className="flex items-center justify-between max-w-container mx-auto py-12">
      <img
        src="images/logo-bookmark.svg"
        alt="Logo"
        loading="lazy"
      />
      <Navbar />
    </div>
  );
}

export default Header;