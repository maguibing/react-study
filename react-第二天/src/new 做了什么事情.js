import ReactDom from 'react-dom'

const ele = null

function person(name, age) {
  this.name = name
  this.age = age
}

person.prototype.run = function () {
  console.log(this.name, this.age)
}

const obj = new person('zs', 18)

function createPerson(name, age) {
  // eslint-disable-next-line no-new-object
  const o = new Object()

  person.call(o, name, age)

  o.__proto__ = person.prototype

  return o
}

const a = createPerson('lisi', 20)
a.run()

obj.run()

ReactDom.render(ele, document.querySelector('#root'))
