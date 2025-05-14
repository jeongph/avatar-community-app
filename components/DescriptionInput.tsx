import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import InputField from "@/components/InputField";

function DescriptionInput() {
    const {control, setFocus} = useFormContext();

    return (
        <Controller
            name={"description"}
            control={control}
            rules={{
                validate: (data: string) => {
                    if (data.length <= 0) {
                        return "내용을 입력해주세요.";
                    }
                }
            }}
            render={({field: {ref, value, onChange}, fieldState: {error}}) => (
                <InputField
                    ref={ref}
                    label={"내용"}
                    placeholder={"내용을 입력해주세요."}
                    returnKeyType={"next"}
                    value={value}
                    onChangeText={onChange}
                    errorMessage={error?.message}
                    multiline
                />
            )}
        />
    );
}

export default DescriptionInput;