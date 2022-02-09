const element = document.createElement('div')
const textArea = document.createElement('textarea')
const btn = document.createElement('button')

btn.innerHTML = 'test'

element.appendChild(textArea)
element.appendChild(btn)

document.body.appendChild(element)

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value
  const trim = text.trim()
  const split = text.split()
  const underscoreCase = text.toLowerCase()
  const replace = text.replace()
  const upperCase = text.toUpperCase()
  console.log(`${text} ${trim} ${split} ${underscoreCase} ${replace} ${upperCase}`)
})
