export class Vertex {
  public val: string | number;
  public next: Vertex | null;
  public prev: Vertex | null;

  constructor(val: string | number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class List {
  public head: Vertex | null;
  public tail: Vertex | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  init(Vertex: Vertex) {
    this.head = Vertex;
    this.tail = Vertex;
  }
  addVertex(val: string | number) {
    let newVertex = new Vertex(val);
    if (this.head === null) {
      this.init(newVertex);
    }
    newVertex.prev = this.tail;
    this.tail!.next = newVertex;
    this.tail = newVertex;
    this.length += 1;
    return newVertex;
  }
}

export const isOperator = (key: string): boolean => {
  if (key === "+" || key === "x" || key === "/" || key === "-") return true;
  return false;
};
