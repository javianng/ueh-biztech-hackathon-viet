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
    label: 'Plant Monitoring',
    icon: PiPlantLight,
    description: 'This drone monitors plants!',
  },
  {
    label: 'Field Monitoring',
    icon: GiPlantRoots,
    description: 'This drone monitors fields.',
  },
  {
    label: 'Planting & Seeding',
    icon: TbBrandSnapseed,
    description: 'This drone plants and seeds!',
  },
  {
    label: 'Spray Application',
    icon: BiSprayCan,
    description: 'This drone sprays water!',
  },
  {
    label: 'Security',
    icon: MdOutlineSecurity,
    description: 'This drone does surveillance!',
  },
  {
    label: 'Drone Pollination',
    icon: GiBee,
    description: 'This drone pollinates plants!',
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