/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

   /*  
   modo 1
   let moltiplicazione;
    let base=2;
    let altezza=3;

    moltiplicazione=base*altezza;
    console.log(moltiplicazione); */

    /* modo 2 */

   /* function area (a,b){
        var a=2;
        var b=3;
        var moltiplicazione=0;
        moltiplicazione=a*b;
        return moltiplicazione;

    }

    var risultato=area();
    console.log(risultato); */


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* function crazySum(a,b){
 var a=200;
 var b=100;
 var somma=0;
 if(a!=b){
     somma=a+b;
 }else{
    somma=(a+b)*3;
 }

return somma;
  
}

var risultato=crazySum();
console.log(risultato); */



/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* function crazyDiff(a,b){
    var a=30;
    var b=6;
    var differenza;
    
    if(a < b){
        differenza=b-a;
         
    }else{
        differenza=a-b;
   
    }
   
    if(differenza>19){
        differenza=differenza*3;
    }

    return differenza;
}

var risultato=crazyDiff();
console.log(risultato); */



/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /*   function boundary(a){

        if(20<=a<=100 || a === 400){
           return true;

        }
        else{
            return false;
        }
        
    }

    console.log(boundary(30)); */


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

   /* function codify(string){
        if(string !== "code"){
            return (codify = "code".concat(string));
        }else if(string=="code"){
            return (codify = "code");
        }
    }
    console.log(codify("code")); */

   

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /* function check3and7 (a){
    
    if(a%3 === 0 || a%7 === 0){
        return true;
    }else{
        
            return false;
        }

    }
    console.log(check3and7(37)); */
    

    

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

   /* function reverseString(str){
        var splString = str.split("");
        var revArray = splString.reverse();
        return revArray.join("");

    }
    var nuovaStringa = reverseString("homer");
    console.log(nuovaStringa); */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const upperFirst = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
//   /*
//     let firstChar = str.chatAt(0)
//     let uppercaseChar = firstChar.toUpperCase()
//     let cutString = str.slice(1)
//     return uppercaseChar + cutString
//   */
// };

/*  const upperFirstPhrase = function (str) {
  
  let words = str.split(' ')
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0)
    console.log(firstChar)
    let uppercaseChar = firstChar.toUpperCase()
    let cutString = words[i].slice(1)
    let finalWord = uppercaseChar + cutString
    finalString.push(finalWord)
  }
  console.log(finalString.join(''))
}

upperFirstPhrase('hello world') 
  
  const upperFirstPhrase = function (str) {
  
  let words = str.split(' ')
  let finalString = []
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0)
    console.log(firstChar)
    let uppercaseChar = firstChar.toUpperCase()
    let cutString = words[i].slice(1)
    let finalWord = uppercaseChar + cutString
    finalString.push(finalWord)
  }
  console.log(finalString.join(''))
}

upperFirstPhrase('hello world') */




/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

   /* function cutString(stringa){
        return stringa.slice(1,stringa.length,-1);
    }
    console.log(cutString('ciao')); */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

   /*  const giveMeRandom = function(n){
    const array = [];
    let i=0;
    for(i=0; i<=n;i++){
        array.push(Math.floor(Math.random() * 10))
    }
    return array;

   }

   console.log(giveMeRandom(5)); */
