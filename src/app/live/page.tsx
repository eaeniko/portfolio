import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
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
      <Heading wrap="balance" variant="display-strong-l" >
        {live.label}
      </Heading>
      <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
      <a href="https://eaeniko.vercel.app/stream/" target="_blank" rel="noopener noreferrer">
        More about my streams (Content, Commands, Setup etc)
      </a> 
      </Text>
      <Column fillWidth paddingY="24" gap="m" align="center">
        <div className= "live-video">
          <TwitchEmbedClient channel="eaeniko" layout="video-with-chat" />

        </div>

        <iframe src="https://discord.com/widget?id=397707232512311296&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </Column>
      
    </Column>
  );
}
