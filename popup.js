const body = document.querySelector("#body");

const xhr =  new XMLHttpRequest();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300){
            const data = xhr.response;
            console.log(data);
            body.innerHTML = marked.parse(data);
        }else{
            body.innerHTML = '请求数据失败,请重试';
        }
    }
}

xhr.open('GET','https://raw.githubusercontent.com/WTFAcademy/WTFgm/main/README.md');
xhr.send();