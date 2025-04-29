import colors from "@/constants/colors";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Error", error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace("/(panel)/profile/page");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          Dev
          <Text style={{ color: colors.green }}> App</Text>
        </Text>
        <Text style={styles.slogan}>O futuro da programação</Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Digite seu email..."
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
        </View>

        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>
            {loading ? "Carregando..." : "Acessar"}
          </Text>
        </Pressable>

        <Link href={"/(auth)/singup/page"} style={styles.link}>
          <Text>
            Ainda não possui uma conta?{" "}
            <Text style={{ color: "#236abc" }}> Cadastre-se</Text>
          </Text>
        </Link>
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
  link: {
    marginBlockStart: 16,
    textAlign: "center",
  },
});
