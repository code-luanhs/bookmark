import { useState } from "react";

function TabsAsk({ title, lastItem = false }) {

  const [active, setActive] = useState(false);

  return (
    <li>
      <p
        onClick={() => active ? setActive(false) : setActive(true)}
        className={
          `${lastItem && !active ? 'border-y' : 'border-t'}
          py-3 border-t border-[#dedede] cursor-pointer flex items-center justify-between gap-4 pr-4
        hover:text-soft-red
          `}
      >
        {title}
        <svg
          className={`${active ? 'rotate-180' : ''} duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path fill="none" stroke={`${active ? 'hsl(0, 94%, 66%)' : '#5267DF'}`} strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </p>
      <div className={`${active ? 'block' : 'hidden'} text-gray font-normal pb-3`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores veritatis,
          cum aperiam fugit ex amet incidunt mollitia laudantium assumenda quas blanditiis,
          culpa porro excepturi, aliquam consequatur ratione est. Placeat.
        </p>
      </div>
    </li>
  );
}

export default TabsAsk;