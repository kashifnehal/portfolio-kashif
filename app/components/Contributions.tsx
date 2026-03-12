import { CardDetails, CardHeading, CardImage, ContributionWrapper, FirstOrgWrapper, SecondOrgWrapper } from "./styled"
import Image from 'next/image'



const Contributions = () => {
    return <ContributionWrapper>
        
        <FirstOrgWrapper>
            <CardImage>
                <Image
                    src="/chegg.jpg"
                    width={500}
                    height={500}
                    alt="chegg"
                />
            </CardImage>
            <CardDetails>
                <CardHeading>
                    Chegg, Delhi
                </CardHeading>
                <div>Full Stack developer</div>
            </CardDetails>
        </FirstOrgWrapper>
        <SecondOrgWrapper>
            <CardImage>
                <Image
                    src="/spice.png"
                    width={500}
                    height={500}
                    alt="chegg"
                />
            </CardImage>
            <CardDetails>
                <CardHeading>
                    SpiceJet (via Valuelabs), Hyderabad
                </CardHeading>
                <div>Software Development Engineer</div>
            </CardDetails>
        </SecondOrgWrapper>
    </ContributionWrapper>
}
export default Contributions