import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, live } from "@/resources";
// import InLiveAdBelow from "@/components/mdx";
import TwitchEmbedClient from "@/components/TwitchEmbedClient";

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
    <Column fillWidth paddingY="24" gap="m" align="center">
      <h1>{live.label}</h1>     
      <a href="https://eaeniko.vercel.app/stream/" target="_blank" rel="noopener noreferrer">
        More about my streams (Content, Commands, Setup etc)
      </a> 
      <div className="live-wrapper">
        <div className="live-container">
          <div className="live-video">
            <TwitchEmbedClient channel="eaeniko" layout="video-with-chat" />
          </div>
        </div>
      </div>
      
    </Column>
  );
}
