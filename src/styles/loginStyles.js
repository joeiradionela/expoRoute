import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "indigo",
    marginTop: 10,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 0,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default loginStyles;
