import { Router } from "express";
import { db } from "./db";
import { artists } from "./db/schema";

function setupRoutes(r: Router): Router {
	r.get("/", (_req, res) => {
		res.json({
			hello: "world",
		});
	});

	r.get("/songs", (_req, res) => {
		(async () => {
			const resp = await db.select().from(artists);

			res.json({
				result: resp,
			});
		})();
	});

	r.post("/songs", (req, res) => {
		(async () => {
			try {
				await db.insert(artists).values({
					name: req.body.name,
				});

				res.json({
					success: true,
				});
			} catch (_error) {
				res.json({
					success: false,
				});
			}
		})();
	});
	return r;
}

export const routers = setupRoutes(Router());