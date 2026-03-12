export interface CardDetailsProps {
    image: string,
    heading: string,
    subheading: string,
    details: string,
}

export const projectDetails: CardDetailsProps[] = [
    {
        image: "/time.jpeg",
        heading: 'Time Library',
        subheading: 'JavaScript Library for time',
        details:'Creating a simple utility library, Making the library modular and tree-shakeable with ES modules, Converting it to a chainable, immutable library with OOP, Providing developers with hooks to customize how it works, Bundling a library for distribution and performance',
    },
     {
         image: "/burger.jpg",
        heading: 'A Burger Store website',
        subheading: 'React | Redux | hooks | firebase (Rest Api)',
         details: 'React | Redux | REST API (firebase) with Axios | React...Developed an application which is a simulated food ordering, mobile and desktop app with attractive user interface that works asynchronously and allow users to sign-up/in and order burgers of their own choice and cos',
     },
      {
        image: "/ship2.jpg",
        heading: 'Cargo shipping website',
        subheading: 'ASP.NET | ADO.NET | MySQL | Ajax',
        details: 'Created a full-flexed Cargo Shipping Website with real time updates supporting AJAX calls with Client+server side security and great UI. Check out the website link, Everything is described there..',
      },
       {
        image: "/jarvis.jpeg",
        heading: 'Voice assistant Desktop program',
        subheading: 'Python | Speech Recognition API',
        details: 'Using Python and relevant API’s Works on voice commands, show and speak specific searches on different websites, open apps on command, play music.',
    },
]

export const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "C / C++"]
export const frameworks = ["React", "NextJs", "Redux", "React Native", "GraphQL", "Node.js", "CICD"]
export const tools = ["Figma", "AWS", "Webpack", "JIRA", "Confluence", "Contentful(CMS)", "DevTools", "Optimizely(A / B Test)",
    "NewRelic", "Amplitude", "Gitlab", "Cloudfront"]