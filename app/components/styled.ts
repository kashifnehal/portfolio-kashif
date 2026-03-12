
import styled from 'styled-components';

export const SectionWrapper = styled.div<{ bg?: string; color?: string }>`
  padding: 50px;
  background-color: ${(props) => props.bg || 'white'};
  color: ${(props) => props.color || '#000'};
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const SectionContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const ParallaxWrapper = styled.div`
  height:100vh;
  overflow-y:auto;
  overflow-x:hidden;
  // perspective: 10px;
  border: 8px solid green;
`

export const HeroWrapper = styled.div`
 postion:relative;
 display:flex;
 height: 100%;
 justify-content: space-between;
 color:white;
//  transform-style: preserve-3d;
//  z-index:-1;
  & > img {
  position: absolute;
  height:100%;
  width: 100%;
  object-fit: cover;
  z-index:-1;
  // transform: translateZ(-10px) scale(2)
  }
`;


export const HeroTitle = styled.div`
  font-size: 10rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.div`
  font-size: 1.5rem;
  margin: 10px 0;
  z-index: 1; /* Ensures subtitle text stays above the background */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Behind the text */
`;


export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
`;


export const Logo = styled.div`
  font-size: 24px;
  color: #fff;
`;

export const Nav = styled.div`
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #0070f3;
    }
  }
`;

export const HeroHeading = styled.div`
border: 2px yellow solid;
    display: flex;
    align-items: end;
`

export const HeroIntro = styled.div`
  font-size:40px;
  border: 2px red solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const HeroPageContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

export const ContactMe = styled.div`
  border: 4px solid white;
  border-radius: 30px;
  display: flex;
  padding: 0px 17px;
  width: fit-content;
`

export const DateComponent = styled.div``
export const AboutText = styled.div``
export const ProjectWrapper = styled.div`
    // background-color: #141414;
    border: 10px red solid;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    
    
`
export const ProjectItems = styled.div`
background-color: white;
`

export const CardDetails = styled.div``
export const CardWrapper = styled.div`
display:flex;`
export const CardImage = styled.div``
export const CardHeading = styled.div``
export const ContributionWrapper = styled.div`
background: grey;
height: 100vh;
display:flex;
flex-direction:column;
padding: 20px;
gap: 20px;
`
export const FirstOrgWrapper = styled.div`
display:flex;
flex-direction: row-reverse;
`
export const SecondOrgWrapper = styled.div`
display:flex;
`
export const SkillsWrapper = styled.div``





