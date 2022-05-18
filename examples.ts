import { InterfaceAdapter, IInterfaceAdapter } from "./typescript-interface-adapter";

interface IValueToBeConverted{
    a: string,
    b: string,
    c: number
}

interface InterfaceToConvert{
    x: string,
    y: string,
    q: number
}

let valueToBeConverted:IValueToBeConverted = {
    a: "value a",
    b: "value b",
    c: 3
};

let adapter: IInterfaceAdapter = new InterfaceAdapter();
const convertedValue = adapter.convert<InterfaceToConvert, IValueToBeConverted>(
    valueToBeConverted,
    {
        "a": {convert:"y"},
        "b": {convert:"x"},
        "c": {convert: "q"}
    }
)

console.log(convertedValue);