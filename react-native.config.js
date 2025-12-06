module.exports = {
    dependencies: {
        'react-native-worklets-core': {
            platforms: {
                android: null, // Disable Android autolinking to avoid collision with 'react-native-worklets' alias
                ios: null,     // Disable iOS autolinking for consistency
            },
        },
    },
};
