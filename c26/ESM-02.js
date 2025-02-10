import { name } from "./ESM-01.js";
import { name as name2 } from "./ESM-01.js";
import { obj } from "./ESM-01.js";

// 单例性
console.log(name === name2);
// true

console.log("name", name);
console.log("obj", obj);

// 导出值的本质

// 不能修改基本类型, 报错：ESM-02.js:15 Uncaught TypeError: Assignment to constant variable.
// name = "123";

// 能修改引用类型中的属性
obj.age = 28;
console.log("obj", obj);
