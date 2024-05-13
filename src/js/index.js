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

//number >= 4 ? console.log('el número es mayor o igual a 4') : console.log('El número es menor de 4');
