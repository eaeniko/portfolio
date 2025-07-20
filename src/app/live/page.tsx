import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, live } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: live.title,
    description: live.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(live.title)}`,
    path: live.path,
  });
}

export default function Live() {
  return (
    <Column maxWidth="m">
      <h1>{live.label}</h1>
      <p>WIP - Work in progress, come back soon</p>
      <iframe src="https://player.twitch.tv/?channel=eaeniko&parent=www.eaeniko.vercel.app/live" frameBorder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={live.path}
        title={live.title}
        description={live.description}
        image={`/api/og/generate?title=${encodeURIComponent(live.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
    </Column>
  );
}
