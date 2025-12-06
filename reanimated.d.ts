import 'react-native-reanimated';
import { ImageProps, ViewProps, TextProps } from 'react-native';

declare module 'react-native-reanimated' {
    interface AnimateProps<T> extends T {
        sharedTransitionTag?: string;
    }
}
