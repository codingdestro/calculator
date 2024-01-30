import { List, Vertex, isOperator } from "./utils";

class Calc {
  public str: string;
  public list: List;
  public stack: any[];
  public val: number;
  constructor() {
    this.str = "";
    this.list = new List();
    this.stack = [];
    this.val = 0;
  }

  split() {
    let x = "";
    let Fstack = [];
    let Sstack = [];
    this.list = new List();

    for (let i = 0; i < this.str.length; i++) {
      let char = this.str[i];
      if (char == "") continue;
      if (isOperator(char)) {
        if (
          char === "-" &&
          x === "" &&
          this.list.length === 0 &&
          Sstack.length === 0 &&
          Fstack.length === 0
        ) {
          x += char;
          continue;
        }
        let val = parseFloat(x);

        this.list.addVertex(val);
        let Vertex = this.list.addVertex(char);
        if (char == "+" || char == "-") {
          Sstack.push(Vertex);
        } else {
          Fstack.push(Vertex);
        }
        x = "";
      } else {
        if (i == this.str.length - 1) {
          x += char;
          let val = parseFloat(x);
          this.list.addVertex(val.toString());
        }
        x += char;
      }
    }
    this.stack = [...Fstack, ...Sstack];
  }

  do(str: string) {
    this.str = str;
    this.split();
    let vertex = null;
    const calculate = () => {
      while (this.stack.length > 0) {
        vertex = this.stack.shift();

        this.val = doMath(vertex.prev?.val, vertex.next.val, vertex.val);

        let newVertex = new Vertex(this.val);

        if (vertex.next.next !== null) {
          let right = vertex.next.next;
          right.prev = newVertex;
          newVertex.next = right;
        }
        if (vertex.prev.prev !== null) {
          let left = vertex.prev.prev;
          left.next = newVertex;
          newVertex.prev = left;
        }
      }
      return this.val.toString();
    };

    let promise: Promise<string> = new Promise((resolve, reject) => {
      let val = calculate();
      if (val) {
        resolve(val);
      } else {
        reject("0");
      }
    });

    return promise;
  }
}
export default Calc;
const doMath = (a: string, b: string, ope: string): number => {
  let x = parseFloat(a);
  let y = parseFloat(b);
  if (ope == "+") {
    x = x + y;
  } else if (ope == "-") {
    x = x - y;
  } else if (ope == "x") {
    x = x * y;
  } else if (ope == "/") {
    x = x / y;
  }
  return parseFloat(x.toFixed(9));
};
