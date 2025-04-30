import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";

function PasswordInput() {
    const {control} = useFormContext();

    return (
        <Controller
            name={"password"}
            render={({field: {value, onChange}}) => (
                <InputField
                    label={"비밀번호"}
                    placeholder={"비밀번호를 입력해주세요."}
                    value={value}
                    onChangeText={onChange}
                />
            )}
            control={control}
        />
    );
}

export default PasswordInput;