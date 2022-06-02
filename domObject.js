let val;

val = document

console.log("val",val)

val1 = document.all

console.log("val1",val1)

val2 = document.all[0]

console.log("val2",val2)

val3 = document.all.length

console.log("val3",val3)

val4 = document.head

console.log("val4",val4)

val5 = document.body

console.log("val5",val5)

val6 = document.doctype

console.log("val6",val6)

val7 = document.domain

console.log("val7",val7)

val8 = document.URL

console.log("val8",val8)

val9 = document.characterSet

console.log("val9",val9)

val10 = document.contentType

console.log("val10",val10)

val11 = document.forms

console.log("val11",val11)

val12 = document.forms[0]

console.log("val12",val12)

// val13 = document.forms[0].id

// console.log("val13",val13)

// val14 = document.forms[0].method

// console.log("val14",val14)

// val15 = document.forms[0].action

// console.log("val15",val15)

val16 = document.links

console.log("val16",val16)

val17 = document.links[0]

console.log("val17",val17)

// val18 = document.links[0].id

// console.log("val18",val18)

// val19 = document.links[0].className

// console.log("val19",val19)

// val20 = document.links[0].classList[0]

// console.log("val20",val20)

val21 = document.images

console.log("val21",val21)

val22 = document.scripts

console.log("val22",val22)

val23 = document.scripts[0].getAttribute('src')

console.log("val23",val23)

val24 = Array.from(val22)

console.log("val24",val24)

val24.forEach(scripts => {
    console.log(scripts.getAttribute('src'))
});

// console.log(document.getElementById('kaku'))

console.log('document.getElementById:',document.getElementById('apple'))

console.log('document.getElementById:',document.getElementById('apple').id)

console.log('document.getElementById:',document.getElementById('apple').className)


appleList = document.getElementById('apple')

orangeList = document.getElementById('orange')


appleList.style.background = '#444'

appleList.style.color = '#fff'

appleList.style.padding = '5px'

// appleList.style.display = 'none'

appleList.textContent = 'Task List'

orangeList.innerText = 'My List'

orangeList.innerHTML = '<span style="color:red">New List</span>';

const item = document.getElementsByClassName('YOLO')

console.log("Item",item)
console.log("Item::>",item[0])
console.log("Item length::>",item.length)



item[0].style.color = 'red'

item[0].textContent = 'Hello'


const itemList = document.querySelector('div').getElementsByClassName('pear')

console.log("itemList",itemList)

const lis = document.getElementsByTagName('li')
console.log("lis",lis)
console.log("lis[0]",lis[0])

reverseLis = Array.from(lis)

reverseLis.reverse()
console.log("Reverse lis",reverseLis)


reverseLis.forEach(function(li, index){
    console.log('li.className',li.className)
    li.textContent = `${index}: Hello`
})


const listed = document.querySelectorAll('ul.green li.pear')

// console.log("listed::>",listed)

listed.forEach(function(list, index){
    list.textContent = `${index} : Hello`
})


console.log("listed::>",listed)

const liodd  = document.querySelectorAll('li:nth-child(odd)')
const lieven  = document.querySelectorAll('li:nth-child(even)')

console.log("liodd",liodd)
console.log("lieven",lieven)

liodd.forEach(function(li, index){
    li.style.background = "#ccc"
})

for(let i=0; i < lieven.length; i++){
    lieven[i].style.background = 'red'
}

let val25

const list1 = document.querySelector('ul.green')

console.log("list1",list1)

const listItem = document.querySelector('li.pear:first-child')

console.log("listItem",listItem)

val26 = list1.childNodes
console.log("Val26::>",val26)



val28 = list1.childNodes[0]
console.log("Val28::>",val28)

val29 = list1.childNodes[0].nodeName
console.log("Val28::>",val29)

val30 = list1.childNodes[0].nodeType
console.log("Val30::>",val30)

val27 = list1.children
console.log("Val27::>",val27)

val31 = list1.children[1]
console.log("Val31::>",val31)

list1.children[1].textContent = 'Hello'

