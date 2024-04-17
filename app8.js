let N1=[1,2,3,4,5];
let N2=[2,5,6,7,1];
let N3=[];
for(let i=0;i<=N1.length-1;i++){
for(let j=0;j<=N2.length-1;j++){
 if (N1[i]==N2[j]){
    N3.push(N2[j]);
  
 }
 
}
}console.log(N3);
