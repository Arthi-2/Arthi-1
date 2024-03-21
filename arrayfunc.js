
// map method
function triple(n) //function name
{
    return n*3;
}

arr = new Array(1,2,3,6,5,4);
var new_arr = arr.map(triple)
console.log(new_arr);

//reduce method

function product(a,b){
    return a*b;
}

arr1 = new Array(1,2,3,4);
var new_arr1 = arr1.reduce(product);
console.log(new_arr1);

//map method
const numbers = [2,3,4,5]

const squares = numbers.map(n => n*n);

console.log(squares);

//filter method

const numbers1 = [1,2,3,4,5];

const oddnumbers = numbers1.filter(n => n%2!=0);

const evennumbers = numbers1.filter(n => n%2 == 0);

console.log(evennumbers);

console.log(oddnumbers);

document.getElementById("try").addEventListener("click",call);
//Timeout

function call()
{
   const ref = setTimeout(() => {
        
        alert("Thank You for visit this site");

    }, 3000);

    setTimeout(() => {
        console.log("clear")
        clearTimeout(ref)
    },4000);

  
    setInterval(myTimer, 1000);

    function myTimer(){
        const d = new Date();
        document.getElementById("interval").innerHTML=d.toLocaleTimeString();
    }

    // getElementByid => Method, 
    //innerHTML => property
    document.getElementById("demo").innerHTML = "Hello World!";

    //HTML elements by id,tag and classs name

     const x=document.getElementById("main");
     
     const y=x.getElementsByTagName("h5");

     document.getElementById("tag").innerHTML='(index 1) inside "main" is:' + y[1].innerHTML;

     const z=document.getElementsByClassName("class_id");

     document.getElementById("sample_id").innerHTML='(index 2) inside "class_id":' + z[2].innerHTML;

     function init()
     {
        
        function display(name)
        {
            var name = "Arthi";
            document.getElementById("sample").innerHTML=name;

            const n=35;
            if(n<100)
            {
                console.log("The value is less than 100");
            }
            else
            {
                console.log("The value is greater than 100");
            }
            

        }

        display();
     }

     init();


}