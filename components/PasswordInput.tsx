import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";

function PasswordInput() {
    const {control} = useFormContext();

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
            render={({field: {value, onChange}, fieldState: {error}}) => (
                <InputField
                    label={"비밀번호"}
                    placeholder={"비밀번호를 입력해주세요."}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                    errorMessage={error?.message}
                />
            )}
        />
    );
}

export default PasswordInput;