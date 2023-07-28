
export default {
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules', './src'],
    setupFilesAfterEnv: [
        "<rootDir>src/setupTest.ts"
    ],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    transformIgnorePatterns: [
       "\\\\node_modules\\\\",
       "\\.pnp\\.[^\\\\]+$"
     ],

}