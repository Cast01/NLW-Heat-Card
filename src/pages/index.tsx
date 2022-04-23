import type { NextPage } from "next";
import Layout from "../components/Layout";
import {
  Content,
  Main,
  ProfileImage,
  GithubDescription,
  GithubiconUsername,
  Name,
  SocialMedias,
  Faixa,
  Separator,
} from "../styles/main-page";
import Image from "next/image";
import rocketseatSelo from "../../public/images/build.svg";
import github from "../../public/images/Github.svg";
import avatar from "../../public/images/avatar-gon.jpg";
import faixa from "../../public/images/faixa.svg";
// import { useEffect, useState } from "react";
import axios from "axios";
import { socialMediaLinksAndLogo } from "../utils/socialMediaLinks";

type User = {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
  };
};

const Home: NextPage<User> = ({ user }) => {
  /*
    Using fetch()
  */
  // const url = "http://localhost:3000/api/hello";
  // fetch(url).then((resp) =>
  //   resp
  //     .json()
  //     .then((y) => y.name)
  //     .then((x) => console.log(JSON.parse(x)))
  // );
  // const [user, setUser] = useState<User>();

  /*
    Using axios()
  */
  // const [user, setUser] = useState<User>();
  // const url = "https://api.github.com/users/Cast01";
  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((userData) => setUser(userData));
  // }, []);

  // console.log(user);

  return (
    <Layout
      title="Gabriel Castilho - NLW Heat Card"
      description="Meu cartão(gabriel castilho) da NLW - Heat feito com NextJS"
    >
      <Faixa>{/* <div></div> */}</Faixa>
      <Separator />
      <Main>
        <Content>
          <ProfileImage>
            <div>
              <Image
                src={rocketseatSelo}
                alt="rocketseat selo"
                width={80}
                height={80}
              />
            </div>
            <Image
              className="githubAvatar"
              src={user.avatar_url}
              alt="rocketseat selo"
              width={160}
              height={186}
            />
          </ProfileImage>
          <Name>{user.name}</Name>
          <GithubiconUsername>
            <Image src={github} alt="github logo" width={16} height={16} />
            <a href="https://">{user.login}</a>
          </GithubiconUsername>
          <GithubDescription>{user.bio}</GithubDescription>
          <SocialMedias>
            <ul>
              {socialMediaLinksAndLogo.map((item, index) => (
                <li key={index}>
                  <a
                    href={`https://${item.socialMediaName}.com/${item.userName}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.socialMediaName} logo`}
                      width={48}
                      height={48}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </SocialMedias>
        </Content>
      </Main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = "https://api.github.com/users/Cast01";

  // const response = await fetch(url);
  // const user = await response.json();

  const response = await axios.get(url);
  const user = await response.data;

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default Home;
