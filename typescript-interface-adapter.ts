interface Mappings<T>{
    convert: keyof T,
    apply?: (parameter:any) =>any
}

interface FormValueConverter<T extends object>{
    convert<K extends object>(
        value:object, 
        mappings:{[key in keyof K]: Mappings<T>}
    ):T
}

export class ConcreteFormValueConverter<T extends object> implements FormValueConverter<T>{
    convert<K extends object>(
        formObject: T, 
        mappings:{[key in keyof K]: Mappings<T>}
    ) : T {
        let mappedObject:T = {} as T;
        for (const [mapkey, value] of Object.entries(mappings)) {
            if((value as Mappings<T>).apply){
                mappedObject[(value as Mappings<T>).convert] = (value as Mappings<T>).apply!(formObject[mapkey as keyof T]);
            }else{
                mappedObject[(value as Mappings<T>).convert] = formObject[mapkey as keyof T];
            }
        }
        return mappedObject;
    }
}