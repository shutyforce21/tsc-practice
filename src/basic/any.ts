export default function anySample() {
    let name: any = 'asdf';
    console.log(`anySample: ${typeof name}, ${name}`);
    name = 23
    console.log(`anySample: ${typeof name}, ${name}`);
}