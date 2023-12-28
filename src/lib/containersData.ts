import {
  aboutContainer,
  bc010Container,
  caretContainer,
  ckSiteContainer,
  contactContainer,
  doveContainer,
  eastContainer,
  ftLogisticsContainer,
  // mkdContainer,
  onyxContainer,
  spNextSiteContainer,
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
    containers: [contactContainer, sunshineContainer],
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
    containers: [aboutContainer, onyxContainer],
    flatcarColor: '#71797E'
  },
  {
    id: 'RVVX-4132',
    containers: [spNextSiteContainer]
  }
];

export default containersData;
