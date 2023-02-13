import { useState } from "react";

import './styles.css';

function TabsAsk({ title, lastItem = false }) {

  const [active, setActive] = useState(false);

  return (
    <li>
      <p
        onClick={() => active ? setActive(false) : setActive(true)}
        className={
          `${lastItem && !active ? 'border-y' : 'border-t'}
          py-3 border-t border-[#dedede] cursor-pointer flex items-center justify-between gap-4 pr-4 arrow-down
          ${active ? 'active' : ''}
          `}
      >
        {title}
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