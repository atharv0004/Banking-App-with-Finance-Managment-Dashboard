'use server'
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

interface SignUpParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address1:string;
  // other fields...
}

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInProps) => {
  try {
    const { account } = await createAdminClient();
    console.log(email);
    const response = await account.createEmailPasswordSession(email, password);
    return parseStringify(response);
  } catch (error) {
    console.error('error', error);
  }
}

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();
    const name = `${firstName} ${lastName}`;

    const newUserAccount = await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error('error', error);
  }
}

export async function getLoggedInUser() {

  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

 export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    cookies().delete('appwrite-session');

    await account.deleteSession('current');

  }
  catch(error){
    return null;
  }
 }