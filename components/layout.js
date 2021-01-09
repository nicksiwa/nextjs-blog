import Head from "next/head";
import Link from "next/link";
import { Title } from "./typography";
import { Avatar } from "./image";
import { Header, Container, Footer } from "./section";

const name = "Siwa Khongsuphap";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <Container>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
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
              <Title xxl>{name}</Title>
            </>
          ) : null}
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
      <Footer>Hello</Footer>
    </>
  );
}
