// allow func
export const logMessage = (message: string): void => {
    console.log('func basic sample 1: ', message);
}

//func with name
export function logMessage2(message: string): void {
    console.log('func basic sample 2: ', message);
}

// 関数式
export const logMessage3 = function (message: string): void {
    console.log('func basic sample 3: ', message);
}

// allow省略記法
export const logMessage4 = (message: string): void => console.log('func basic sample 4: ', message);

export const alwaysThrowError = (message: string): never => {
    throw new Error(message);
}

// signature
type logMessage = (message: string) => void;

export const logMessage6: logMessage = (message) => {
    console.log('signature logMessage fnc');
}

type logMessage2 = {(message: string): void;}
export const logMessage7: logMessage2 = (message) => {}
