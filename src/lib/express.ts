import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit'

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN}));
app.use('/auth', rateLimit({windowMs: 15 * 60 * 1000, limit:10}))

export { app }