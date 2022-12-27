import { ApolloClient } from "@apollo/client";
import { createContext, useContext, useState } from "react";
import { challenge } from "../constants/lensConstants";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

export const LensContext = createContext();

export const useLensContext = () => useContext(LensContext);

export function LensProvider({ children }) {
  const [profileId, setProfileId] = useState(null);
  const [token, setToken] = useState(null);
  const { account } = useMoralis();

  const signIn = async () => {
    try {
      const challengeInfo = await ApolloClient.query({
        query: challenge,
        variables: { address: account },
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(
        challengeInfo.data.challenge.text
      );
      const authData = await ApolloClient.mutate({
        // similar to POST
        mutation: authenticate,
        variables: { address: account, signature },
      });

      const {
        data: {
          authenticate: { accessToken },
        },
      } = authData;
      setToken(accessToken);
    } catch (error) {
      console.log("Error signing in ", error);
    }
  };
  return (
    <LensContext.Provider value={{ profileId, token }}>
      {children}
    </LensContext.Provider>
  );
}
