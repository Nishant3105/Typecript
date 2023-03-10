const num1ele=document.getElementById('num1') as HTMLInputElement
const num2ele=document.getElementById('num2') as HTMLInputElement
const btn=document.querySelector('button')!
const numsres: number[]=[]
const stringres: string[]=[]

type NumorString=number | string
type Result={val: number; timestamp: Date}

interface Resultobj{
    val: number; 
    timestamp: Date;
}

function add(a:NumorString , b:NumorString){
    if(typeof a==="number" && typeof b==="number")
     return a+b
    else if(typeof a==="string" && typeof b==="string")
     return a+b
    else{
        return +a + +b
    }
}

function printObj(resobj: Result ){ //resobj: Resultobj(interface)
    console.log(resobj.val)
}

btn.addEventListener('click',()=>{
   const num1=num1ele.value;
   const num2=num2ele.value;
   const result=add(+num1,+num2)
   const stringRes=add(num1,num2)
   numsres.push(result as number)
   stringres.push(stringRes as string)
   console.log(stringres)
   console.log(result)
   printObj({val: result as number, timestamp: new Date() })
})

const promise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
       resolve('It works!')
    },1000)
})

promise.then(result=>{
    console.log(result.slice('w'))
})
