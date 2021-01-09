module.exports = {
	roots: ["<rootDir>/test"],
	// preset: 'ts-jest',
	// testEnvironment: 'node',
	transform: {"^.+\\.tsx?$": "ts-jest"},
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
