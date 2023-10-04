module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            lib: './lib',
            test: './test',
          }
        }
      ],
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: "./.tamagui",
          logTimings: true,
        }
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['TAMAGUI_TARGET'],
        }
      ],
      'react-native-reanimated/plugin',
      'expo-router/babel'
    ],
  };
};
