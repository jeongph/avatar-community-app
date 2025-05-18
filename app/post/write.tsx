import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "@/components/TitleInput";
import DescriptionInput from "@/components/DescriptionInput";
import {StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

type FormValues = {
    title: string;
    description: string;
}

export default function PostWriteScreen() {
    const postForm = useForm<FormValues>({
        defaultValues: {
            title: "",
            description: "",
        },
    });

    return (
        <FormProvider {...postForm}>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <TitleInput/>
                <DescriptionInput/>
            </KeyboardAwareScrollView>
        </FormProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        gap: 16,
    },

});