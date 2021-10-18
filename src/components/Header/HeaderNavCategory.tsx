import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface HeaderNavCategoryProps {
  idx: number;
}

const HeaderNavCategory = ({ idx }: HeaderNavCategoryProps) => {
  return (
    <li className='nav__category'>
      <ScrollLink to={`list${idx + 1}`} offset={-100} smooth={true}>
        Lista {idx + 1}
      </ScrollLink>
    </li>
  );
};

export default HeaderNavCategory;
