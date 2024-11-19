import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import loginStyles from "../styles/loginStyles"; 

export default function LoginScreen() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Image source={require("../assets/avatar.png")} style={loginStyles.logo} />
        <Text style={loginStyles.brandName}>Pet Care Shop</Text>
      </View>

      {/* Email TextInput */}
      <TextInput
        label="Email"
        mode="outlined"
        placeholder="Email"
        style={loginStyles.input}
        left={<TextInput.Icon icon="email" size={18} />}
      />

      {/* Password TextInput */}
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Password"
        style={loginStyles.input}
        left={<TextInput.Icon icon="key" size={18} />}
        right={
          <TextInput.Icon
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"}
            size={18}
          />
        }
        secureTextEntry={!togglePassword}
      />

      {/* Login Button */}
      <Button onPress={() => console.log("login")} mode="contained" style={loginStyles.button}>
        Login
      </Button>

      <View style={loginStyles.textContainer}>
        <Text>Don't have an account yet?</Text>
      </View>

      {/* Register Button */}
      <Button onPress={() => router.push("/register")} mode="contained-tonal" textColor="indigo" style={loginStyles.button}>
        Register Here
      </Button>

      {/* Forgot Password Button */}
      <Button onPress={() => router.push("/forgot-password")} mode="text" textColor="indigo">
        Forgot Password?
      </Button>
    </View>
  );
}
