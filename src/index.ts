class Vertex {
  public val: string;
  public next: any;
  public prev: any;

  constructor(val: string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class List {
  public head: Vertex | null;
  public tail: Vertex | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  init(Vertex: Vertex) {
    this.head = Vertex;
    this.tail = Vertex;
  }
  addVertex(val: string) {
    let newVertex = new Vertex(val);
    if (this.head === null) {
      this.init(newVertex);
    }
    newVertex.prev = this.tail;
    this.tail!.next = newVertex;
    this.tail = newVertex;
    return newVertex;
  }
  travel() {
    let nd = this.head;
    console.group("hi");
    while (nd !== null) {
      console.log(nd.val, " → ");
      nd = nd.next;
    }
    console.groupEnd();
  }
}

class Calc {
  public str: string;
  public list: List;
  public Fstack: any[];
  public Sstack: any[];
  public val: number;
  constructor() {
    this.str = "";
    this.list = new List();
    this.Fstack = [];
    this.Sstack = [];
    this.val = 0;
  }
  init(str: string) {
    this.str = str;
  }

  split() {
    let x = "";
    let ope = "";

    for (let i = 0; i < this.str.length; i++) {
      let char = this.str[i];
      if (char == "") continue;
      if (char == "+" || char == "x" || char == "/" || char == "-") {
        ope = char;
        let val = parseFloat(x);

        this.list.addVertex(val.toString());
        let Vertex = this.list.addVertex(ope);
        if (ope == "+" || ope == "-") {
          this.Sstack.push(Vertex);
        } else {
          this.Fstack.push(Vertex);
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
  }

  do() {
    this.split();
    let stack = [...this.Fstack, ...this.Sstack];
    let vertex = null;
    while (stack.length > 0) {
      vertex = stack.shift();

      let x = parseFloat(vertex.prev?.val);
      let y = parseFloat(vertex.next.val);
      // console.log(x, "←", Vertex.val, "→", y);

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

      let newVertex = new Vertex(x.toString());

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

    return this.val;
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
