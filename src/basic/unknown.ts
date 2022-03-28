export default function unknownSample() {
    let maybeNum: unknown = 10;
    console.log(`unknown: ${typeof maybeNum}, ${maybeNum}`);
    
    const isFoo = maybeNum === 'foo';
    console.log(`anySample: ${typeof isFoo}, ${isFoo}`);

    if (typeof maybeNum === 'number') {
        const sum = maybeNum + 10;
        console.log(`anySample: ${typeof sum}, ${sum}`);
    }
}