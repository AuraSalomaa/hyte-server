import{f as a}from"./fetch-iRR3zos3.js";const c=document.querySelector(".loginuser");c.addEventListener("click",async t=>{t.preventDefault(),console.log("Nyt logataan sisään");const r="https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/login",o=document.querySelector(".login_form"),s={username:o.querySelector("input[name=username]").value,password:o.querySelector("input[name=password]").value},l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};a(r,l).then(e=>{if(e.token==null)alert("Username or password is incorrect");else{alert(e.message),location.href="api-harjoituspohja.html";const n=e.token;localStorage.setItem("name",e.user.username),localStorage.setItem("token",n),document.getElementById("loginResponse").innerText=n}console.log(e),console.log(e.token)})});
