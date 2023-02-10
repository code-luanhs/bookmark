import { useState } from "react";

function TabsAsk({ title, lastItem = false }) {

  const [active, setActive] = useState(false);

  return (
    <li>
      <p
        onClick={() => active ? setActive(false) : setActive(true)}
        className={`${lastItem && !active ? 'border-y' : 'border-t'} py-3 border-t border-[#dedede] cursor-pointer`}
      >
        {title}
      </p>
      <div className={`${active ? 'block' : 'hidden'} text-gray font-normal pb-3`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores veritatis,
        cum aperiam fugit ex amet incidunt mollitia laudantium assumenda quas blanditiis,
        culpa porro excepturi, aliquam consequatur ratione est. Placeat.
      </div>
    </li>
  );
}

export default TabsAsk;