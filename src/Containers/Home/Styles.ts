import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
`;

export const TitleWrapper = styled.section`
  margin: 1em;
  padding: 1em;
`;

export const Hero = styled.section`
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