import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "indigo",
    marginTop: 0,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    marginBottom: 5,
  },
  button: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 0,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
  },
  link: {
    color: "indigo",
  },
  loginLink: {
    color: "indigo",
    fontWeight: "bold",
  },
});

export default registerStyles;
