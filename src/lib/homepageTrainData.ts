import {
  aboutContainer,
  bc010Container,
  ckSiteContainer,
  contactContainer,
  projectsContainer,
  spNextSiteContainer
} from '@/shipping_containers';
import genGenericContainer from '@/lib/genGenericContainer';

// Create same but different non-link shipping containers:
const unclickableOne = genGenericContainer({ containerNo: 'LRT-P CCF' });
const unclickableTwo = genGenericContainer({ containerNo: 'XIR-8 WWT' });
const unclickableThree = genGenericContainer({ containerNo: 'MNT-P ACI' });
const unclickableFour = genGenericContainer({ containerNo: 'ARC-T EMV' });
const unclickableFive = genGenericContainer({ containerNo: 'OST-F REB' });
const unclickableSix = genGenericContainer({ containerNo: 'SSR-C JES' });

const homepageTrainData = [
  {
    id: 'RVVX-1197',
    containers: [bc010Container, unclickableOne]
  },
  {
    id: 'RVVX-7201',
    containers: [unclickableSix, contactContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'RVVX-1123',
    containers: []
  },
  {
    id: 'RVVX-7789',
    containers: [unclickableTwo],
    flatcarColor: '#4B5320'
  },
  {
    id: 'RVVX-9209',
    containers: [spNextSiteContainer, unclickableThree]
  },
  {
    id: 'RVVX-5142',
    containers: []
  },
  {
    id: 'RVVX-0702',
    containers: [unclickableFour, ckSiteContainer]
  },
  {
    id: 'RVVX-9765',
    containers: []
  },
  {
    id: 'RVVX-8244',
    containers: [projectsContainer, unclickableFive],
    flatcarColor: '#71797E'
  },
  {
    id: 'RVVX-4132',
    containers: [aboutContainer]
  }
];

export default homepageTrainData;
