import { MenuItem } from '@/interfaces';
import { CiLocationArrow1 } from 'react-icons/ci';
import { PiGridFourLight, PiSuitcaseSimpleThin, PiUsersThreeLight } from 'react-icons/pi';


export const menuItem:MenuItem[] = [
    {
        name: 'Categorias',
        icon: <PiGridFourLight  size={70} />,
        link: '/categories',

    },
    {
        name: 'Ubicaciones',
        icon: <CiLocationArrow1 size={70}  />,
        link: '/locations',

    },
    {
        name: 'Nuestro equipo',
        icon: <PiUsersThreeLight size={70} />,
        link: '/team',

    },
    {
        name: 'Oportunidades',
        icon: <PiSuitcaseSimpleThin size={70}  />,
        link: '/jobs',

    },
    
    
]


export const menuItemPhone:MenuItem[] = [
    {
        name: 'Categorias',
        icon: <PiGridFourLight  size={50} />,
        link: '/categories',

    },
    {
        name: 'Ubicaciones',
        icon: <CiLocationArrow1 size={50} />,
        link: '/locations',

    },
    {
        name: 'Nuestro equipo',
        icon: <PiUsersThreeLight size={50} />,
        link: '/team',

    },
    {
        name: 'Oportunidades',
        icon: <PiSuitcaseSimpleThin size={50} />,
        link: '/jobs',

    },
    
    
]