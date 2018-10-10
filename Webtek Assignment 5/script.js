/* Part 2 */
console.log('PART 2')
/*Prints all numbers from 1 to 20*/
for (i = 1; i < 21; i++){
    console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
/*For loop that runs as many times as there are values in the array*/
for (i = 0, len = numbers.length; i < len; i++){
    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
        console.log("Eplekake")
    } 
    else if (numbers[i] % 5 === 0){
        console.log("Kake")
    } else if (numbers[i] % 3 === 0){
        console.log("Eple")
    } else{
        console.log(numbers[i])
    }
    
}
/* Part 4 */
document.getElementById("title").innerText = "Hello, JavaScript";
/* Part 5 */
function changeDisplay () {
    document.getElementById("magic").style.display = "none";
}

function changeVisibility () {
    document.getElementById("magic").style.visibility = "hidden";
    document.getElementById("magic").style.display = "block";
}

function reset () {
    document.getElementById("magic").style.display = "block";
    document.getElementById("magic").style.visibility = "visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
let node
let textnode
for(i = 0; i < technologies.length; i++){
    node = document.createElement("li")
    textnode = document.createTextNode(technologies[i])
    node.appendChild(textnode)
    document.getElementById("tech").appendChild(node)
} 

