import { View, Text, Pressable, Dimensions, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, useAnimatedScrollHandler } from 'react-native-reanimated';
import { MENU_ITEMS } from '../../constants/MenuData';
import { useCart } from '../../context/CartContext';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 400;

export default function ItemDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { addItem } = useCart();

    // Flatten items to find the specific one
    const allItems = Object.values(MENU_ITEMS).flat();
    const item = allItems.find(i => i.id === id);

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            height: IMG_HEIGHT,
            transform: [
                {
                    translateY: interpolate(
                        scrollY.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
                    ),
                },
                {
                    scale: interpolate(scrollY.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
                },
            ],
        } as any;
    });

    if (!item) {
        return <View className="flex-1 justify-center items-center"><Text>Item not found</Text></View>;
    }

    const onAddToCart = () => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image
        });
        router.back();
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />

            <Animated.ScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentInsetAdjustmentBehavior="never"
            >
                <Animated.Image
                    // @ts-ignore
                    sharedTransitionTag={Platform.OS !== 'web' ? `dish-${item.id}` : undefined}
                    source={item.image}
                    className="w-full absolute top-0 left-0"
                    style={imageStyle as any}
                    resizeMode="cover"
                />

                {/* Spacer for Image */}
                <View style={{ height: IMG_HEIGHT - 30 }} />

                <View
                    className="bg-white -mt-10 rounded-t-3xl min-h-screen p-6 shadow-2xl"
                >
                    <View className="w-12 h-1.5 bg-gray-200 rounded-full self-center mb-6" />

                    <View className="flex-row justify-between items-start">
                        <Text className="text-3xl font-extrabold text-gray-900 flex-1 mr-4">{item.name}</Text>
                        <Text className="text-3xl font-bold text-accent">${item.price}</Text>
                    </View>

                    <Text className="text-gray-500 text-lg mt-6 leading-8 font-medium">
                        {item.description}
                    </Text>

                    <View className="mt-8">
                        <Text className="text-lg font-bold text-gray-900 mb-3">Ingredients</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {['Fresh', 'Organic', 'Gluten Free Option'].map((tag) => (
                                <View key={tag} className="bg-surface px-4 py-2 rounded-lg border border-gray-100">
                                    <Text className="text-gray-600 font-medium">{tag}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>

            {/* Bottom Action Bar */}
            <View className="absolute bottom-0 w-full p-5 bg-white border-t border-gray-100 shadow-lg pb-10">
                <Pressable
                    onPress={onAddToCart}
                    className="bg-primary w-full py-4 rounded-2xl flex-row justify-center items-center active:bg-gray-800"
                >
                    <Text className="text-white font-bold text-xl mr-2">Add to Order</Text>
                    <Text className="text-white/60 font-medium text-lg">• ${item.price}</Text>
                </Pressable>
            </View>

            {/* Back Button */}
            <Pressable
                onPress={() => router.back()}
                className="absolute top-12 left-5 bg-white/30 backdrop-blur-md p-3 rounded-full"
            >
                <Text className="text-white font-bold text-lg">←</Text>
            </Pressable>
        </View>
    );
}
