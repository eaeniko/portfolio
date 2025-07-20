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
      
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <iframe
          src={
            "https://player.twitch.tv/?channel=eaeniko" +
            "&parent=localhost" +
            "&parent=eaeniko.vercel.app" +
            "&parent=www.eaeniko.vercel.app"
          }
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          height="550"
          width="650"
        />
        <iframe
          id="chat_embed"
          src={
            "https://www.twitch.tv/embed/eaeniko/chat" +
            "?parent=localhost" +
            "&parent=eaeniko.vercel.app" +
            "&parent=www.eaeniko.vercel.app"
          }
          frameBorder="0"
          scrolling="no"
          height="550"
          width="350">

        </iframe>
      </div>      
    </Column>
  );
}
