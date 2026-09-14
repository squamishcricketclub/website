const d=window.CLUB_DATA||{};
document.querySelectorAll("[data-bind]").forEach(el=>{const v=d[el.dataset.bind];if(v!==undefined)el.textContent=v});
document.querySelectorAll("[data-email-link]").forEach(el=>{el.href="mailto:"+d.email;el.textContent=d.email});
document.querySelectorAll("[data-jotform]").forEach(el=>el.href=d.jotformUrl);
[["facebookUrl","[data-facebook]"],["instagramUrl","[data-instagram]"]].forEach(([key,selector])=>document.querySelectorAll(selector).forEach(el=>{if(d[key])el.href=d[key];else el.classList.add("hidden")}));
const board=document.querySelector("[data-board]");if(board){d.board.forEach(item=>{const article=document.createElement("article");article.className="card";const h=document.createElement("h3");h.textContent=item.name;const p=document.createElement("p");p.textContent=item.role;article.append(h,p);board.append(article)})}
const schedule=document.querySelector("[data-schedule]");if(schedule){d.schedule.forEach(item=>{const article=document.createElement("article");article.className="card";const h=document.createElement("h3");h.textContent=item.activity;const p=document.createElement("p");p.textContent=item.timing+" · "+item.location;article.append(h,p);schedule.append(article)})}
const b=document.querySelector(".toggle"),n=document.querySelector(".nav");if(b&&n){b.addEventListener("click",()=>{const open=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!open));n.classList.toggle("open",!open)});document.addEventListener("keydown",e=>{if(e.key==="Escape"){b.setAttribute("aria-expanded","false");n.classList.remove("open");b.focus()}})}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
