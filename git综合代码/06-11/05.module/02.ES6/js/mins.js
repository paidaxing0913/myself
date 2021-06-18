const name = '薛之谦';

function mins(a,b){
    console.log(a - b);
}

function sing(){
    console.log('sing');
}

// 统一暴露
// 当模块部分暴露的时候使用
export {
    sing,
    mins
}