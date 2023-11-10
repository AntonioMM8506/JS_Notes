import * as Joi from 'joi';

    const schema =
      Joi.object().keys({
        LISTENIG_PORT: Joi.number().default(4000).required(),
        THROTTLE_TTL: Joi.number().default(100).required(),
        THROTTLE_LIMIT: Joi.number().default(10).required(),
        MONGODB_URI: Joi.string().default(process.env.MONGODB_URI).required()
      })


export class AppModule {}

/*
LISTENING_PORT = required and number and should be 4000
THROTTLE_TTL = required and number
THROTTLE_LIMIT = required, number and should be less than 15
MONGODB_URI = required and string
*/