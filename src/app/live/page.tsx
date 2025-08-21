import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, live } from "@/resources";
import InLiveAdBelow from "@/components/mdx";

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
    <Column fillWidth gap="xl" marginBottom="1" paddingX="xl" marginLeft="m">
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
      
      <div className="live-wrapper">
        <div className="live-container">
          <div className="live-video">
            <iframe
              src={
                "https://player.twitch.tv/?channel=eaeniko" +
                "&parent=localhost" +
                "&parent=eaeniko.vercel.app" +
                "&parent=www.eaeniko.vercel.app"
              }
              title="Twitch player"
              allowFullScreen
            />
          </div>
          <div className="live-chat">
            <iframe
              id="chat_embed"
              src={
                "https://www.twitch.tv/embed/eaeniko/chat" +
                "?parent=localhost" +
                "&parent=eaeniko.vercel.app" +
                "&parent=www.eaeniko.vercel.app"
              }
              title="Twitch chat"
            />
          </div>
        </div>
      </div>
      <InLiveAdBelow/>
      
    </Column>
  );
}
