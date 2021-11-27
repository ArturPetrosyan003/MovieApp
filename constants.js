import { Dimensions, Platform } from "react-native";

export const paddingTop = Dimensions.get('window').height * (Platform.OS == 'ios' ? 1 : 2) / 100;
