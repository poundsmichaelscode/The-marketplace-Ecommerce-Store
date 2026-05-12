import { Redis } from "ioredis";
import { env } from "./env.js";

export const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: 2,
  lazyConnect: true,
});

export async function connectRedis() {
  try {
    if (redis.status === "wait") {
      await redis.connect();
    }
  } catch {
    console.warn("Redis connection skipped");
  }
}