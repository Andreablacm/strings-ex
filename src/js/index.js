// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

function upperThan5(word) {
  if (word.lengh > 5) {
    console.log(word.toLowerCase());
  } else console.log(word.toUpperCase());
}

upperThan5('Amore');

function upperThan5Ternary(word) {
  word.lengh >= 5 ? console.log(word.toLowerCase()) : console.log(word.toUpperCase());
}

upperThan5Ternary('Amor');

function conjugationVerb(verb) {
  if (verb.endsWith('ar')) {
    return 'es de la primera conjugación';
  }

  if (verb.endsWith('er')) {
    return 'es de la segunda conjugación';
  }

  if (verb.endsWith('ir')) {
    return 'es de la tercera conjugación';
  }
}

function verbsConjugation(verbo1, verbo2) {
  const primerVerbo = conjugationVerb(verbo1);
  const segundoVerbo = conjugationVerb(verbo2);

  console.log(`El verbo ${verbo1} ${primerVerbo} y el verbo ${verbo2} ${segundoVerbo}.`);
}

verbsConjugation('Coser', 'cantar');

function generateWord(word1, word2, word3) {
  console.log(
    word1.charAt(3) + word1.charAt(2) + word2.charAt(1) + word2.charAt(3) + word3.charAt(2) + word3.charAt(1)
  );
}

generateWord('Hola', 'Adios', 'Mano');

function clientData(mail) {
  const findArroba = mail.indexOf('@');
  const name = mail.substring(0, findArroba);
  const domain = mail.substring(findArroba + 1);

  console.log(`El usuario es ${name} y el dominio es ${domain}.`);
}

clientData('andreablazquez@gmail.com');

function randomWord(word) {
  const randomNumber = Math.random() * word.length;
  const randomLetter = word.charAt(randomNumber);

  console.log(randomLetter);
}

randomWord('Campito');

function randomLetters(word) {
  console.log(
    word.charAt(0).toLowerCase(),
    word.charAt(1).toUpperCase(),
    word.charAt(2).toLowerCase(),
    word.charAt(3).toUpperCase(),
    word.charAt(4).toLowerCase()
  );
}

randomLetters('adiós');
