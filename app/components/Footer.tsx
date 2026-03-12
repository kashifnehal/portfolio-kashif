import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>&copy; {new Date().getFullYear()} Patrick David. All Rights Reserved.</p>
  </FooterWrapper>
);

export default Footer;
