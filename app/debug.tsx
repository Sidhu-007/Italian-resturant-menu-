import { View, Text } from 'react-native';

export default function DebugScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Debug Screen Working!</Text>
            <Text>If you can see this, the Router is fine.</Text>
        </View>
    );
}
