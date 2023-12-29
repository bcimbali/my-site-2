import {
  aboutContainer,
  bc010Container,
  // caretContainer,
  ckSiteContainer,
  contactContainer,
  // doveContainer,
  // eastContainer,
  // ftLogisticsContainer,
  genericOneContainer,
  genericTwoContainer,
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
    containers: [bc010Container, genericOneContainer]
  },
  {
    id: 'RVVX-7201',
    containers: [genericOneContainer, contactContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'RVVX-4719',
    containers: [genericOneContainer, genericTwoContainer]
  },
  {
    id: 'RVVX-9209',
    containers: [genericOneContainer, ckSiteContainer]
  },
  {
    id: 'RVVX-7789',
    containers: [genericOneContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'RVVX-5142',
    containers: []
  },
  {
    id: 'RVVX-0702',
    containers: [genericOneContainer, projectsContainer]
  },
  {
    id: 'RVVX-8244',
    containers: [aboutContainer, genericOneContainer],
    flatcarColor: '#71797E'
  },
  {
    id: 'RVVX-4132',
    containers: [spNextSiteContainer]
  }
];

export default containersData;
