/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverage: true,
	verbose: true,
	collectCoverageFrom: ["./src/**"],
	coverageThreshold: {
		global: {
			lines: 95,
		},
	},

	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "./tsconfig.json",
			},
		],
	},
};
