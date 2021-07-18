//filter 함수 
let arr = [
  { gender: "male", name: "john" },
  { gender: "female", name: "sarah" },
  { gender: "male", name: "boh" },
];

let filtered = arr.filter(function (item){
    if(item.gender === 'female'){
        return item;
    }
});

console.log(filtered);