import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import Script from "next/script";

import { 
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  TextProps,
  MediaProps,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function InLiveAdBelow() {
  return (
    <>
      {/* Carrega o script do Adsense apenas no cliente */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7328591460493456"
     crossOrigin="anonymous"></Script>
      
      <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-7328591460493456"
        data-ad-slot="1152550473"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <Script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </Script>
    </>
  );
}

function InArticleAd() {
  return (
    <>
      {/* Carrega o script do Adsense apenas no cliente */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7328591460493456"
        strategy="afterInteractive" // Carrega após a página ser interativa
        crossOrigin="anonymous"
      />
      <Grid marginY="16" align="center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-7328591460493456"
          data-ad-slot="5125221554"
        ></ins>
        {/* Inicializa o anúncio no cliente */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
              } catch (e) {
                console.error("Falha ao inicializar o Adsense:", e);
              }
            `,
          }}
        />
      </Grid>
    </>
  );
}

export default InArticleAd;

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({ children, ...props }: Omit<React.ComponentProps<typeof HeadingLink>, 'as' | 'id'>) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        marginTop="24"
        marginBottom="12"
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children && props.children.props && props.children.props.className) {
    const { className, children } = props.children.props;
    
    // Extract language from className (format: language-xxx)
    const language = className.replace('language-', '');
    const label = language.charAt(0).toUpperCase() + language.slice(1);
    
    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label
          }
        ]}
        copyButton={true}
      />
    );
  }
  
  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
  InArticleAd,
  InLiveAdBelow,
};



type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  );
}