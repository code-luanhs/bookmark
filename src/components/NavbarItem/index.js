const items = [
  {
    name: 'Feature',
    link: '#',
    class: 'uppercase tracking-widest text-[13px] text-dark-blue'
  },
  {
    name: 'Pricing',
    link: '#',
    class: 'uppercase tracking-widest text-[13px] text-dark-blue'
  },
  {
    name: 'Contact',
    link: '#',
    class: 'uppercase tracking-widest text-[13px] text-dark-blue'
  },
  {
    name: 'Login',
    link: '#',
    class: 'block uppercase tracking-widest text-[13px] text-white bg-soft-red rounded py-2 px-8'
  },
];

function NavbarItem() {
  return (
    items.map(item => (
      <li>
        <a className={item.class} href={item.link}>
          {item.name}
        </a>
      </li>
    )
    )
  );
}

export default NavbarItem;
