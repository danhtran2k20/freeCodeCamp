/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches

==================================================================
DESCRIPTION

Specify Exact Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
In order, the three test calls would return false, true, and false.

Change the regex timRegex to match the word Timber only when it has four letter m's.

==================================================================
TESTCASE

Your regex should use curly brackets.

Your regex should not match the string Timber

Your regex should not match the string Timmber

Your regex should not match the string Timmmber

Your regex should match the string Timmmmber

Your regex should not match the string Timber with 30 m's in it.

==================================================================
SETUP

let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

==================================================================

*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result)
