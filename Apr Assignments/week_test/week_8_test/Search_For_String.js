var list = ['geek', 'geekster', 'geeky'];
let i;
for(i=0;i<list.length;i++){
    if(list[i]==='geekster'){
        console.log(i);
        console.log(list.splice(i,1));
    }
}
console.log(list);