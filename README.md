# Typescript

### dtlog

```
console.log('$1 => ', $1);
```

```
```



### dtapc

```
const apiPost${1/(.*)/${1:/capitalize}/} = async (data: any) => {
    const url = MsUrl.${2} + /${3};
    const body = { ...data };
    const res = await AppHttp.Post(url, body);
    return res;
};
```

### dtagc

```
const apiGet${1/(.*)/${1:/capitalize}/} = async (data: any) => {
    const url = MsUrl.${2} + /${3};
    const params = { ...data };
    const res = await AppHttp.Get(url, params);
    return res;
};
```

### dtadc

```
const apiDelete${1/(.*)/${1:/capitalize}/} = async (data: any) => {
    const url = MsUrl.${2} + /${3};
    const params = { ...data };
    const res = await AppHttp.Delete(url, params);
    return res;
};
```

### dtoaf

```
export const is${1/(.*)/${1:/capitalize}/}Loading = signal<boolean>(false);
export const on${1/(.*)/${1:/capitalize}/} = async (data: any) => {
    try {
        is${1/(.*)/${1:/capitalize}/}Loading.value=true;
        console.log(\on${1/(.*)/${1:/capitalize}/} data :: \, data);
        const url = MsUrl. + ApiUrl. ;
        const params = { ...data };
        const res = await AppHttp.Post(url, params);
        console.log(\on${1/(.*)/${1:/capitalize}/} resp :: \, resp);
        return resp;
    } catch (error: any) {
        console.error(\on${1/(.*)/${1:/capitalize}/} error :: \, error);
        const messsage = error?.error?.message || ConstMessages.WENT_WRONG;
        ShowToast(messsage, \error\);
    } finally {
       is${1/(.*)/${1:/capitalize}/}Loading.value=false;
    }
};
```




# Typescriptreact

### dxlog

```
console.log('$1 => ', $1);
```


### dxrhf

```
const $1Rule = ${1/(.*)/${1:/capitalize}Validation;
const [$1, set${1/(.*)/${1:/capitalize}/}] = React.useState<${1/(.*)/${1:/capitalize}/}Type>({} as ${1/(.*)/${1:/capitalize}/}Type);
const { handleSubmit, control, reset, formState: { errors } } = useForm<${1/(.*)/${1:/capitalize}/}Type>({});
React.useEffect(() => {
    onDefault${1/(.*)/${1:/capitalize}/}();
    onReset${1/(.*)/${1:/capitalize}/}();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
const onDefault${1/(.*)/${1:/capitalize}/} = () => {
    set${1/(.*)/${1:/capitalize}/}({} as ${1/(.*)/${1:/capitalize}/}Type);
};
const onReset${1/(.*)/${1:/capitalize}/} = () => {
    reset({ ...$1 });
};
const onSubmit${1/(.*)/${1:/capitalize}/} = async (data: ${1/(.*)/${1:/capitalize}/}Type) => {
    console.log('data $1 : ', data);
    RouterChange(AppRouter.INDEX);
};
const onCancel= () => {
    RouterChange(AppRouter.INDEX);
};
const ComponentSubmit = () => (
    <TypeButton name="SendHorizontal" label="Submit" isLoading="isSubmitLoading.value" onPress={handleSubmit(onSubmit${1/(.*)/${1:/capitalize}/})} />
);
const ComponentCancel = () => (
    <TypeButton name="CircleX" label="Cancel" action="negative" onPress={onCancel} />
);
```

### dxtip

```
    const Component${1/(.*)/${1:/capitalize}/} = () => {
        return (
            <TypeInput
                required = {true}
                control = {control}
                name = {$2.$1}
                label = {"${1/(.*)/${1:/capitalize}/}"}
                value = {$2.$1 || ''}
                rules = {$2Rule.$1}
                error = {error}
                disabled = {false}
            />
        );
    };
```

### dxtsl

```
    const Component${1/(.*)/${1:/capitalize}/} = () => {
        const [$1List, set${1/(.*)/${1:/capitalize}List] = React.useState<TypeOptions[]>([]);
        const $1Load = async () => {
            const resp = await on${1/(.*)/${1:/capitalize}/}Load(`\load\$1`);
            set${1/(.*)/${1:/capitalize}/}List(resp || []);
        };
        return (
            <TypeSelect
                required = {true}
                control = {control}
                name = {$2.$1}
                label = {"${1/(.*)/${1:/capitalize}/}"}
                value = {$2.$1 || ''}
                rules = {$2$Rule.$1}
                error = {error}
                disabled = {false}
                multiSelect = {false}
                options = {$1List}
            />
        );
    };
```

### dxtcb

```
    const Component${1/(.*)/${1:/capitalize}/} = () => {
        return (
            <TypeCheckbox
                control = {control}
                name = {$2.$1}
                label = {"${1/(.*)/${1:/capitalize}/}"}
                value = {$2.$1 || ''}
                rules = {$1Rule.$1}
                error = {error}
                disabled = {false}
            />
        );
    };
```
