import { View, Text, FlatList, Pressable, Platform } from 'react-native';
import { useLocalSearchParams, Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { MENU_ITEMS, CATEGORIES } from '../../constants/MenuData';
import { useCart } from '../../context/CartContext';

export default function MenuScreen() {
    const { category } = useLocalSearchParams();
    const router = useRouter();
    const { items: cartItems } = useCart();

    // Safe cast category to keyof MENU_ITEMS or fallback
    const categoryKey = (typeof category === 'string' ? category : 'starters') as keyof typeof MENU_ITEMS;
    const items = MENU_ITEMS[categoryKey] || [];

    // Find category metadata for the header image/title
    const categoryMeta = CATEGORIES.find(c => c.id === categoryKey);

    const renderItem = ({ item, index }: { item: typeof items[0]; index: number }) => (
        <Animated.View entering={FadeInRight.delay(index * 150).springify()}>
            <Link href={`/item/${item.id}`} asChild>
                <Pressable
                    className="bg-white p-4 mb-4 rounded-2xl flex-row items-center active:scale-98 transition-transform shadow-sm"
                >
                    <Animated.Image
                        // @ts-ignore
                        sharedTransitionTag={Platform.OS !== 'web' ? `dish-${item.id}` : undefined}
                        source={item.image}
                        className="w-24 h-24 rounded-xl bg-gray-100"
                    />
                    <View className="flex-1 ml-4 justify-center">
                        <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                        <Text className="text-gray-500 text-sm line-clamp-2" numberOfLines={2}>{item.description}</Text>
                        <Text className="text-accent font-bold mt-2">${item.price}</Text>
                    </View>
                    <View className="bg-surface p-2 rounded-full">
                        <Text className="text-accent text-xl">＋</Text>
                    </View>
                </Pressable>
            </Link>
        </Animated.View>
    );

    return (
        <View className="flex-1 bg-gray-50">
            {/* Hero Header with Shared Transition */}
            <View className="h-72 relative">
                <Animated.Image
                    // @ts-ignore
                    sharedTransitionTag={Platform.OS !== 'web' ? `category-${categoryKey}` : undefined}
                    source={categoryMeta?.image}
                    className="w-full h-full absolute"
                    resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30" />
                <SafeAreaView className="flex-1 justify-between p-4">
                    <Pressable
                        onPress={() => router.back()}
                        className="bg-white/20 p-2 rounded-full self-start backdrop-blur-md"
                    >
                        <Text className="text-white text-xl px-2">← Back</Text>
                    </Pressable>
                    <View>
                        <Text className="text-5xl font-extrabold text-white">{categoryMeta?.name || 'Menu'}</Text>
                        <Text className="text-white/90 text-lg font-medium">{items.length} Delicious Items</Text>
                    </View>
                </SafeAreaView>
            </View>

            {/* Menu Items List */}
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />

            {/* Floating Cart Button */}
            {cartItems.length > 0 && (
                <Pressable
                    onPress={() => router.push('/cart')}
                    className="absolute bottom-10 right-6 bg-accent px-6 py-4 rounded-full shadow-xl flex-row items-center"
                >
                    <Text className="text-white font-bold text-lg mr-2">View Order</Text>
                    <View className="bg-white px-2 py-0.5 rounded-full">
                        <Text className="text-accent font-bold">{cartItems.length}</Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
}
