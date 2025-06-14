import {StyleSheet, View} from "react-native";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import {FormProvider, useForm} from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import PasswordConfirmInput from "@/components/PasswordConfirmInput";
import useAuth from "@/hooks/queries/useAuth";

type FormValues = {
    email: string;
    password: string;
    passwordConfirm: string;
}

export default function SignupScreen() {
    const {signupMutation} = useAuth();
    const signupForm = useForm<FormValues>({
        defaultValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
    });

    const onsubmit = (formValues: FormValues) => {
        // console.log("formValues", formValues);
        const {email, password} = formValues;
        signupMutation.mutate({
            email, // email: email, -> 키와 값이 같으면 생략 가능
            password,
        });
    }

    return (
        <FormProvider {...signupForm}>
            <View style={styles.container}>
                <EmailInput/>
                <PasswordInput submitBehavior={"submit"}/>
                <PasswordConfirmInput/>
            </View>
            <FixedBottomCTA label={"회원가입하기"} onPress={signupForm.handleSubmit(onsubmit)}/>
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