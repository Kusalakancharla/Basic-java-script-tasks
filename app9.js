let N=19;
let isprime=true;
if(N<=1){
    isprime=false;
}
for(let i=2;i<N;i++){
    if(N%i==0){
        isprime=false;
    }}
 if(isprime){
    console.log( N+"Number is a prime number");
} else {
    console.log(N+ "Number is not a prime number");
}
    
     



