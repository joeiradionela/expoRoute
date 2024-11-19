import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import registerStyles from "../styles/registerStyles"; 

export default function RegisterScreen() {
  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.logoContainer}>
        <Image source={require("../assets/reg.png")} style={registerStyles.logo} />
        <Text style={registerStyles.title}>Let's Get Started</Text>
        <Text style={registerStyles.subtitle}>Create an account to get all features</Text>
      </View>
      
      {/* Name TextInput */}
      <TextInput
        textContentType="name"
        label="Enter Name"
        mode="flat"
        placeholder="Enter Name"
        style={{ ...registerStyles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
        left={<TextInput.Icon icon="account" size={18} />}
      />

      {/* Email TextInput */}
      <TextInput
        textContentType="emailAddress"
        label="Create Email"
        mode="flat"
        placeholder="Enter Email"
        style={{ ...registerStyles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
        left={<TextInput.Icon icon="email" size={18} />}
      />
      
      {/* Password TextInput */}
      <TextInput
        label="Create Password"
        mode="flat"
        placeholder="Enter Password"
        style={{ ...registerStyles.input, backgroundColor: 'transparent', marginHorizontal: 30 }}
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

      {/* Register Button */}
      <Button onPress={() => console.log("Registering...")} mode="contained" style={registerStyles.button}>
        Continue
      </Button>

      <Text>
        By clicking 'Continue', you agree to our
        <Text style={registerStyles.link}> Terms & Conditions. </Text>
      </Text>

      {/* Footer for Login Link */}
      <View style={registerStyles.footer}>
        <Text style={registerStyles.footerText}>
          Already have an account?{" "}
          <Text
            style={registerStyles.loginLink}
            onPress={() => router.push("/")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
