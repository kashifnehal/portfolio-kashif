import { projectDetails } from "./constants";
import { ProjectWrapper } from "./styled";
import ProjectCards from "./ProjectCards";

 const Projects = () => {
    return <ProjectWrapper>
        {projectDetails.map((cards) => {
            return <ProjectCards
                key={cards.heading}
                details={cards}
            />
        })}
  
    </ProjectWrapper>
}

export default Projects;