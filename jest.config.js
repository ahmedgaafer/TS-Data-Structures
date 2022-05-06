/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
			collectCoverage: true,
			collectCoverageFrom: ["./src/**"],
			coverageThreshold: {
				global: {
					lines: 95,
				},
			},
		},
	},
};
