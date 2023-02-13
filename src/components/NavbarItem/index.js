const items = [
  {
    id: 1,
    name: 'Features',
    link: '#',
    class: `
      uppercase tracking-widest font-normal lg:text-[.875rem] text-dark-blue hover:text-soft-red duration-300
      max-lg:text-white max-lg:border-y max-lg:border-[#4b506d] max-lg:block max-lg:text-center max-lg:py-4
    `
  },
  {
    id: 2,
    name: 'Pricing',
    link: '#',
    class: `
      uppercase tracking-widest font-normal lg:text-[.875rem] text-dark-blue hover:text-soft-red duration-300
      max-lg:text-white max-lg:border-b max-lg:border-[#4b506d] max-lg:block max-lg:text-center max-lg:py-4
    `
  },
  {
    id: 3,
    name: 'Contact',
    link: '#',
    class: `
      uppercase tracking-widest font-normal lg:text-[.875rem] text-dark-blue hover:text-soft-red duration-300
      max-lg:text-white max-lg:border-b max-lg:border-[#4b506d] max-lg:block max-lg:text-center max-lg:py-4
    `
  },
  {
    id: 4,
    name: 'Login',
    link: '#',
    class: `
      block uppercase tracking-widest font-medium lg:text-[.875rem] border-2 border-soft-red
      text-white lg:bg-soft-red rounded py-2 px-8 shadow-lg duration-300 lg:hover:bg-white lg:hover:text-soft-red
      max-lg:text-white max-lg:mt-5 max-lg:block max-lg:text-center max-lg:py-2 max-lg:border-white
    `
  },
];

function NavbarItem() {
  return (
    items.map(item => (
      <li key={item.id} className="max-lg:w-full">
        <a className={item.class} href={item.link}>
          {item.name}
        </a>
      </li>)
    )
  );
}

export default NavbarItem;
