let n=5;

for(let i=0;i<n;i++){
    let row =" "
    for(let j=0;j<n-i;j++){
       row+=j+1
    }
    console.log(row);
    
}



for(let i=0;i<n;i++){
    let row = " ";
    for(let s=0;s<n-(i+1);s++){
        row = row + "  "
        
    }
     for(let j=0;j<i+1;j++){
       row+="* "
    }
    console.log(row);
    
}