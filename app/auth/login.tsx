import {StyleSheet, View} from "react-native";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import {FormProvider, useForm} from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import useAuth from "@/hooks/queries/useAuth";

type FormValues = {
    email: string;
    password: string;
}

export default function LoginScreen() {
    const {loginMutation} = useAuth();
    const loginForm = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onsubmit = (formValues: FormValues) => {
        console.log("Login Screen onsubmit:", formValues);

        const {email, password} = formValues;
        loginMutation.mutate({email, password})
    }

    return (
        <FormProvider {...loginForm}>
            <View style={styles.container}>
                <EmailInput/>
                <PasswordInput/>
            </View>
            <FixedBottomCTA label={"로그인 하기"} onPress={loginForm.handleSubmit(onsubmit)}/>
        </FormProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        gap: 16,
    },
});