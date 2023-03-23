import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  mongoConnectionString: process.env.MONGO_URI,
}))
