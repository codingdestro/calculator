import { List, Vertex } from "./utils";

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
    let ope = "";
    let Fstack = [];
    let Sstack = [];

    for (let i = 0; i < this.str.length; i++) {
      let char = this.str[i];
      if (char == "") continue;
      if (char == "+" || char == "x" || char == "/" || char == "-") {
        ope = char;
        let val = parseFloat(x);

        this.list.addVertex(val);
        let Vertex = this.list.addVertex(ope);
        if (ope == "+" || ope == "-") {
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

        let x = parseFloat(vertex.prev?.val);
        let y = parseFloat(vertex.next.val);

        if (vertex.val == "+") {
          x = x + y;
        } else if (vertex.val == "-") {
          x = x - y;
        } else if (vertex.val == "x") {
          x = x * y;
        } else if (vertex.val == "/") {
          x = x / y;
        }
        this.val = x;

        let newVertex = new Vertex(x);

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

// const equations = [
//   { equation: "100 - 100 / 2 x 0 + 5", answer: 105 },
//   { equation: "20 x 3 - 4 / 2 + 7", answer: 65 },
//   { equation: "15 + 2 x 6 / 3 - 5", answer: 14 },
//   { equation: "8 - 2 x 4 / 2 + 6", answer: 10 },
// ];

// let x = new Calc();
// for (let i = 0; i < equations.length; i++) {
//   let equation = equations[i].equation;
//   let answer = equations[i].answer;
//   x.init(equation);
//   let val = x.do();

//   console.log(equation, " ", val, " ", val == answer ? "✔" : "✗");
// }
