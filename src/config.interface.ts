interface ApiConfigProps {
  apiUrl: string;
  httpTimeout: number;
}

interface MongodbConfigProps {
  connectionString: string;
  databaseName: string;
}

interface JwtProps {
  secret: string;
}

export interface ConfigProps {
  port: number;
  version: string;
  api: ApiConfigProps;
  mongodb: {
    database: MongodbConfigProps;
  };
  jwt: JwtProps;
}
