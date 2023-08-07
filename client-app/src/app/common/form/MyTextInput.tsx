import { Text } from "@chakra-ui/react";
import { Field, useField } from "formik";

interface Props {
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
}

export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Field error={meta.touched ? !!meta.error : undefined}>
      <label>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Text color='red'>{meta.error}</Text>
      ) : null}
    </Field>
  )
}