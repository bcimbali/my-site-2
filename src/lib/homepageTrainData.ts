import {
  aboutContainer,
  bc010Container,
  ckSiteContainer,
  contactContainer,
  genericOneContainer,
  projectsContainer,
  spNextSiteContainer
} from '@/shipping_containers';

const homepageTrainData = [
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
    id: 'RVVX-1123',
    containers: []
  },
  {
    id: 'RVVX-7789',
    containers: [genericOneContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'RVVX-9209',
    containers: [ckSiteContainer, genericOneContainer]
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
    id: 'RVVX-9765',
    containers: []
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

export default homepageTrainData;
