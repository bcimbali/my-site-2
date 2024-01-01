import bc010Image from '@/../public/project-images/bc-010-1200x800.jpg';
import ckSiteImage from '@/../public/project-images/ck-site-1200x800.jpg';
import spNextSiteImage from '@/../public/project-images/sp-next-site-1200x800.jpg';

const projectsData = [
  {
    title: 'bc-010',
    description:
      'A React-based audio mono-synthesizer that you can use in your Chrome web browser.',
    image: bc010Image,
    codeLink: 'https://github.com/bcimbali/bc-010',
    liveLink: 'https://frosty-swanson-669b64.netlify.app/',
    techStack: ['React', 'Flow', 'Tone.js', 'Styled Components']
  },
  {
    title: 'ck-site',
    description: 'A fully customized portfolio for a professional copywriter.',
    image: ckSiteImage,
    codeLink: 'https://github.com/bcimbali/ck-site',
    liveLink: 'https://kanownik.co/',
    techStack: ['React', 'Gatsby.js', 'Styled Components']
  },
  {
    title: 'sp-next-site',
    description: 'A band website with a custom audio player.',
    image: spNextSiteImage,
    codeLink: 'https://github.com/bcimbali/sp-next-site',
    liveLink: 'https://sp-next-site.vercel.app/',
    techStack: ['React', 'Next.js', 'Styled Components', 'Amplitude.js']
  }
];

export default projectsData;
