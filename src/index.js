// const a: number = 3;
// const b: string = "hello world!";
// const c: boolean = true;
// let done = false;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(c);
// let color = "blue";
// color = "red";
// const red = "#ff0000";
// color = `${red}`;
// console.log(color);
// let list: number[] = [1,2,3];
// console.log(list);
// let x : [string, number];
// x = ["hello", 11234];
// enum Elem1 {
//     red,
//     green,
//     blue
// }
// let e1:Elem1;
// e1 = Elem1.blue
// console.log(e1);
// enum Elem2 {
//     red = 1,
//     geen = 2,
//     blue = 3
// }
// let e2:Elem2 = Elem2.geen;
// console.log(e2);
// 文字列も指定できる
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
//   }
// console.log(Direction);
// enum FileAccess {
//     None,
//     Read = 1 << 1,
//     Write = 1 << 2,
//     ReadWrite = Read | Write,
//     G = "123".length
//   }
// console.log(FileAccess.Read);
// let notSure: any = 4;
// console.log(notSure.toFixed(2)); // OK：このタイミングではnotSureは数値型なので実行できる（ただし、コンパイルチェックはされない）
// notSure = "maybe a string instead";
// notSure = false;
// console.log(notSure);
// let li: any[] = [1, true, "free"];
// li[1] = 100;
// console.log(li);
function concatName(fn) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return fn + rest.join("");
}
var asdf = concatName;
console.log(asdf('a', 's', 'c'));
