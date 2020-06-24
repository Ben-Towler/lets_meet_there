import styled from 'styled-components'

export const Wrapper = styled.section`
`;

export const TitleWrapper = styled.section`
  margin: 1em;
  padding: 1em;
`;

export const Hero = styled.section`
  background-color: #fff;
  height: 90vh;
`;

export const Title = styled.section`
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.navyBlue};
`;

export const SubTitle = styled.p`
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gullGrey};
`;