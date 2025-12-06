import { Stack } from 'expo-router';
import "../global.css";
import { CartProvider } from '../context/CartContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <CartProvider>
                <Stack>
                    <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
                    <Stack.Screen name="menu/[category]" options={{ title: 'Menu', headerShown: false }} />
                    <Stack.Screen name="item/[id]" options={{ title: 'Details', presentation: 'modal', headerShown: false }} />
                    <Stack.Screen name="cart" options={{ title: 'Your Order', presentation: 'modal' }} />
                </Stack>
            </CartProvider>
        </SafeAreaProvider>
    );
}
