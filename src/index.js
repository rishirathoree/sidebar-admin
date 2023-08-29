console.log('object')
const patternPrint = (row,reverse) => {
    if(reverse){
        for(let i=1;i<=row;i++){
            let pattern = '';
            for(let j=1;j<=i;j++){
              pattern += j
            }
            pattern += `\n`
            console.log(pattern)
          }
    }
    else{
        for(let i=row;i>=1;i--){
            let pattern = '';
            for(let j=1;j<=i;j--){
              pattern += j
            }
            pattern += `\n`
            console.log(pattern)
          }
    }
}
patternPrint(10,true)
