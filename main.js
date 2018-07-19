// function getfile(file,callback){
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status== "200"){
//       callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
//
// getfile("data.json",function(text){
//   var data =JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CareerObjective);
//   education(data.education);
//   skill(data.skill);
// })

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.CareerObjective);
  education(data.education);
  skill(data.skill);
  achievements(data.achievements);
})
var child = document.querySelector(".childone");
function details(det){
 var img = document.createElement("img");
 img.src = det.image;
 child.appendChild(img);
 var name = document.createElement("h3");
 name.textContent = det.name;
 child.appendChild(name);
 var phoneno = document.createElement("h3");
 phoneno.textContent = det.phoneno;
 child.appendChild(phoneno);
 var mail = document.createElement("a");
 mail.href = "mailto:madhuri.setti02@gmail.com";
 mail.textContent = det.email;
 child.appendChild(mail);

 var Address1= document.createElement("h3");
 Address1.textContent = det.Address1;
 child.appendChild(Address1);

 var Address = document.createElement("h3");
 Address.textContent = det.Address;
 child.appendChild(Address);

 var b= document.createElement("hr");
 child.appendChild(b);
}
var child2 = document.querySelector(".childtwo");
function career(det){
  var car = document.createElement("h2");
  car.textContent = det.car;
  child2.appendChild(car);

  var c= document.createElement("hr");
  child2.appendChild(c);

  var info = document.createElement("h4");
  info.textContent = det.info;
  child2.appendChild(info);
}
function education(edu){

 var ed= document.createElement("h2");
 ed.textContent = "Eductional Qualification:";
 child2.appendChild(ed);

 var d = document.createElement("hr");
 child2.appendChild(d);

 for(i=0;i<edu.length;i++)
 {
   var deg= document.createElement('h3');
   deg.textContent =edu[i].degree;
   child2.appendChild(deg);

    var eduul=document.createElement("ul");
    var ins=document.createElement("li");
    ins.textContent=edu[i].institute;
    eduul.appendChild(ins);
    child2.appendChild(eduul);

    var eduul=document.createElement("ul");
    var dur=document.createElement("li");
    dur.textContent=edu[i].duration;
    eduul.appendChild(dur);
    child2.appendChild(eduul);

    var eduul=document.createElement("ul");
    var branch=document.createElement("li");
    branch.textContent=edu[i].branch;
    eduul.appendChild(branch);
    child2.appendChild(eduul);
}
}

function skill(skillinfo)
{
  var e=document.createElement("h2");
  e.textContent="Technical Skills:";
  child2.appendChild(e);

  var h=document.createElement("hr");
  child2.appendChild(h);

 var skilldata=document.createElement("table");
 skilldata.border="1";
 child2.appendChild(skilldata);

 tabledata="";
 for(i=0;i<skillinfo.length;i++)
 {
   tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";
 }
 skilldata.innerHTML=tabledata;
}
function achievements(achinfo)
{
  var f=document.createElement("h2");
  f.textContent="Achievements:";
  child2.appendChild(f);

  var g=document.createElement("hr");
  child2.appendChild(g);

  var cer= document.createElement('h3');
  cer.textContent =achinfo.heading;
  child2.appendChild(cer);

  var achul=document.createElement("ul");
  var ppt=document.createElement("li");
  ppt.textContent=achinfo.ppt;
  achul.appendChild(ppt);
  child2.appendChild(achul);

  var achul=document.createElement("ul");
  var cisco=document.createElement("li");
  cisco.textContent=achinfo.cisco;
  achul.appendChild(cisco);
  child2.appendChild(achul);

  var achul=document.createElement("ul");
  var csi=document.createElement("li");
  csi.textContent=achinfo.csi;
  achul.appendChild(csi);
  child2.appendChild(achul);

  var achul=document.createElement("ul");
  var web=document.createElement("li");
  web.textContent=achinfo.web;
  achul.appendChild(web);
  child2.appendChild(achul);

  var achul=document.createElement("ul");
  var photoshop=document.createElement("li");
  photoshop.textContent=achinfo.photoshop;
  achul.appendChild(photoshop);
  child2.appendChild(achul);

}
