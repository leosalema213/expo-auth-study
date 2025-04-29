import colors from "@/constants/colors";
import { router } from "expo-router";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </Pressable>

        <Text style={styles.logoText}>
          Dev
          <Text style={{ color: colors.green }}> App</Text>
        </Text>

        <Text style={styles.slogan}>Crie sua conta</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            placeholder="Nome completo..."
            style={styles.input}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Digite seu email..."
            style={styles.input}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.input}
            secureTextEntry
          ></TextInput>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    backgroundColor: colors.zinc,
  },
  header: {
    paddingInlineEnd: 14,
    paddingInlineStart: 14,
  },
  logoText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBlockEnd: 8,
  },
  slogan: {
    fontSize: 34,
    marginBlockEnd: 34,
    color: colors.white,
  },
  form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBlockStart: 24,
    paddingInlineStart: 14,
    paddingInlineEnd: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBlockEnd: 16,
    paddingHorizontal: 8,
    paddingBlockStart: 14,
    paddingBlockEnd: 14,
  },
  label: {
    color: colors.zinc,
    marginBlockEnd: 4,
  },
  button: {
    backgroundColor: colors.green,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingBlockStart: 14,
    paddingBlockEnd: 14,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: colors.zinc,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,.55)",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 8,
    marginBlockEnd: 8,
  },
});
