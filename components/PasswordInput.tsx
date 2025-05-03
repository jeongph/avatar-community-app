import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";
import {TextInputProps} from "react-native";

interface Props {
    submitBehavior?: TextInputProps["submitBehavior"];
}

function PasswordInput({submitBehavior = "blurAndSubmit"}: Props) {
    const {control, setFocus} = useFormContext();

    return (
        <Controller
            name={"password"}
            control={control}
            rules={{
                validate: (data: string) => {
                    if (data.length === 0) {
                        return "비밀번호를 입력해주세요.";
                    }
                    if (data.length < 8) {
                        return "비밀번호는 8자 이상이어야 합니다.";
                    }
                    // if (!/[A-Z]/.test(data)) {
                    //     return "비밀번호에는 대문자가 포함되어야 합니다.";
                    // }
                    // if (!/[a-z]/.test(data)) {
                    //     return "비밀번호에는 소문자가 포함되어야 합니다.";
                    // }
                    // if (!/[0-9]/.test(data)) {
                    //     return "비밀번호에는 숫자가 포함되어야 합니다.";
                    // }
                }
            }}
            render={({field: {ref, value, onChange}, fieldState: {error}}) => (
                <InputField
                    ref={ref}
                    label={"비밀번호"}
                    placeholder={"비밀번호를 입력해주세요."}
                    textContentType={"oneTimeCode"}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                    errorMessage={error?.message}
                    onSubmitEditing={() => setFocus("passwordConfirm")}
                    submitBehavior={submitBehavior}
                />
            )}
        />
    );
}

export default PasswordInput;