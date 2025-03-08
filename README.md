# Typescript

### dtlog

```
console.log('$1 => ', $1);
```

```
```

### dtoaf

```
export const on${1/(.*)/${1:/capitalize}/} = async (data: any) => {
    try {
        ShowLoader(true);
        console.log(\on${1/(.*)/${1:/capitalize}/} data :: \, data);
        const resp = await apiPost${1/(.*)/${1:/capitalize}/}(data);
        console.log(\on${1/(.*)/${1:/capitalize}/} resp :: \, resp);
        return resp;
    } catch (error: any) {
        console.error(\on${1/(.*)/${1:/capitalize}/} error :: \, error);
        const messsage = error?.error?.message || ConstMessages.WENT_WRONG;
        ShowToast(messsage, \error\);
    } finally {
        ShowLoader(false);
    }
};
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

# Typescriptreact

### dxlog

```
console.log('$1 => ', $1);
```
