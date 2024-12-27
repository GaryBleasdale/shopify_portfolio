const fs = require("node:fs");

fs.stat("nested_repos_calendar.png", (err, stats) => {
	if (err) {
		console.error(err);
	}
	// we have access to the file stats in `stats`
	console.log(stats);
});
