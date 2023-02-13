import NavbarItem from "../NavbarItem";

function Navbar() {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex items-center gap-x-9">
        <NavbarItem />
      </ul>
    </nav>
  );
}

export default Navbar;