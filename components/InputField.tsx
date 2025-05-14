import React, {ForwardedRef, forwardRef} from "react";
import {Text, TextInput, TextInputProps, View} from "react-native";
import {colors} from "@/constants";

interface InputFieldProps extends TextInputProps {
    label?: string,
    variant?: "filled" | "standard" | "outlined",
    errorMessage?: string
}

function InputField({
                        label,
                        variant = "filled",
                        errorMessage,
                        ...props
                    }: InputFieldProps, ref: ForwardedRef<TextInput>) {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View
                style={[
                    styles.container,
                    styles[variant],
                    Boolean(errorMessage) && {borderColor: colors.RED_500},
                    props.multiline && styles.multiline,
                ]}>
                <TextInput
                    ref={ref}
                    placeholderTextColor={colors.GRAY_500}
                    style={styles.input}
                    autoCapitalize={"none"}
                    spellCheck={false}
                    autoCorrect={false}
                    {...props}
                />
            </View>
            {Boolean(errorMessage) && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
    );
}

const styles = {
    container: {
        height: 44,
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    label: {
        fontSize: 12,
        color: colors.GRAY_700,
        marginBottom: 5,
    },
    filled: {
        backgroundColor: colors.GRAY_100,
    },
    standard: {},
    outlined: {},
    input: {
        fontSize: 16,
        padding: 0,
        flex: 1,
    },
    errorMessage: {
        fontSize: 12,
        marginTop: 5,
        color: colors.RED_500,
    },
    multiline: {
        alignItems: "flex-start",
        paddingVertical: 10,
        height: 500,
    },
}

export default forwardRef(InputField);