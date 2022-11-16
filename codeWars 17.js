function abbrevName(name) {

  let [firstName, lastName] = name.split(' ')

  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase()
}

console.log(abbrevName("sam rris"))