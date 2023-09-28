export default {
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>'],
  preset: 'jest-expo',
  rootDir: '..',
  roots: ['<rootDir>'],
  setupFiles: [
    '<rootDir>/.jest/setupFiles/mockAsyncStorage.ts'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/.jest/jestSetupAfterEnv.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
}
