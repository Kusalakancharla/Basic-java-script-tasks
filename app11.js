let Number=[12,10,19,20,5];
max=[];
for(let i=1;i<=Number.length-1;i++){
    for(let j=0;j<=Number.length-1;j++){
    if(Number[i]>Number[j]){
        Number.unshift(Number[i]);
        max.push(Number[i]);
    }
}}console.log(max);