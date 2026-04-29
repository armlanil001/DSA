let n=4;

for(let i=0;i<n;i++){
    let row = " "
    for(let j=0;j<i+1;j++){
        row = row + "* "
    }
    console.log(row);
    
}

 n=5;

for(let i=0;i<n;i++){
    let row = " "
    for(let j=0;j<i+1;j++){
        row = row + (j+1)
    }
    console.log(row);
    
}


n =5 ;


for(let i=0;i<n;i++){
    let row = ''
    for(let j=0;j<=i;j++){
        row += (i+1)
        
    }
    console.log(row);
    
}



for(let i=0;i<n;i++){
    let row = ''
    for(let j=0;j<=i;j++){
        if((j+1) %2 == 1){
            row += "1 "
        }else{
            row+= "0 "
        } 
    }
    console.log(row);
    
}


let toggle =1;
for(let i=0;i<n;i++){
   if(toggle==1){
    toggle =0
   }else{
    toggle =1
   }
   let row='';
    for(let j=0;j<=i;j++){
       row += toggle;
       toggle=1?0:1;
    }
    console.log(row);
    
}