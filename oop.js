class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vector) {

    var x1 = this.x + vector.x
    var y1 = this.y + vector.y

    return new vector.constructor(x1, y1)
  }
  minus(vector) {
    var x1 = this.x - vector.x
    var y1 = this.y - vector.y
    return new vector.constructor(x1, y1)
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}


class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  plus(a) {
    var x1 = this.real + a.real
    var y1 = this.imag + a.imag
    return new Complex(x1, y1)
  }
  minus(a) {
    var x1 = this.real - a.real
    var y1 = this.imag - a.imag
    return new Complex(x1, y1)
  }
  mul(a) {
    var x1 = this.real * a.real - this.imag * a.imag
    var y1 = this.real * a.imag + this.imag * a.real
    return new Complex(x1, y1)
  }
  div(a) {
    var h = new Complex(a.real, -a.imag)
    var u = this.mul(h)
    var d = a.mul(h)
    var x = u.real / d.real
    var y = u.imag / d.real
    return new Complex(x, y)
  }
}


class Stack {
  constructor() {
    this.head = null
    this.len = 0
  }
}



class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.len = 0
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.len = 0
  }
}

class MyMap {
  constructor() {
    this.length = 0
    this.keys = []
    this.vals = []
  }
}


class MySet {
  constructor() {
    this.arr = []
    this.len = 0
  }
}