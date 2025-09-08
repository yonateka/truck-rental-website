import { account } from "../appwriteConfig";

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}
