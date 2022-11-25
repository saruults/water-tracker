import styled, { keyframes } from 'styled-components';

const fill = (from, to) =>
  keyframes`
  from {height : ${from}%}
  to {height : ${to}%}
`;

const AnimatedWater = styled.div`
  animation: ${(props) => fill(props.from, props.to)} 0.8s linear forwards;
`;
export default AnimatedWater;
