const global = (name, value) => {
    eval(`var ${name} = '${value}'`);
    console.log(value);
};

global('name', 'John');

const globalVariable = (name, value) => {
    globalThis[name] = value;
    console.log(value);
};

globalVariable('name', 'John');