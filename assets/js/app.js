

let cl = console.log;
const stdinfo =document.getElementById("stdinfo")
const stdData=document.getElementById("stdData")

const fnameCollect =document.getElementById("fname")
const lnameCollect =document.getElementById("lname")
const emailCollect =document.getElementById("email")
const contactCollect =document.getElementById("contact")

let stdArrray =[
    {
        fname :'jhon',
        lname : 'wick',
        email : 'jhon@wick.com',
        contact: 123456789
    },
    {
        fname :'tony',
        lname : 'stark',
        email : 'tony@stark.com',
        contact: 123456789
    }
];

const templating = (arr) =>{
    let result = '';
    arr.forEach((e,i)=>{
    result+= `
            <tr>
                <td>${i+1}</td>
                <td>${e.fname}</td>
                <td>${e.lname}</td>
                <td>${e.email}</td>
                <td>${e.contact}</td>
            </tr>
    
    `;
})
stdinfo.innerHTML=result;
}
templating(stdArrray);

const onSubmitHandler = (eve) =>{
    eve.preventDefault();
    cl('std is added')
 let sdtObj = {
        fname : fnameCollect.value,
        lname :  lnameCollect.value,
        email :   emailCollect.value,
        contact:    contactCollect.value
 }
 cl(sdtObj)

stdArrray.push(sdtObj);
eve.target.reset();
templating(stdArrray);
}

stdData.addEventListener("submit",onSubmitHandler)