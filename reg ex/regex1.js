let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result

console.log(text)

regex = /\d+/g
result = text.match(regex)
console.log(`\nSzámok keresése (bármilyen hosszúságú): ${regex}`)
console.log(result)

regex = /\b\d{2}\b/g
result = text.match(regex)
console.log(`\nKétjegyű számok keresése: ${regex}`)
console.log(result)

regex = /\b[0-9]{3}\b/g
result = text.match(regex)
console.log(`\nHáromjegyű számok keresése: ${regex}`)
console.log(result)

regex = /\b\d{4}\b/g
result = text.match(regex)
console.log(`\nNégyjegyű számok keresése: ${regex}`)
console.log(result)

regex = /\b[a-z][a-z]*\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek kisbetűvel kezdődnek: ${regex}`)
console.log(result)

regex = /\b[A-Z][a-z]*\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek nagybetűvel kezdődnek: ${regex}`)
console.log(result)

regex = /\b\w{5}\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek pontosan öt karakterből állnak: ${regex}`)
console.log(result)

regex = /\b\d+\w*/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek számokkal kezdődnek: ${regex}`)
console.log(result)

regex = /\S+/g
result = text.match(regex)
console.log(`\nSzóköz nélküli karakterek keresése: ${regex}`)
console.log(result)

regex = /\ba\w*\b/g
result = text.match(regex)
console.log(`\nOlyan szavak keresése, amelyek "a" betűvel kezdődnek: ${regex}`)
console.log(result)
