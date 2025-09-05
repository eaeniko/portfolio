import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, stream } from "@/resources";
import { StreamProjects } from "@/components/stream/StreamProjects";
import InLiveAdBelow from "@/components/mdx";

export async function generateMetadata() {
  return Meta.generate({
    title: stream.title,
    description: stream.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(stream.title)}`,
    path: stream.path,
  });
}

export default function streamProjects() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={stream.path}
        title={stream.title}
        description={stream.description}
        image={`/api/og/generate?title=${encodeURIComponent(stream.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s" align="center">
        {stream.title}
      </Heading>
      <StreamProjects />
      <InLiveAdBelow/>
    </Column>
  );
}
