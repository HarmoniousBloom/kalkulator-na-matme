var a = prompt("Proszę podaj A.");
var b = prompt("Proszę podaj B.");
var a1 = parseInt(a);
var b1 = parseInt(b);
var c = a^2 * b^2
var wynikpole = a1 * b1;
var wynikobwod = 2 * a1 + 2 * b1;
var wynikpoletrojkąta = a1 + b1 / 2;
var wynikprzeciwprostokatna = Math.sqrt(c)
alert ("Pole A i B wynosi " + wynikpole + ", a obwód " + wynikobwod + ".");
alert ("Pole trójkąta z tych dwóch cyfr wynosi " + wynikpoletrojkąta + ".");
alert ("Przeciwprostokątna przyprostokątnych A i B wynosi " + wynikprzeciwprostokatna + ".");
