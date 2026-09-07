/**
 * JSON-LD structured data for Kashif Nehal's personal portfolio.
 * Implements schema.org Person, ProfilePage, and WebSite entities
 * with @id cross-references so Google can resolve them as one entity.
 */
export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kashifnehal.com/#website",
        url: "https://kashifnehal.com",
        name: "Kashif Nehal",
        description:
          "Official portfolio and professional website of Kashif Nehal, software engineer and designer based in Bangalore, India.",
        publisher: {
          "@id": "https://kashifnehal.com/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://kashifnehal.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://kashifnehal.com/#profilepage",
        url: "https://kashifnehal.com",
        name: "Kashif Nehal — Software Engineer & Designer",
        isPartOf: {
          "@id": "https://kashifnehal.com/#website",
        },
        about: {
          "@id": "https://kashifnehal.com/#person",
        },
        mainEntity: {
          "@id": "https://kashifnehal.com/#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://kashifnehal.com/#person",
        name: "Kashif Nehal",
        alternateName: ["Nehal Kashif", "Kashif"],
        url: "https://kashifnehal.com",
        image: {
          "@type": "ImageObject",
          url: "https://kashifnehal.com/og-image.png",
          caption: "Kashif Nehal — Software Engineer & Designer",
        },
        jobTitle: "Software Engineer & UX/UI Designer",
        description:
          "Kashif Nehal is a software engineer, UX/UI designer and frontend developer based in Bangalore, India, specializing in React, Next.js, design systems, and bespoke web experiences.",
        knowsAbout: [
          "UX/UI Design",
          "Frontend Development",
          "React",
          "Next.js",
          "Design Systems",
          "Software Engineering",
          "Web Development",
          "TypeScript",
          "GSAP Animation",
          "Digital Product Design",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/in/kashifnehal",
          "https://github.com/kashifnehal",
          "https://www.behance.net/kashifnehal",
          "https://dribbble.com/kashifnehal",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
