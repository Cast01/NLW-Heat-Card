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
} from "./styles/main-page";
import Image from "next/image";
import rocketseatLogo from "../../public/images/build.svg";
import github from "../../public/images/Github.svg";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { socialMediaLinksAndLogo } from "../utils/socialMediaLinks";

type User = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
};
type Teste = {
  user: User;
};

const Home: NextPage<Teste> = ({ user }) => {
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
      title="NLW-Heat-Card"
      description="Meu cartão da NLW - Heat feito com NextJS"
    >
      <Main>
        <Content>
          <ProfileImage>
            <div>
              <Image
                src={rocketseatLogo}
                alt="Profile image"
                width={80}
                height={80}
              />
            </div>
            <Image
              className="avatar"
              src={user.avatar_url}
              alt="Profile image"
              width={160}
              height={186}
            />
          </ProfileImage>
          <Name>{user.name}</Name>
          <GithubiconUsername>
            <Image src={github} alt="Profile image" width={16} height={16} />
            <a
              href="https://github.com/Cast01"
              target="_blank"
              rel="noreferrer"
            >
              {user.login}
            </a>
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

  const user = await fetch(url)
    .then((resp) => resp.json())
    .then((userData) => userData);

  // const user = await axios
  //   .get(url)
  //   .then((resp) => resp.data)
  //   .then((userData) => userData);

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default Home;
