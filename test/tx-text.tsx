    const [auth, setAuth] = useState<AuthType>({} as AuthType);
    const { handleSubmit, control, reset, formState: { errors } } = useForm<AuthType>({} as AuthType);
    const onDefaultAuth = () => {
        setAuth({} as AuthType);
    };
    const onResetAuth = () => {
        reset({ ...auth });
    };
    const onSubmitAuth = async (data: AuthType) => {
        console.log("data auth : ", data);
        RouterChange(AppRouter.INDEX);
    };
    const onCancel= () => {
        RouterChange(AppRouter.INDEX);
    };
    const ComponentSubmit = () => (
        <TypeButton name="Send" label="Submit" onPress={handleSubmit(onSubmitAuth)} />
    );
    const ComponentCancel = () => (
        <TypeButton name="CircleX" label="Cancel" action="negative" onPress={onCancel} />
    );