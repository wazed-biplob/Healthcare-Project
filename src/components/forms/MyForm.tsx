import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const MyForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resolver?: any;
  defaultValues?: Record<string, any>;
}) => {
  const formConfig: any = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default MyForm;
