const items = [
  {
    id: 1,
    name: 'Feature',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-[.875rem] text-dark-blue hover:text-soft-red duration-300'
  },
  {
    id: 2,
    name: 'Pricing',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-[.875rem] text-dark-blue hover:text-soft-red duration-300'
  },
  {
    id: 3,
    name: 'Contact',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-[.875rem] text-dark-blue hover:text-soft-red duration-300'
  },
  {
    id: 4,
    name: 'Login',
    link: '#',
    class: `block uppercase tracking-widest font-medium text-[.875rem] border-2 border-soft-red
            text-white bg-soft-red rounded py-2 px-8 shadow-lg duration-300 hover:bg-white hover:text-soft-red`
  },
];

function NavbarItem() {
  return (
    items.map(item => (
      <li key={item.id}>
        <a className={item.class} href={item.link}>
          {item.name}
        </a>
      </li>)
    )
  );
}

export default NavbarItem;
