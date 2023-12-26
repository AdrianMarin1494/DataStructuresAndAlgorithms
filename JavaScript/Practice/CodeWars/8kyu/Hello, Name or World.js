// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    //     if (name) {
    //       return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    //     } else {
    //       return 'Hello, World!'
    //     }
        return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : 'Hello, World!';
      }