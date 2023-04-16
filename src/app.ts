import express, { type Express } from "express";
import cors from "cors";
import { routers } from "./routers";

function setupCors(e: Express): Express {
	return e.use(cors());
}

function setupRoutes(e: Express): Express {
	return e.use(routers);
}

function setupBodyParser(e: Express): Express {
	return e.use(express.json()).use(
		express.urlencoded({
			extended: true,
		})
	);
}

export const app: Express = [setupCors, setupBodyParser, setupRoutes].reduce(
	(e, middleware) => middleware(e),
	express()
);