// document.body.children[1].children[0].href = "https://www.baidu.com";
// console.dir(document);

//如何用js修改元素
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.baidu.com";

document.querySelector("p a");
anchorElement.href = "https://academind.com";



//如何用js添加元素
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.baidu.com";
newAnchorElement.textContent = "This leads to Baidu!";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);



//如何用js删除元素
let firstH1Element = document.querySelector("h1");
//firstH1Element.remove();//旧网站可能不支持
firstH1Element.parentElement.removeChild(firstH1Element); //for older browsers



//如何用js移动元素
firstParagraph.parentElement.append(firstParagraph);



// innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi! This is <strong>important</strong>.";