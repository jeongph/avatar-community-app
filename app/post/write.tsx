import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "@/components/TitleInput";
import DescriptionInput from "@/components/DescriptionInput";
import {StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import useCreatePost from "@/hooks/queries/useCreatePost";
import {useEffect} from "react";
import {useNavigation} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {ImageUri} from "@/types";

type FormValues = {
    title: string;
    description: string;
    imageUris: ImageUri[];
}

export default function PostWriteScreen() {
    const navigation = useNavigation();
    const createPost = useCreatePost();

    const postForm = useForm<FormValues>({
        defaultValues: {
            title: "",
            description: "",
            imageUris: [],
        },
    });

    const onSubmit = (formValues: FormValues) => {
        createPost.mutate(formValues);
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <CustomButton
                    label={"저장"}
                    size={"medium"}
                    variant={"standard"}
                    onPress={postForm.handleSubmit(onSubmit)}
                />
            ),
        });
    }, []);

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