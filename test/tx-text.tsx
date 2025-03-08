    const [otpVefify, setOtpVefify] = React.useState<OtpVefifyType>({} as OtpVefifyType);
    const { handleSubmit, control, reset, formState: { errors } } = useForm<OtpVefifyType>({});
    React.useEffect(() => {
        onDefaultOtpVefify();
        onResetOtpVefify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onDefaultOtpVefify = () => {
        setOtpVefify({} as OtpVefifyType);
    };
    const onResetOtpVefify = () => {
        reset({ ...otpVefify });
    };
    const onSubmitOtpVefify = async (data: OtpVefifyType) => {
        console.log('data otpVefify : ', data);
        RouterChange(AppRouter.INDEX);
    };
    const onCancel= () => {
        RouterChange(AppRouter.INDEX);
    };
    const ComponentSubmit = () => (
        <TypeButton name="SendHorizontal" label="Submit" onPress={handleSubmit(onSubmitOtpVefify)} />
    );
    const ComponentCancel = () => (
        <TypeButton name="CircleX" label="Cancel" action="negative" onPress={onCancel} />
    );