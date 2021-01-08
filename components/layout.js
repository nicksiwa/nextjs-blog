import Head from "next/head";
import Link from "next/link";
import { Title } from "./heading";
import { Avatar } from "./image";
import { A } from "./link";
import { Header, Container } from "./section";

const name = "Siwa Khongsuphap";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <Avatar src="/images/profile.jpg" alt={name} />
            <Title xl>{name}</Title>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Avatar src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <Title md>
              <Link href="/">
                <A inherit>{name}</A>
              </Link>
            </Title>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <div style={{ marginTop: "3rem" }}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}
