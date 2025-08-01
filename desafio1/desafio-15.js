let n1 = 0;
let n2 = 1;
let fibonacci = 0;

for (let i = 0; i < 10; i++){
    console.log(n1);
    fibonacci = n1 + n2;
    n1 = n2;
    n2 = fibonacci;
}

