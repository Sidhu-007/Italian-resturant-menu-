
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
    const { items, removeItem, total, clearCart } = useCart();
    const router = useRouter();



    if (items.length === 0) {
        return (
            <View className="flex-1 justify-center items-center bg-white">
                <Text className="text-2xl font-bold text-gray-400">Your cart is empty 🍝</Text>
                <Pressable onPress={() => router.back()} className="mt-4">
                    <Text className="text-accent text-lg">Go back to menu</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => (
                    <View className="flex-row items-center mb-6 bg-surface p-3 rounded-2xl">
                        <Image source={item.image} className="w-20 h-20 rounded-xl bg-gray-200" />
                        <View className="flex-1 ml-4">
                            <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                            <Text className="text-gray-500">x{item.quantity}</Text>
                            <Text className="text-accent font-bold mt-1">${item.price * item.quantity}</Text>
                        </View>
                        <Pressable onPress={() => removeItem(item.id)} className="p-2 bg-red-100 rounded-full">
                            <Text className="text-red-500 font-bold">✕</Text>
                        </Pressable>
                    </View>
                )}
            />
            <View className="p-6 border-t border-gray-100 bg-white shadow-lg">
                <View className="flex-row justify-between mb-6">
                    <Text className="text-xl text-gray-500">Total</Text>
                    <Text className="text-3xl font-bold text-gray-900">${total}</Text>
                </View>
                <Pressable
                    onPress={() => {
                        router.dismiss();
                        router.push('/checkout');
                    }}
                    className="w-full bg-accent py-4 rounded-2xl active:opacity-90 shadow-lg shadow-orange-200"
                >
                    <Text className="text-white text-center font-bold text-lg">Proceed to Checkout</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
