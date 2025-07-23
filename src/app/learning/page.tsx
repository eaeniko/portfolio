import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, learning } from "@/resources";
import { LearningProjects } from "@/components/learning/learningProjects";

export async function generateMetadata() {
  return Meta.generate({
    title: learning.title,
    description: learning.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(learning.title)}`,
    path: learning.path,
  });
}

export default function learningProjects() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={learning.path}
        title={learning.title}
        description={learning.description}
        image={`/api/og/generate?title=${encodeURIComponent(learning.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s" align="center">
        {learning.title}
      </Heading>
      <LearningProjects />
    </Column>
  );
}
