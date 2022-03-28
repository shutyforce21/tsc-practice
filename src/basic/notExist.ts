export default function notExistSample() {

    let name = null;
    console.log(typeof name, name);
    name = 'shuty';
    if (name === null) {
        console.log(`not Exist: name is null..`);
    } else {
        console.log(`not Exist: name is ${name}`);
    }

    let age = undefined;
    console.log(`notExsits: `, typeof age, age);
    age = 20;
    if (age === undefined) {
        console.log(`not Exist: age is null..`);
    } else {
        console.log(`not Exist: age is ${age}`);
    }
}