const items = [
  {
    id: 1,
    name: 'Feature',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-sm text-dark-blue'
  },
  {
    id: 2,
    name: 'Pricing',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-sm text-dark-blue'
  },
  {
    id: 3,
    name: 'Contact',
    link: '#',
    class: 'uppercase tracking-widest font-normal text-sm text-dark-blue'
  },
  {
    id: 4,
    name: 'Login',
    link: '#',
    class: 'block uppercase tracking-widest font-medium text-sm text-white bg-soft-red rounded py-2.5 px-8 shadow-lg'
  },
];

function NavbarItem() {
  return (
    items.map(item => (
      <li key={item.id}>
        <a className={item.class} href={item.link}>
          {item.name}
        </a>
      </li>
    )
    )
  );
}

export default NavbarItem;
