import {
  aboutContainer,
  bc010Container,
  // caretContainer,
  ckSiteContainer,
  contactContainer,
  // doveContainer,
  // eastContainer,
  // ftLogisticsContainer,
  grayOneContainer,
  // mkdContainer,
  // onyxContainer,
  projectsContainer,
  spNextSiteContainer
  // starboxContainer,
  // sunshineContainer,
  // wishContainer,
  // vmrOneContainer,
  // vmrThreeContainer,
  // vmrTwoContainer
} from '@/shipping_containers';

const containersData = [
  {
    id: 'RVVX-1197',
    containers: [bc010Container, grayOneContainer]
  },
  {
    id: 'RVVX-7201',
    containers: [grayOneContainer, contactContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'RVVX-4719',
    containers: [grayOneContainer, grayOneContainer]
  },
  {
    id: 'RVVX-9209',
    containers: [grayOneContainer, ckSiteContainer]
  },
  {
    id: 'RVVX-7789',
    containers: [grayOneContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'RVVX-5142',
    containers: []
  },
  {
    id: 'RVVX-0702',
    containers: [grayOneContainer, projectsContainer]
  },
  {
    id: 'RVVX-8244',
    containers: [aboutContainer, grayOneContainer],
    flatcarColor: '#71797E'
  },
  {
    id: 'RVVX-4132',
    containers: [spNextSiteContainer]
  }
];

export default containersData;
