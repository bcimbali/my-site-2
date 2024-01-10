import { ImageResponse } from 'next/og';
// import { play } from '@/app/fonts';

// Route segment config
export const runtime = 'edge';

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
      // ImageResponse JSX element
      <div
        style={{
          alignItems: 'center',
          background: '#00154A',
          color: '#E3DAC9',
          display: 'flex',
          fontSize: 128,
          height: '100%',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        About Brett Cimbalik
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
