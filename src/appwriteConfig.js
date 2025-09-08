import { Client, Account, Databases } from "appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud endpoint
  .setProject("68bdc80f003cc57aaf5d"); // Replace with your Project ID

// Export services
export const account = new Account(client);
export const databases = new Databases(client);

export default client;
