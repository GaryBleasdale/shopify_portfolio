import type { Handler } from "@netlify/functions";
import fs from "node:fs/promises";
import path from "node:path";

export const handler: Handler = async (event, context) => {
	const filePath = path.join(process.cwd(), "nested_repos_calendar.png");
	try {
		const stats = await fs.stat(filePath);

		return {
			statusCode: 200,
			body: JSON.stringify({
				lastModified: stats.mtime,
				size: stats.size,
				created: stats.birthtime,
				path: filePath,
			}),
		};
	} catch (error) {
		console.error(`Error reading file at ${filePath}:`, error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Failed to read file stats",
				path: filePath,
			}),
		};
	}
};
