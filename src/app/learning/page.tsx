import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, learning } from "@/resources";
import { Projects } from "@/components/learning/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: learning.title,
    description: learning.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(learning.title)}`,
    path: learning.path,
  });
}

export default function Learning() {
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
      <Projects />
    </Column>
  );
}
