import 'dotenv/config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as Resolvers from './resolvers/index.js';

dotenv.config({ path: '../.env' });

await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'telita-buhoDataBase' });

type ResolverModel = { Query?: Record<string, any>; Mutation?: Record<string, any> };
const modules = Object.values(Resolvers) as ResolverModel[];

const merge = (key: 'Query' | 'Mutation') =>
  modules.reduce((acc, m) => Object.assign(acc, m[key] ?? {}), {});

export const resolvers = {
  Query: merge('Query'),
  Mutation: merge('Mutation'),
};
