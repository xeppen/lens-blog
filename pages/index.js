import Head from "next/head";
import Image from "next/image";
import { getFollowing } from "../constants/lensConstants";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  apolloClient,
  getPublications,
  getPublicationsQueryVariables,
} from "../constants/lensConstants";

// 1. Need to get the lens profileId of whomever signedin
// 2. Need to get a list of posts from the people they follow

let profileIdList = ["0x869c"];

export default function Home() {
  const [pubs, setPubs] = useState([]);
  const { account } = useMoralis();

  useEffect(() => {
    getPublicationsList().then((publications) => {
      console.log("publications: ", publications);
      setPubs(publications);
    });
  }, []);

  const getPublicationsList = async () => {
    let followers;
    let followingsIds = [];
    if (account) {
      followers = await apolloClient.query({
        query: getFollowing,
        variables: { request: { address: account } },
      });
      followingsIds = followers.data.following.items.map((f) => f.profile.id);
    }
    profileIdList = profileIdList.concat(followingsIds);
    const publications = await apolloClient.query({
      query: getPublications,
      variables: getPublicationsQueryVariables(profileIdList),
    });
    return publications;
  };

  return <div className={styles.container}>Hello</div>;
}
