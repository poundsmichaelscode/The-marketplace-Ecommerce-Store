import { app } from './app.js';
import { connectDatabase } from './config/db.js';
import { connectRedis } from './config/redis.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
async function bootstrap() {
  await connectDatabase();
  await connectRedis();
  app.listen(env.PORT, () => logger.info(`API running on port ${env.PORT}`));
}
bootstrap().catch((error) => { logger.error(error); process.exit(1); });
