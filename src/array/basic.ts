export default function arraySample() {
    // simple
    const cols: string[] = ["red", "green"];
    cols.push("yellow");
    console.log(cols);

    const even: Array<number> = [2,4,6]
    even.push(12)
    console.log(even);

    const ids: (string | number)[] = ["asdf", 123]
    ids.push(1234)
    ids.push("asdf")
    console.log(ids);

    const generateArray = () => {
        const _someArray = [];
        _someArray.push(123)
        _someArray.push("asfd")
        return _someArray
    }

    const someArray = generateArray()
    someArray.push(345)
    console.log(someArray);

}