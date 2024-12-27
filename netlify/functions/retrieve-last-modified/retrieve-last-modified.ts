import { Handler } from "@netlify/functions";
import fs from "node:fs/promises";
import path from "node:path";

export const handler: Handler = async (event, context) => {
	try {
		const stats = await fs.stat("nested_repos_calendar.png");

		return {
			statusCode: 200,
			body: JSON.stringify({
				lastModified: stats.mtime,
				size: stats.size,
				created: stats.birthtime,
			}),
		};
	} catch (error) {
		console.error("Error reading file:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to read file stats" }),
		};
	}
};
