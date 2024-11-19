// ForgotPasswordScreen.tsx (TypeScript) or ForgotPasswordScreen.js (JavaScript)
import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import forgotPasswordStyles from "../styles/forgotPasswordStyles"; 

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={forgotPasswordStyles.container}>
      <View style={forgotPasswordStyles.logoContainer}>
        <Image source={require("../assets/password.png")} style={forgotPasswordStyles.logo} />
        <Text style={forgotPasswordStyles.title}>Forgot Password</Text>
        <Text style={forgotPasswordStyles.subtitle}>Create a strong password</Text>
      </View>
      
      {/* New Password TextInput */}
      <TextInput
        label="New Password"
        mode="flat"
        placeholder="Enter New Password"
        style={{ ...forgotPasswordStyles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
        left={<TextInput.Icon icon="lock" size={18} />}
        right={
          <TextInput.Icon
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"}
            size={18}
          />
        }
        secureTextEntry={!togglePassword}
      />

      {/* Confirm Password TextInput */}
      <TextInput
        label="Confirm Password"
        mode="flat"
        placeholder="Confirm New Password"
        style={{ ...forgotPasswordStyles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
        left={<TextInput.Icon icon="lock-check" size={18} />}
        right={
          <TextInput.Icon
            onPress={() => setTogglePassword(!togglePassword)}
            icon={togglePassword ? "eye" : "eye-off"}
            size={18}
          />
        }
        secureTextEntry={!togglePassword}
      />

      {/* Reset Password Button */}
      <Button onPress={() => console.log("Password reset")} mode="contained" style={forgotPasswordStyles.button}>
        Reset Password
      </Button>

      {/* Footer for Login Link */}
      <View style={forgotPasswordStyles.footer}>
        <Text style={forgotPasswordStyles.footerText}>
          Remember your password?{" "}
          <Text
            style={forgotPasswordStyles.loginLink}
            onPress={() => router.push("/")}
          >
            Login here
          </Text>
        </Text>
      </View>
    </View>
  );
}
