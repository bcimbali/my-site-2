import {
  bc010Container,
  caretContainer,
  ckSiteContainer,
  doveContainer,
  eastContainer,
  ftLogisticsContainer,
  // mkdContainer,
  onyxContainer,
  starboxContainer,
  sunshineContainer,
  // wishContainer,
  vmrOneContainer,
  vmrThreeContainer,
  vmrTwoContainer
} from '@/shipping_containers';

const containersData = [
  {
    id: 'RVVX-1197',
    containers: [bc010Container, ckSiteContainer]
  },
  {
    id: 'RVVX-7201',
    containers: [vmrOneContainer, sunshineContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'RVVX-4719',
    containers: [caretContainer, starboxContainer]
  },
  {
    id: 'RVVX-9209',
    containers: [ftLogisticsContainer, vmrTwoContainer]
  },
  {
    id: 'RVVX-7789',
    containers: [eastContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'RVVX-5142',
    containers: []
  },
  {
    id: 'RVVX-0702',
    containers: [doveContainer, vmrThreeContainer]
  },
  {
    id: 'RVVX-8244',
    containers: [],
    flatcarColor: '#71797E'
  },
  {
    id: 'RVVX-4132',
    containers: [onyxContainer]
  }
];

export default containersData;