val32 = list1.children[1].children[0]
console.log("val32",val32) 

val33 = list1.firstChild
console.log("val33",val33) 


val34 = list1.firstElementChild
console.log("val34",val34) 

val35 = list1.lastChild
console.log("val35",val35) 


val36 = list1.lastElementChild
console.log("val36",val36)

val37 = list1.childElementCount
console.log("val37",val37)

val38 = listItem.parentNode
console.log("val38",val38)

val39 = listItem.parentElement
console.log("val39",val39)

val40 = listItem.parentElement.parentElement
console.log("val40",val40)


val41 = listItem.nextSibling
console.log("val41",val41)

val42 = document.createElement('li')

val42.className = 'collection-item'

val42.id ='new-item'

val42.setAttribute('title','New Item')

val42.appendChild(document.createTextNode('Hello World'))

document.querySelector('ul.green').appendChild(val42)

console.log("val42",val42)

const link = document.createElement('a')

link.className = 'yolo-1'

link.innerHTML = '<i class="fa-fa">Amo-1</i>'

console.log('link:',link)

const newHeading = document.createElement('h2')

newHeading.id = 'kaku'


newHeading.appendChild(document.createTextNode('Task #1'))

const oldHeading = document.getElementById("apple")

const cardAction = document.querySelector('.First')

cardAction.replaceChild(newHeading,oldHeading)

console.log("newHeading",newHeading)

const lis1 = document.querySelectorAll('li')
const lis2 = document.querySelector('ul')

lis1[0].remove()

lis2.removeChild(lis[2])

const firstLi = document.querySelector('li:first-child')

console.log("firstLi::>",firstLi)

console.log("firstLi.children[0]::>",firstLi.children[0])

let val43

val43 = firstLi.children[0]

console.log(val43)

let val44 = firstLi.className

console.log("val44",val44)

let val45 = firstLi.classList
console.log("Val45",val45)

let val46 = firstLi.classList[0]
console.log("val46",val46)

firstLi.classList.add('test')
console.log("firstLiAdd::>",firstLi)

firstLi.classList.remove('test')
console.log("firstLiRemove::>",firstLi)

let AnchorTag = firstLi.children[0]

console.log("AnchorTag::>",AnchorTag)

// let val47 = AnchorTag.getAttribute('href') // Not working
// console.log("val47::>",val47)              // Not working
// firstLi.setAttribute('title')              // Not working

let val47 = firstLi.hasAttribute('title')
console.log("val47::>",val47)

// document.querySelector('.clear-tasks').addEventListener('click',
// function(){
//     console.log('Hello World')
// })


document.querySelector('.clear-tasks').addEventListener('click',
onClick);

function onClick(e){
    // console.log('Clicked')

    let val48;
    val48 = e;
    console.log("val48::>",val48)

    val49 = e.target
    console.log("val49::>",val49)

    val50 = e.target.id
    console.log("val50::>",val50)

    val51 = e.target.className
    console.log("val51::>",val51)

    val52 = e.target.classList
    console.log("val52::>",val52)


    e.target.innerHTML = "Hello"

    val53 = e.type
    console.log("val53",val53)

    val54 = e.timeStamp
    console.log("val54",val54)

    val55 = e.clientY
    console.log("val55",val55)
    val56 = e.clientX
    console.log("val56",val56)

    val57 = e.offsetY
    console.log("val57",val57)
    val58 = e.offsetX
    console.log("val58",val58)

}


const clearBtn = document.querySelector('.clear-tasks')

console.log("clearBtn::>",clearBtn)

const card = document.querySelector('.pear')

console.log("card::>",card)

const heading = document.querySelector('h5')

console.log("heading::>",heading)

function runEvent(e){
    console.log(`Event Type: ${e.type}`)
}

clearBtn.addEventListener('click',runEvent)
clearBtn.addEventListener('dblclick',runEvent)
clearBtn.addEventListener('mousedown',runEvent)
clearBtn.addEventListener('mouseup',runEvent)
clearBtn.addEventListener('mouseenter',runEvent)


card.addEventListener('mouseenter',runEvent)
