import { ImageResponse } from 'next/og';
import BcLogo from '@/icons/raw/bc-logo.svg';
// import { play } from '@/app/fonts';

// Image metadata
export const alt = 'About Brett Cimbalik';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#00154A',
          color: '#E3DAC9',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 48,
          height: '100%',
          justifyContent: 'center',
          padding: '8px',
          width: '100%'
        }}
      >
        <BcLogo />
        <div>About</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size
    }
  );
}
