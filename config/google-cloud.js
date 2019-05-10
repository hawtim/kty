const {auth} = require("google-auth-library");

async function main() {
  const client = await auth.getClient({
    scopes: "https://www.googleapis.com/auth/devstorage.read_write",
  });

  const gcpAccessToken = (await client.getAccessToken()).token;
}

main().catch(console.error);