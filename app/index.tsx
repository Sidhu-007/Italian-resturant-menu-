import { View, Text, SafeAreaView, FlatList, Pressable, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CATEGORIES } from '../constants/MenuData'; // Import authentic data
import { useCart } from '../context/CartContext';

export default function HomeScreen() {
    const { items } = useCart();
    const router = useRouter();

    const renderCategory = ({ item, index }: { item: { id: string; name: string; image: any }; index: number }) => (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify()}>
            <Link href={`/menu/${item.id}`} asChild>
                <Pressable
                    className="mb-6 bg-white rounded-3xl overflow-hidden active:scale-95 transition-transform shadow-sm"
                >
                    <Animated.Image
                        // @ts-ignore
                        sharedTransitionTag={Platform.OS !== 'web' ? `category-${item.id}` : undefined}
                        source={item.image}
                        className="w-full h-56"
                        resizeMode="cover"
                    />
                    <View className="absolute bottom-0 w-full bg-black/40 p-6 backdrop-blur-md">
                        <Text className="text-3xl font-bold text-white tracking-wider">{item.name}</Text>
                        <Text className="text-white/80 font-medium">View Selection →</Text>
                    </View>
                </Pressable>
            </Link>
        </Animated.View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-1 px-5 pt-4">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-8 mt-2">
                    <View>
                        <Text className="text-xl text-accent font-bold">Benvenuti! 👋</Text>
                        <Text className="text-4xl font-extrabold text-primary">Gustoso</Text>
                        <Text className="text-base text-gray-500 font-medium">Italian Fine Dining 🇮🇹</Text>
                        <Pressable onPress={() => router.push('/about')} className="mt-2 flex-row items-center">
                            <Text className="text-accent font-bold">About Us</Text>
                            <Text className="text-xs ml-1 text-accent">➔</Text>
                        </Pressable>
                    </View>
                    <Pressable
                        onPress={() => router.push('/cart')}
                        className="bg-white p-3 rounded-full shadow-sm relative"
                    >
                        <Text className="text-2xl">🛒</Text>
                        {items.length > 0 && (
                            <View className="absolute -top-1 -right-1 bg-accent w-6 h-6 rounded-full justify-center items-center border-2 border-white">
                                <Text className="text-white text-xs font-bold">{items.length}</Text>
                            </View>
                        )}
                    </Pressable>
                </View>

                {/* Categories List */}
                <FlatList
                    data={CATEGORIES}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        </SafeAreaView>
    );
}
