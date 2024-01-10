import { ImageResponse } from 'next/og';

// Image metadata:
export const alt = 'Brett Cimbalik';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background:
            'linear-gradient(0deg, #00154A 0%, #001242 26.56%, #001C54 55.21%, #00377A 80.73%, #3C4280 100%)',
          color: '#E3DAC9',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 48,
          height: '100%',
          justifyContent: 'center',
          padding: 24,
          width: '100%'
        }}
      >
        <svg
          fill="none"
          viewBox="0 0 37 20"
          width={900}
          height={473}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="m4 0c-2.20917 0-4 1.79077-4 4v12c0 2.2092 1.79083 4 4 4h29c2.2092 0 4-1.7908 4-4v-12c0-2.20923-1.7908-4-4-4zm14.1621 14.5723c.2149-.4883.3223-1.0125.3223-1.5723 0-.092-.0031-.1833-.0092-.2734-.0061-.0911-.0154-.1812-.0278-.2701-.0166-.1191-.0388-.2363-.0665-.3515-.0281-.117-.062-.232-.1016-.3452-.1302-.3973-.3157-.7586-.5566-1.084-.2344-.3255-.5176-.6121-.8497-.85939-.3255-.24732-.6835-.43946-1.0742-.57618.2083-.31909.3744-.66406.4981-1.03515.1237-.37769.1855-.77808.1855-1.20117 0-.54688-.1074-1.06446-.3222-1.55274-.2084-.48828-.4949-.91138-.8594-1.26953-.3581-.3645-.7813-.65112-1.2696-.85937-.2649-.1167-.5385-.20166-.8208-.25489-.2378-.04492-.4818-.06738-.7319-.06738h-10.4785v14.0039h2.00195v-12.00195h8.47655c.1524 0 .2997.01612.4419.04859.113.02563.2229.06152.3296.10766.0526.02222.1036.04615.1533.07178.0513.02661.101.05493.1492.08521.0694.04345.1356.09106.1985.14257.0499.04102.0978.08423.1435.13013.0991.09912.1866.20776.2625.32593.0265.04101.0515.08325.0751.12671.0335.06152.0642.12549.0921.19189.1042.24097.1563.49805.1563.77149 0 .27343-.0521.53393-.1563.78125-.0566.13086-.1246.25293-.2042.36645-.033.04712-.0679.09253-.1047.13648-.0381.04565-.0784.0896-.1208.13183-.1823.18237-.3971.32544-.6445.42969-.2409.10425-.498.15625-.7715.15625h-7.48045v2.00194h9.48245c.2734 0 .5305.052.7715.1563.2473.1042.4622.2473.6445.4297.1823.1823.3255.3937.4297.6347s.1562.4981.1562.7715-.052.5339-.1562.7812c-.1042.241-.2474.4524-.4297.6348-.1109.1109-.2337.2073-.3686.2893-.0549.0332-.1118.0642-.1707.0928-.0344.0166-.0695.0325-.1052.0476-.241.1043-.4981.1563-.7715.1563h-9.48245v2.0019h9.48245c.5468 0 1.0644-.1042 1.5527-.3125.4883-.2082.9114-.4914 1.2695-.8496.3646-.3645.6511-.7878.8594-1.2695zm8.3106 2.4316h9.0136v-2.0019h-9.0136c-.6902 0-1.3119-.1302-1.8653-.3907-.5469-.2605-1.0124-.6152-1.3965-1.0644-.3776-.4558-.6706-.9864-.8789-1.5918-.2018-.6121-.3027-1.263-.3027-1.9531 0-.69023.1009-1.33794.3027-1.94341.2083-.60547.5013-1.13281.8789-1.58203.3841-.45581.8496-.81372 1.3965-1.07422.5534-.26684 1.1751-.40039 1.8653-.40039h9.0136v-2.00195h-9.0136c-.9701 0-1.8523.18555-2.6465.55664-.7943.3645-1.4746.86597-2.041 1.50391-.5599.63159-.9929 1.37378-1.2989 2.22656-.3059.84643-.459 1.75122-.459 2.71489 0 .9699.1531 1.8815.459 2.7343.306.8528.739 1.595 1.2989 2.2266.5664.6316 1.2467 1.1296 2.041 1.4941.7942.3645 1.6764.5469 2.6465.5469z"
            fill="#E3DAC9"
            fill-rule="evenodd"
          />
        </svg>
        <div style={{ marginTop: 24 }}>Brett Cimbalik</div>
      </div>
    ),
    {
      ...size
    }
  );
}
