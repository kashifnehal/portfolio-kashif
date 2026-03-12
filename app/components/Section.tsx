import {SectionWrapper, SectionTitle, SectionContent} from './styled'
interface SectionProps {
  id: string;
  title: string;
  content: string;
  bg?: string;
  color?: string;
}


const Section: React.FC<SectionProps> = ({ id, title, content, bg, color }) => (
  <SectionWrapper id={id} bg={bg} color={color}>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent>{content}</SectionContent>
  </SectionWrapper>
);

export default Section;
