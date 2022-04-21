import Head from "next/head";
import React, { ReactNode } from "react";
import { Container } from "../styles/layout";

type LayoutPropsType = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Layout({
  title,
  description,
  children,
}: LayoutPropsType) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="backgroundDegrade"></div>
        {children}
      </Container>
    </>
  );
}
