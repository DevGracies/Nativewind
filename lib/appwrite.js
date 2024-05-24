import { Client, Account } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.olori.aora",
  projectId: "664b65b80024af6c108b",
  databaseId: "664e055900228a09a866",
  userCollectionId: "664e05e900179bec520f",
  videoCollectionId: "664e066500044b13979f",
  storageId: "664f98ca002c9c1df778",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getIntials(username);
    await signIn();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
  } catch (error) {
    throw new Error(error);
  }
};
