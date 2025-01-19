import { Text, View } from "react-native"
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props{
  text: string;
  save?: boolean;
  white?: boolean;
}


export const Title = ({ text, save=false, white=false }: Props) => {
  const { top }= useSafeAreaInsets();
  return (
    <Text style={{
      ...globalStyles.title,
      marginTop: save ? top : 0,
      marginBottom: 10,
    color: white ? 'white' : colors.text
    }}>{ text}</Text>
  )
}

