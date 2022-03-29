export default function tumpleSample() {
    // // 一般的なタプ
    // let res: [number, string] = [200, 'ok'];
    // console.log(res);
    // // 可変長引数
    // const gf: [string, ...string[]] = ["kana", "miku", "keiko"]
    // gf.push("shuty");
    // console.log(gf);

    const mutableNUm: number[] = [1,2,3]
    mutableNUm[3] = 10;
    console.log(mutableNUm);

    const commands: readonly string[] = ['git add', 'git commmit'];
    const imu1: ReadonlyArray<string> = ["a", "b"];
    const imu2: Readonly<string[]> = ["a", "b"];

    console.log(mutableNUm, imu1, imu2);
}