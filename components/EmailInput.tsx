import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";

function EmailInput() {
    const {control} = useFormContext();

    return (
        <Controller
            name={"email"}
            render={({field: {value, onChange}}) => (
                <InputField
                    label={"이메일"}
                    placeholder={"이메일을 입력해주세요."}
                    value={value}
                    onChangeText={onChange}
                />
            )}
            control={control}
        />
    );
}

export default EmailInput;