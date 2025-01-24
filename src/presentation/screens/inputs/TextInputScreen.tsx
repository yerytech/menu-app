import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { globalStyles } from "../../../config/theme/theme";
import { Card } from "../../components/ui/Card";
import { useContext, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";
export const TextInputScreen = () => {
  const { top } = useSafeAreaInsets();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { colors } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, marginTop: top }}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
    >
      <ScrollView>
        <CustomView margin>
          <Title
            text="Text Inputs"
            safe
          />

          <Card>
            <TextInput
              cursorColor={colors.text}
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderBlockColor: colors.text,
                  borderColor: colors.text,
                },
              ]}
              placeholder="Enter your name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <TextInput
              cursorColor={colors.text}
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderBlockColor: colors.text,
                  borderColor: colors.text,
                },
              ]}
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <TextInput
              cursorColor={colors.text}
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderBlockColor: colors.text,
                  borderColor: colors.text,
                },
              ]}
              placeholder="Enter your Phone"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{ marginTop: 20 }}>
            <Card>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
              <Text>{JSON.stringify(form, null, 2)}</Text>
            </Card>
          </View>
          <Card style={{ marginTop: 20, marginBottom: 20 }}>
            <TextInput
              style={globalStyles.input}
              placeholder="Something"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>
        <CustomView style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
