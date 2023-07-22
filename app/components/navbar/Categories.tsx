'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { PiPlantLight } from 'react-icons/pi';
import { GiPlantRoots, GiBee } from 'react-icons/gi';
import { TbBrandSnapseed } from 'react-icons/tb';
import { BiSprayCan } from 'react-icons/bi';
import { MdOutlineSecurity } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Giám sát thực vật',
    icon: PiPlantLight,
    description: 'Con drone này giám sát các loại thực vật!',
  },
  {
    label: 'Giám sát trường đồng',
    icon: GiPlantRoots,
    description: 'Con drone này giám sát các cánh đồng.',
  },
  {
    label: 'Gieo trồng',
    icon: TbBrandSnapseed,
    description: 'Con drone này gieo trồng cây!',
  },
  {
    label: 'Phun thuốc',
    icon: BiSprayCan,
    description: 'Con drone này phun nước!',
  },
  {
    label: 'Giám sát an ninh',
    icon: MdOutlineSecurity,
    description: 'Con drone này thực hiện giám sát an ninh!',
  },
  {
    label: 'Gieo phấn bằng drone"',
    icon: GiBee,
    description: 'Con drone này gieo phấn vào các cây!',
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;