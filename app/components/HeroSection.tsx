"use client"; // Add this directive at the top
import {AboutText, ContactMe, DateComponent, HeroHeading, HeroIntro, HeroPageContent, HeroSubtitle, HeroTitle, HeroWrapper, Overlay} from './styled'
import {Bebas_Neue} from '@next/font/google'

const heroFont = Bebas_Neue({
  subsets:['latin'],
  weight:['400'],
  
})

const HeroSection: React.FC = () => {
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const d = new Date();
  const day = d.getDate();
  const monthName = month[d.getMonth()];
  return <HeroWrapper>
  <img src='./heroWrap.jpg' />
  <HeroPageContent>
  <HeroHeading className={heroFont.className}>
    <HeroTitle>THE LOOP</HeroTitle>
    {/* <HeroTitle>DEVELOPER</HeroTitle> */}
  </HeroHeading>
  <HeroIntro>
    <DateComponent>
      {day}
      {monthName}
      <div>available for work</div>
    </DateComponent>
    <AboutText>
    {/* <ContactMe>CONTACT ME</ContactMe> */}
    </AboutText>
  </HeroIntro>
  </HeroPageContent>

  {/* <HeroSubtitle>Entrepreneur, Speaker, and Author</HeroSubtitle> */}
</HeroWrapper>
};

export default HeroSection;
