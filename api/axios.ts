import axios from "axios";
import {Platform} from "react-native";

const baseUrls = {
    android: "https://192.168.0.29:8080", // ???
    // ios: "https://192.168.0.29:8080",
    ios: "http://localhost:8080/",
};

const axiosInstance = axios.create({
    // baseURL: Platform.OS === "ios" ? "http://localhost:3030" : "http://10.0.2.2:3030",
    baseURL: Platform.OS === "ios" ? baseUrls.ios : baseUrls.android,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export default axiosInstance;