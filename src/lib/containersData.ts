import {
  caretContainer,
  doveContainer,
  eastContainer,
  ftLogisticsContainer,
  mkdContainer,
  onyxContainer,
  starboxContainer,
  sunshineContainer,
  wishContainer,
  vmrOneContainer,
  vmrThreeContainer,
  vmrTwoContainer
} from '@/shipping_containers';

const containersData = [
  {
    id: 'DTTX-1197',
    containers: [onyxContainer, wishContainer]
  },
  {
    id: 'DTTX-7201',
    containers: [vmrOneContainer, sunshineContainer],
    flatcarColor: '#7b3c3c'
  },
  {
    id: 'DTTX-4719',
    containers: [caretContainer, starboxContainer]
  },
  {
    id: 'DTTX-9209',
    containers: [ftLogisticsContainer, vmrTwoContainer]
  },
  {
    id: 'DTTX-7789',
    containers: [eastContainer],
    flatcarColor: '#4B5320'
  },
  {
    id: 'DTTX-5142',
    containers: []
  },
  {
    id: 'DTTX-0702',
    containers: [doveContainer, vmrThreeContainer]
  },
  {
    id: 'DTTX-8244',
    containers: [],
    flatcarColor: '#71797E'
  },
  {
    id: 'DTTX-4132',
    containers: [mkdContainer]
  }
];

export default containersData;
