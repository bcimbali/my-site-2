import { css } from 'styled-components';

type genGenericTypes = {
  bgColor?: string;
  containerNo: string;
  textColor?: string;
};

const genGenericContainer = ({
  bgColor = '#394750',
  containerNo = 'H3T-L MRT',
  textColor = '#EF952A'
}: genGenericTypes) => ({
  bgColor,
  containerCss: css`
    display: flex;
    flex-direction: row;
  `,
  containerNo,
  textColor
});

export default genGenericContainer;
