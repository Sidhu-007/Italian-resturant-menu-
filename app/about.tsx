import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function AboutScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />

            {/* Hero Image */}
            <View className="relative h-96 w-full">
                <Image
                    source={require('../assets/about_hero.png')}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30" />
                <Pressable
                    onPress={() => router.back()}
                    className="absolute top-12 left-5 bg-white/20 backdrop-blur-md p-2 rounded-full"
                >
                    <Text className="text-white text-lg font-bold px-2">← Back</Text>
                </Pressable>
                <View className="absolute bottom-6 left-6">
                    <Text className="text-white/80 font-bold uppercase tracking-widest text-sm mb-1">Our Story</Text>
                    <Text className="text-white text-4xl font-extrabold">Gustoso</Text>
                </View>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Intro Section */}
                <View className="p-6">
                    <Text className="text-2xl font-bold text-gray-800 mb-4">Serving the Nation Since 1945 🇮🇹</Text>
                    <Text className="text-gray-600 text-lg leading-7 mb-6">
                        Founded in 1945, Gustoso began as a small family kitchen in the heart of Rome.
                        Our passion for authentic flavors and traditional recipes has allowed us to share
                        the true taste of Italy with the world.
                    </Text>

                    {/* Key Highlight */}
                    <View className="bg-orange-50 p-6 rounded-2xl mb-8 border border-orange-100">
                        <Text className="text-3xl font-bold text-primary mb-2 text-center">20+</Text>
                        <Text className="text-gray-800 text-center font-bold text-lg">Stores Across Italy</Text>
                        <Text className="text-gray-500 text-center mt-2">
                            From Milan to Sicily, we are proud to serve thousands of happy guests every day.
                        </Text>
                    </View>

                    {/* Address & Contact */}
                    <View className="bg-gray-50 p-6 rounded-2xl mb-6">
                        <Text className="text-xl font-bold text-gray-800 mb-4">Visit Our HQ</Text>

                        <View className="flex-row items-center mb-4">
                            <View className="w-10 h-10 bg-white rounded-full justify-center items-center shadow-sm mr-4">
                                <Text className="text-lg">📍</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-gray-700">Headquarters</Text>
                                <Text className="text-gray-500">Via Roma 1, 20121 Milano MI, Italy</Text>
                            </View>
                        </View>

                        <Pressable onPress={() => Linking.openURL('tel:+390212345678')} className="flex-row items-center">
                            <View className="w-10 h-10 bg-white rounded-full justify-center items-center shadow-sm mr-4">
                                <Text className="text-lg">📞</Text>
                            </View>
                            <View>
                                <Text className="font-bold text-gray-700">Contact Us</Text>
                                <Text className="text-accent">+39 02 1234 5678</Text>
                            </View>
                        </Pressable>
                    </View>

                    {/* Interactive Map Placeholder (Visual only) */}
                    {/* Map Placeholder UI */}
                    <Pressable
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=Via+Roma+1+Milano+Italy')}
                        className="h-48 bg-blue-50 rounded-2xl overflow-hidden justify-center items-center border border-blue-100 active:bg-blue-100"
                    >
                        <View className="items-center">
                            <Text className="text-4xl mb-2">🗺️</Text>
                            <Text className="text-gray-600 font-bold text-lg">Via Roma 1, Milano</Text>
                            <Text className="text-accent font-bold text-sm mt-1">Tap to Open in Maps ↗</Text>
                        </View>
                    </Pressable>
                </View>

                {/* Footer Brand */}
                <View className="items-center mt-4">
                    <Text className="text-gray-300 font-bold text-xl tracking-widest">GUSTOSO</Text>
                </View>
            </ScrollView>
        </View>
    );
}
