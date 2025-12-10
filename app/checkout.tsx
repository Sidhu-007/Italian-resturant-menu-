import { View, Text, TextInput, Pressable, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function CheckoutScreen() {
    const router = useRouter();
    const { total, clearCart } = useCart();

    // Form State
    const [address, setAddress] = useState({ street: '', city: '', zip: '' });
    const [card, setCard] = useState({ number: '', expiry: '', cvv: '' });
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        if (!address.street || !address.city || !card.number || !card.expiry || !card.cvv) {
            Alert.alert('Missing Details', 'Please fill in all address and payment information.');
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            Alert.alert(
                'Payment Successful! 🎉',
                `Your order of $${total} has been confirmed.\n\nShipping to:\n${address.street}, ${address.city}`,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            clearCart();
                            router.dismissAll(); // Go back to home
                            router.replace('/');
                        }
                    }
                ]
            );
        }, 2000);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <View className="px-5 py-4 border-b border-gray-100 bg-white">
                    <View className="flex-row items-center">
                        <Pressable onPress={() => router.back()} className="p-2 -ml-2">
                            <Text className="text-2xl">←</Text>
                        </Pressable>
                        <Text className="text-xl font-bold ml-2">Checkout</Text>
                    </View>
                </View>

                <ScrollView className="flex-1 p-5">

                    {/* Shipping Address */}
                    <View className="mb-8">
                        <Text className="text-lg font-bold text-gray-800 mb-4">📍 Delivery Address</Text>
                        <View className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
                            <View>
                                <Text className="text-gray-500 text-sm mb-1 ml-1">Street Address</Text>
                                <TextInput
                                    className="bg-gray-50 p-4 rounded-xl text-gray-800"
                                    placeholder="123 Pizza Lane"
                                    value={address.street}
                                    onChangeText={(text) => setAddress({ ...address, street: text })}
                                />
                            </View>
                            <View className="flex-row space-x-4">
                                <View className="flex-1">
                                    <Text className="text-gray-500 text-sm mb-1 ml-1">City</Text>
                                    <TextInput
                                        className="bg-gray-50 p-4 rounded-xl text-gray-800"
                                        placeholder="Milan"
                                        value={address.city}
                                        onChangeText={(text) => setAddress({ ...address, city: text })}
                                    />
                                </View>
                                <View className="w-1/3">
                                    <Text className="text-gray-500 text-sm mb-1 ml-1">Zip Code</Text>
                                    <TextInput
                                        className="bg-gray-50 p-4 rounded-xl text-gray-800"
                                        placeholder="20121"
                                        keyboardType="numeric"
                                        value={address.zip}
                                        onChangeText={(text) => setAddress({ ...address, zip: text })}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Payment Details */}
                    <View className="mb-8">
                        <Text className="text-lg font-bold text-gray-800 mb-4">💳 Payment Method</Text>
                        <View className="bg-slate-800 p-6 rounded-3xl shadow-lg mb-4">
                            <Text className="text-white/60 text-xs uppercase tracking-widest mb-1">Total Amount</Text>
                            <Text className="text-white text-3xl font-bold mb-6">${total}.00</Text>

                            <View>
                                <Text className="text-white/60 text-xs mb-1 ml-1">Card Number</Text>
                                <TextInput
                                    className="bg-white/10 text-white p-3 rounded-xl mb-4 text-lg font-medium tracking-widest"
                                    placeholder="0000 0000 0000 0000"
                                    placeholderTextColor="#94a3b8"
                                    keyboardType="numeric"
                                    maxLength={19}
                                    value={card.number}
                                    onChangeText={(text) => setCard({ ...card, number: text })}
                                />
                            </View>

                            <View className="flex-row space-x-4">
                                <View className="flex-1">
                                    <Text className="text-white/60 text-xs mb-1 ml-1">Expiry</Text>
                                    <TextInput
                                        className="bg-white/10 text-white p-3 rounded-xl text-center"
                                        placeholder="MM/YY"
                                        placeholderTextColor="#94a3b8"
                                        maxLength={5}
                                        value={card.expiry}
                                        onChangeText={(text) => setCard({ ...card, expiry: text })}
                                    />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-white/60 text-xs mb-1 ml-1">CVC</Text>
                                    <TextInput
                                        className="bg-white/10 text-white p-3 rounded-xl text-center"
                                        placeholder="123"
                                        placeholderTextColor="#94a3b8"
                                        keyboardType="numeric"
                                        maxLength={3}
                                        secureTextEntry
                                        value={card.cvv}
                                        onChangeText={(text) => setCard({ ...card, cvv: text })}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                {/* Footer Button */}
                <View className="p-5 bg-white border-t border-gray-100 shadow-lg">
                    <Pressable
                        onPress={handlePay}
                        disabled={loading}
                        className={`w-full py-4 rounded-2xl active:opacity-90 shadow-lg shadow-orange-200 flex-row justify-center items-center ${loading ? 'bg-gray-400' : 'bg-accent'}`}
                    >
                        {loading ? (
                            <Text className="text-white font-bold text-lg">Processing...</Text>
                        ) : (
                            <Text className="text-white font-bold text-lg">Pay & Place Order</Text>
                        )}
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
