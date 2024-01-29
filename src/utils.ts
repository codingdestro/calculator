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
  constructor() {
    this.head = null;
    this.tail = null;
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
    return newVertex;
  }
}
