// // Écrivez un programme qui utilise une boucle for pour afficher les éléments d'un tableau de chaînes de caractères, en sautant les éléments qui sont composés de moins de 4 caractères.

// const array = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].length >= 4) {
//     console.log(array[i]);
//   }
// }

// // Écrivez un programme qui utilise une boucle do...while pour demander à l'utilisateur de saisir un élément d'un tableau jusqu'à ce qu'il saisisse un élément qui contient la lettre "a".

// const array = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

// let input;

// do {
//   input = prompt('Saisissez un élément du tableau :');
// } while (!array.includes(input) || !input.includes('a'));

// console.log(`Vous avez saisi l'élément "${input}" qui contient la lettre "a".`);

// Écrivez un programme qui utilise une boucle for pour afficher les éléments d'un tableau (que vous aurez preablement construit grace a une boucle et un Math.random...) de nombres en utilisant l'instruction break pour sortir de la boucle lorsque l'élément est inférieur à 50 et au'il affiche a quel index il est sortit.


// let array = [];


// for (let i = 0; i < 10; i++) {
//   array.push(Math.floor(Math.random() * 101));
// }

// console.log(`Tableau initial : [${array}]`);

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 101) {
//     console.log(`Sortie de la boucle à l'index ${i}. Valeur : ${array[i]}`);
//     break;
//   }
//   console.log(`Élément à l'index ${i} : ${array[i]}`);
// }


// Écrivez un programme qui utilise une boucle for pour afficher les éléments d'un tableau de nombres en utilisant l'instruction break pour sortir de la boucle lorsque l'élément atteint l'indice 100 , puis affiche un message indiquant que la boucle a été interrompue et la valeur de l'élément qui a causé l'interruption.



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//     81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];


// for (let i = 1; i < numbers.length; i++) {

// console.log(`Élément ${i+1}: ${numbers[i]}`);


// if (i === 99) {

// console.log("La boucle a été interrompue car l'élément atteint l'indice 100.");
// console.log(`Valeur de l'élément qui a causé l'interruption: ${numbers[i]}`);
// break;
// }
// }
