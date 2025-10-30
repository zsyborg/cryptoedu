import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI; // Do not throw at import time to keep builds working without envs

// Optional DB name, otherwise you can pass one to getDb(name)
const defaultDb = process.env.MONGODB_DB;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

function createClientPromise() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI in environment");
  }
  const client = new MongoClient(uri, options);
  return client.connect();
}

export function getMongoClient() {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    return global._mongoClientPromise;
  }
  if (!clientPromise) clientPromise = createClientPromise();
  return clientPromise;
}

export async function getDb(name: string | undefined = defaultDb) {
  const client = await getMongoClient();
  return client.db(name);
}
