
const BASE_PLANS={nl:[["Volkoren brood + eieren + fruit", "Volkoren boterhammen + kip/kaas + rauwkost", "Yoghurt + fruit", "Kip, aardappelen en groenten"], ["Yoghurt + banaan + bessen", "Wrap met kip en groenten", "Appel + noten", "Spaghetti bolognese met extra groenten"], ["Volkoren toast + roerei + fruit", "Soep + volkoren brood", "Yoghurt + fruit", "Kip of vis + puree + broccoli"], ["Kwark + fruit + granola", "Wrap met ei/kip + groenten", "Banaan + yoghurt", "Kip met rijst en wokgroenten"], ["Volkoren brood + kaas + fruit", "Brood + beleg + groenten", "Fruit + noten", "Pita kip + groenten + yoghurtsaus"], ["Broodjes + ei + fruit", "Soep + brood", "Yoghurt of fruit", "Hamburger + ovenaardappeltjes + salade"], ["Eieren + volkoren brood + fruit", "Restjes of broodmaaltijd", "Kleine traktatie of fruit", "Gehaktballetjes + aardappelen + groenten"]],en:[["Wholegrain bread + eggs + fruit", "Wholegrain sandwiches + chicken/cheese + raw vegetables", "Yogurt + fruit", "Chicken, potatoes and vegetables"], ["Yogurt + banana + berries", "Chicken wrap + vegetables", "Apple + nuts", "Spaghetti bolognese with extra vegetables"], ["Wholegrain toast + scrambled eggs + fruit", "Soup + wholegrain bread", "Yogurt + fruit", "Chicken or fish + mash + broccoli"], ["Quark/Greek yogurt + fruit + granola", "Egg/chicken wrap + vegetables", "Banana + yogurt", "Chicken with rice and stir-fry vegetables"], ["Wholegrain bread + cheese + fruit", "Bread + toppings + vegetables", "Fruit + nuts", "Chicken pita + vegetables + yogurt sauce"], ["Bread rolls + egg + fruit", "Soup + bread", "Yogurt or fruit", "Burger + oven potatoes + salad"], ["Eggs + wholegrain bread + fruit", "Leftovers or bread lunch", "Small treat or fruit", "Meatballs + potatoes + vegetables"]]};
const T={"nl": {"welcomeTo": "Welkom bij", "onboardLead": "Maak je eigen profiel en start een persoonlijk 12-wekenplan.", "name": "Naam", "age": "Leeftijd", "height": "Lengte (cm)", "weight": "Gewicht (kg)", "goalWeight": "Doelgewicht (kg)", "activity": "Activiteit", "actLow": "Bijna niet actief", "actLight": "Licht actief", "actModerate": "Matig actief", "prefs": "Eetvoorkeuren / niet lusten", "allergies": "Allergieën / intoleranties", "startPlan": "Start mijn plan", "togetherHealthier": "Samen gezonder", "twelveWeek": "12-weken traject", "heroSub": "Menu, beweging en voortgang op één plek.", "week": "week", "todayDone": "vandaag klaar", "plan": "Plan", "chooseWeek": "Kies een week", "today": "Vandaag", "movement": "Beweging", "buildSlowly": "Rustig opbouwen", "menu": "Menu", "thisWeek": "Deze week", "sevenDayMenu": "7-daags menu", "editMenu": "Menu aanpassen", "day": "Dag", "breakfast": "Ontbijt", "lunch": "Lunch", "snack": "Snack", "dinner": "Avond", "customize": "Aanpassen", "editWeekMenu": "Pas je weekmenu aan", "resetMenu": "Herstel standaard", "menuEditNote": "Klik in een veld om iets te vervangen. Je wijzigingen worden per profiel en week opgeslagen.", "recipe": "Recept", "family": "Gezin", "ingredients": "Ingrediënten", "preparation": "Bereiding", "allergySafety": "Allergieveiligheid", "allergySafetyNote": "Controleer altijd etiketten en kruisbesmetting. De app kan geen medische allergieveiligheid garanderen.", "progress": "Voortgang", "weightTitle": "Gewicht", "latestMeasurement": "Laatste meting", "save": "Opslaan", "chart": "Grafiek", "weightTrend": "Gewichtstrend", "shopping": "Boodschappen", "weekList": "Weeklijst", "resetWeek": "Week opnieuw", "goodJob": "Goed bezig", "calStart": "Startpunt", "prefsLabel": "Voorkeuren", "allergyLabel": "Allergieën", "goal": "Doel", "start": "Start", "quietCardio": "Rustige cardio", "rowAlt": "Roeien of alternatief", "dailyMove": "Dagelijks bewegen", "smallCounts": "Kleine beetjes tellen ook mee", "minutes": "min", "walkBike": "wandelen, fietsen of hometrainer", "rowEasy": "rustig", "weekWord": "Week", "mealNames": ["Ontbijt", "Lunch", "Snack", "Avond"], "dayNames": ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"], "recipeItems": ["Eiwitbron passend bij het gerecht", "Minstens 2 soorten groenten", "Aardappelen, rijst, pasta of brood", "1–2 el olie voor het gezin", "Kruiden naar smaak"], "recipeSteps": ["Bereid en snijd de ingrediënten.", "Gaar de eiwitbron volledig.", "Voeg de groenten toe.", "Bereid de koolhydraatbron.", "Serveer in passende porties."]}, "en": {"welcomeTo": "Welcome to", "onboardLead": "Create your profile and start a personal 12-week plan.", "name": "Name", "age": "Age", "height": "Height (cm)", "weight": "Weight (kg)", "goalWeight": "Goal weight (kg)", "activity": "Activity", "actLow": "Almost inactive", "actLight": "Lightly active", "actModerate": "Moderately active", "prefs": "Food preferences / dislikes", "allergies": "Allergies / intolerances", "startPlan": "Start my plan", "togetherHealthier": "Healthier together", "twelveWeek": "12-week plan", "heroSub": "Meals, movement and progress in one place.", "week": "week", "todayDone": "done today", "plan": "Plan", "chooseWeek": "Choose a week", "today": "Today", "movement": "Movement", "buildSlowly": "Build up slowly", "menu": "Menu", "thisWeek": "This week", "sevenDayMenu": "7-day menu", "editMenu": "Edit menu", "day": "Day", "breakfast": "Breakfast", "lunch": "Lunch", "snack": "Snack", "dinner": "Dinner", "customize": "Customize", "editWeekMenu": "Edit your weekly menu", "resetMenu": "Reset to default", "menuEditNote": "Click a field to replace a meal. Changes are saved per profile and week.", "recipe": "Recipe", "family": "Family", "ingredients": "Ingredients", "preparation": "Preparation", "allergySafety": "Allergy safety", "allergySafetyNote": "Always check labels and cross-contamination. The app cannot guarantee medical allergy safety.", "progress": "Progress", "weightTitle": "Weight", "latestMeasurement": "Latest measurement", "save": "Save", "chart": "Chart", "weightTrend": "Weight trend", "shopping": "Shopping", "weekList": "Weekly list", "resetWeek": "Reset week", "goodJob": "Great job", "calStart": "Starting point", "prefsLabel": "Preferences", "allergyLabel": "Allergies", "goal": "Goal", "start": "Start", "quietCardio": "Easy cardio", "rowAlt": "Rowing or alternative", "dailyMove": "Daily movement", "smallCounts": "Small amounts count too", "minutes": "min", "walkBike": "walking, cycling or exercise bike", "rowEasy": "easy", "weekWord": "Week", "mealNames": ["Breakfast", "Lunch", "Snack", "Dinner"], "dayNames": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], "recipeItems": ["Protein source suitable for the meal", "At least 2 types of vegetables", "Potatoes, rice, pasta or bread", "1–2 tbsp oil for the family", "Seasoning to taste"], "recipeSteps": ["Prepare and chop the ingredients.", "Cook the protein fully.", "Add the vegetables.", "Prepare the carbohydrate side.", "Serve suitable portions."]}};
const qs=s=>document.querySelector(s), qsa=s=>[...document.querySelectorAll(s)];
let lang=localStorage.getItem("gf_lang")||"nl";
let profiles=JSON.parse(localStorage.getItem("gf_profiles")||"[]");
let activeId=localStorage.getItem("gf_active_profile")||"";
let currentWeek=Number(localStorage.getItem("gf_week")||"1");
let tasks=JSON.parse(localStorage.getItem("gf_tasks")||"{}");
let history=JSON.parse(localStorage.getItem("gf_history")||"{}");
let shopping=JSON.parse(localStorage.getItem("gf_shopping")||"[]");
let menuOverrides=JSON.parse(localStorage.getItem("gf_menu_overrides")||"{}");
let socialPosts=JSON.parse(localStorage.getItem("gf_social_posts")||"[]");
let pendingPhoto="";

function uid(){return "p_"+Math.random().toString(36).slice(2,9)}
function active(){return profiles.find(p=>p.id===activeId)||profiles[0]}
function tr(k){return T[lang][k]??k}
function applyLanguage(){
  document.documentElement.lang=lang;
  qsa("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[lang][k])el.textContent=T[lang][k]});
  qs("#langBtn").textContent=lang==="nl"?"EN":"NL";
  qs("#weekSelect").innerHTML=Array.from({length:12},(_,i)=>`<option value="${i+1}">${tr("weekWord")} ${i+1}</option>`).join("");
  qs("#weekSelect").value=currentWeek;
  qsa("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(T[lang][k])el.placeholder=T[lang][k]});
}
function calorieEstimate(p){
  let bmr=10*p.weight+6.25*p.height-5*p.age-100;
  let mult=p.activity==="moderate"?1.45:p.activity==="light"?1.30:1.20;
  return Math.max(1400,Math.round((bmr*mult-350)/50)*50);
}
function openOnboarding(){qs("#onboarding").classList.remove("hidden")}
function closeOnboarding(){qs("#onboarding").classList.add("hidden")}
function finishOnboarding(){
  const name=qs("#obName").value.trim(),age=+qs("#obAge").value,height=+qs("#obHeight").value,weight=+qs("#obWeight").value,goal=+qs("#obGoal").value;
  if(!name||!age||!height||!weight||!goal){alert(lang==="nl"?"Vul alle basisgegevens in.":"Please fill in all basic details.");return}
  const p={id:uid(),name,age,height,weight,goal,activity:qs("#obActivity").value,prefs:qs("#obPrefs").value.trim(),allergies:qs("#obAllergies").value.trim()};
  profiles.push(p);activeId=p.id;
  localStorage.setItem("gf_profiles",JSON.stringify(profiles));localStorage.setItem("gf_active_profile",activeId);
  history[p.id]=[{date:new Date().toISOString().slice(0,10),weight:p.weight}];localStorage.setItem("gf_history",JSON.stringify(history));
  closeOnboarding();renderAll();
}
function renderProfiles(){
  qs("#profiles").innerHTML=profiles.map(p=>`<button class="profile ${p.id===activeId?"active":""}" data-id="${p.id}"><div class="avatar">${p.name.slice(0,1).toUpperCase()}</div><div><strong>${p.name}</strong><span>${p.weight} kg · ${p.age}</span></div></button>`).join("");
  qsa(".profile").forEach(b=>b.onclick=()=>{activeId=b.dataset.id;localStorage.setItem("gf_active_profile",activeId);renderAll()});
}
function defaultPlan(){return BASE_PLANS[lang].map(d=>[...d])}
function overrideKey(){return `${active().id}_${currentWeek}_${lang}`}
function currentPlan(){
  const base=defaultPlan();
  const ov=menuOverrides[overrideKey()];
  return ov?ov:base;
}
function renderMenu(){
  const p=active(),plan=currentPlan(),idx=(new Date().getDay()+6)%7,icons=["🍳","🥪","🍎","🍽️"];
  qs("#mealList").innerHTML=plan[idx].map((m,i)=>`<div class="meal"><div class="meal-icon">${icons[i]}</div><div class="meta"><strong>${tr("mealNames")[i]}</strong><span>${m}</span></div></div>`).join("");
  qs("#weekMenu").innerHTML=plan.map((d,i)=>`<tr><td><strong>${tr("dayNames")[i]}</strong></td><td>${d[0]}</td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td></tr>`).join("");
  renderRecipe(plan[idx][3]);renderMenuEditor();
}
function renderMenuEditor(){
  const plan=currentPlan();
  qs("#menuEditor").innerHTML=plan.map((d,di)=>`<div class="editor-day"><h4>${tr("dayNames")[di]}</h4><div class="editor-grid">${d.map((m,mi)=>`<div class="editor-field"><label>${tr("mealNames")[mi]}</label><textarea data-day="${di}" data-meal="${mi}">${m}</textarea></div>`).join("")}</div></div>`).join("");
  qsa("#menuEditor textarea").forEach(t=>t.addEventListener("change",e=>{
    const plan2=currentPlan().map(d=>[...d]);
    plan2[+e.target.dataset.day][+e.target.dataset.meal]=e.target.value.trim();
    menuOverrides[overrideKey()]=plan2;localStorage.setItem("gf_menu_overrides",JSON.stringify(menuOverrides));
    renderMenu();
  }));
}
function renderRecipe(name){
  qs("#recipeTitle").textContent=name;
  qs("#recipeIngredients").innerHTML=tr("recipeItems").map(x=>`<li>${x}</li>`).join("");
  qs("#recipeSteps").innerHTML=tr("recipeSteps").map(x=>`<li>${x}</li>`).join("");
}
function movementFor(){
  const add=Math.min(15,currentWeek-1);
  return [[tr("quietCardio"),`${10+add} ${tr("minutes")} ${tr("walkBike")}`,"🚴"],[tr("rowAlt"),`${5+Math.floor(add/2)} ${tr("minutes")} ${tr("rowEasy")}`,"🚣"],[tr("dailyMove"),tr("smallCounts"),"🌿"]];
}
function renderMovement(){
  const p=active(),mov=movementFor();
  qs("#movementTasks").innerHTML=mov.map((m,i)=>{const k=`${p.id}_${currentWeek}_${i}`;return `<label class="task"><input type="checkbox" data-task="${k}" ${tasks[k]?"checked":""}><div class="meal-icon">${m[2]}</div><div class="meta"><strong>${m[0]}</strong><span>${m[1]}</span></div></label>`}).join("");
  qsa("[data-task]").forEach(c=>c.onchange=e=>{tasks[e.target.dataset.task]=e.target.checked;localStorage.setItem("gf_tasks",JSON.stringify(tasks));updateDone()});
  updateDone();
}
function updateDone(){const p=active();let d=0;for(let i=0;i<3;i++)if(tasks[`${p.id}_${currentWeek}_${i}`])d++;qs("#donePct").textContent=Math.round(d/3*100)+"%"}
function renderWeight(){
  const p=active(),h=history[p.id]||[{weight:p.weight}],current=h[h.length-1].weight;
  qs("#currentWeight").textContent=current.toFixed(1)+" kg";qs("#startLabel").textContent=`${tr("start")} ${p.weight} kg`;qs("#goalLabel").textContent=`${tr("goal")} ${p.goal} kg`;qs("#goalBadge").textContent=`${tr("goal")} ${p.goal} kg`;
  const pct=Math.max(0,Math.min(100,((p.weight-current)/(p.weight-p.goal))*100));qs("#weightProgress").style.width=pct+"%";renderChart();
}
function renderChart(){
  const p=active(),arr=history[p.id]||[],c=qs("#weightChart"),ctx=c.getContext("2d"),dpr=devicePixelRatio||1,w=c.clientWidth||600,h=260;
  c.width=w*dpr;c.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);
  const pts=arr.length?arr:[{weight:p.weight}],vals=pts.map(x=>x.weight),min=Math.min(...vals,p.goal)-1,max=Math.max(...vals,p.weight)+1,pad=32;
  ctx.strokeStyle=getComputedStyle(document.body).getPropertyValue("--line");
  for(let i=0;i<5;i++){let y=pad+i*(h-2*pad)/4;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke()}
  ctx.strokeStyle=getComputedStyle(document.body).getPropertyValue("--accent2");ctx.lineWidth=3;ctx.beginPath();
  pts.forEach((pt,i)=>{let x=pad+(pts.length===1?0:i/(pts.length-1))*(w-2*pad),y=h-pad-((pt.weight-min)/(max-min))*(h-2*pad);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
}
function defaultShop(){return (lang==="nl"?["Volkoren brood","Eieren","Kipfilet","Yoghurt/kwark","Fruit","Groenten","Aardappelen","Rijst","Volkoren pasta","Wraps"]:["Wholegrain bread","Eggs","Chicken breast","Yogurt","Fruit","Vegetables","Potatoes","Rice","Wholegrain pasta","Wraps"]).map(x=>({name:x,done:false}))}
function renderShopping(){
  if(!shopping.length) shopping=defaultShop();
  qs("#shoppingList").innerHTML=shopping.map((x,i)=>`<div class="shop-item ${x.done?"done":""}"><input type="checkbox" data-shop="${i}" ${x.done?"checked":""}><label>${x.name}</label></div>`).join("");
  qsa("[data-shop]").forEach(c=>c.onchange=e=>{shopping[e.target.dataset.shop].done=e.target.checked;localStorage.setItem("gf_shopping",JSON.stringify(shopping));renderShopping()});
}

function savePosts(){localStorage.setItem("gf_social_posts",JSON.stringify(socialPosts))}
function formatDate(iso){
  try{return new Date(iso).toLocaleString(lang==="nl"?"nl-BE":"en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}
  catch(e){return iso}
}
function addReaction(postId,emoji){
  const p=socialPosts.find(x=>x.id===postId); if(!p)return;
  p.reactions=p.reactions||{}; p.reactions[emoji]=(p.reactions[emoji]||0)+1; savePosts(); renderFeed();
}
function addComment(postId,inputId){
  const input=document.getElementById(inputId),text=input.value.trim(); if(!text)return;
  const post=socialPosts.find(x=>x.id===postId); if(!post)return;
  const prof=active(); post.comments=post.comments||[];
  post.comments.push({name:prof.name,text,date:new Date().toISOString()}); savePosts(); renderFeed();
}
function deletePost(postId){
  const prof=active();
  socialPosts=socialPosts.filter(p=>!(p.id===postId && p.profileId===prof.id)); savePosts(); renderFeed();
}
function renderFeed(){
  const feed=qs("#socialFeed");
  if(!socialPosts.length){feed.innerHTML=`<div class="empty-feed">${tr("noPosts")}</div>`;return}
  const emojis=["❤️","🔥","💪","😋","👏","😂","🥗","🚴","🚣"];
  feed.innerHTML=[...socialPosts].reverse().map(post=>{
    const comments=(post.comments||[]).map(c=>`<div class="comment"><strong>${c.name}</strong>${c.text}</div>`).join("");
    const reactions=Object.entries(post.reactions||{}).filter(([,n])=>n>0).map(([e,n])=>`<span class="reaction-chip">${e} ${n}</span>`).join("");
    const cid=`comment_${post.id}`;
    const mine=active() && post.profileId===active().id;
    return `<article class="social-post">
      <div class="post-top"><div class="post-avatar">${post.name.slice(0,1).toUpperCase()}</div><div class="post-meta"><strong>${post.name}</strong><span>${formatDate(post.date)}</span></div>${mine?`<button class="secondary-btn delete-post" data-delete="${post.id}" style="margin-left:auto">${tr("deletePost")}</button>`:""}</div>
      ${post.photo?`<img class="post-image" src="${post.photo}" alt="">`:""}
      <div class="post-body">
        ${post.caption?`<p class="post-caption">${post.caption.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</p>`:""}
        ${reactions?`<div class="reaction-summary">${reactions}</div>`:""}
        <div class="emoji-bar">${emojis.map(e=>`<button type="button" data-react="${post.id}" data-emoji="${e}">${e}</button>`).join("")}</div>
        <div class="comment-list">${comments}</div>
        <div class="comment-row"><input id="${cid}" placeholder="${tr("commentPlaceholder")}"><button type="button" data-comment="${post.id}" data-input="${cid}">${tr("send")}</button></div>
      </div>
    </article>`;
  }).join("");
  qsa("[data-react]").forEach(b=>b.onclick=()=>addReaction(b.dataset.react,b.dataset.emoji));
  qsa("[data-comment]").forEach(b=>b.onclick=()=>addComment(b.dataset.comment,b.dataset.input));
  qsa("[data-delete]").forEach(b=>b.onclick=()=>deletePost(b.dataset.delete));
}

function renderAll(){
  applyLanguage();
  if(!profiles.length){openOnboarding();return}
  if(!activeId)activeId=profiles[0].id;
  const p=active();
  qs("#heroTitle").textContent=`${tr("goodJob")}, ${p.name}!`;qs("#weekLabel").textContent=currentWeek;qs("#calorieBadge").textContent=`${tr("calStart")} ± ${calorieEstimate(p)} kcal/day`;
  const notes=[];if(p.prefs)notes.push(`${tr("prefsLabel")}: ${p.prefs}`);if(p.allergies)notes.push(`${tr("allergyLabel")}: ${p.allergies}`);qs("#dietNote").textContent=notes.join(" • ");
  qs("#weekSelect").value=currentWeek;renderProfiles();renderMenu();renderMovement();renderWeight();renderShopping();renderFeed();
}
qs("#finishOnboarding").onclick=finishOnboarding;qs("#addProfileBtn").onclick=openOnboarding;
qs("#weekSelect").onchange=e=>{currentWeek=+e.target.value;localStorage.setItem("gf_week",currentWeek);renderAll()};
qs("#saveWeight").onclick=()=>{const p=active(),v=parseFloat(qs("#weightInput").value);if(!Number.isFinite(v)||v<30||v>300){alert(lang==="nl"?"Vul een geldig gewicht in.":"Enter a valid weight.");return}history[p.id]=history[p.id]||[];history[p.id].push({date:new Date().toISOString().slice(0,10),weight:v});localStorage.setItem("gf_history",JSON.stringify(history));qs("#weightInput").value="";renderWeight()};
qs("#addShopping").onclick=()=>{const v=qs("#shoppingInput").value.trim();if(!v)return;shopping.push({name:v,done:false});qs("#shoppingInput").value="";localStorage.setItem("gf_shopping",JSON.stringify(shopping));renderShopping()};
qs("#resetShopping").onclick=()=>{shopping=defaultShop();localStorage.setItem("gf_shopping",JSON.stringify(shopping));renderShopping()};
qs("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("gf_dark",document.body.classList.contains("dark")?"1":"0");qs("#themeBtn").textContent=document.body.classList.contains("dark")?"🌙":"☀️";renderChart()};
qs("#langBtn").onclick=()=>{lang=lang==="nl"?"en":"nl";localStorage.setItem("gf_lang",lang);shopping=[];localStorage.setItem("gf_shopping","[]");renderAll()};
qs("#editMenuBtn").onclick=()=>{qs("#menuEditorCard").classList.toggle("hidden");qs("#menuEditorCard").scrollIntoView({behavior:"smooth",block:"start"})};
qs("#resetMenuBtn").onclick=()=>{delete menuOverrides[overrideKey()];localStorage.setItem("gf_menu_overrides",JSON.stringify(menuOverrides));renderMenu()};

qs("#photoInput").addEventListener("change",e=>{
  const file=e.target.files && e.target.files[0]; if(!file)return;
  if(file.size>5*1024*1024){alert(lang==="nl"?"Kies een foto kleiner dan 5 MB.":"Choose a photo smaller than 5 MB."); e.target.value=""; return}
  const reader=new FileReader();
  reader.onload=ev=>{pendingPhoto=ev.target.result;qs("#photoPreview").src=pendingPhoto;qs("#photoPreviewWrap").classList.remove("hidden")};
  reader.readAsDataURL(file);
});
qs("#removePreview").onclick=()=>{pendingPhoto="";qs("#photoPreview").src="";qs("#photoPreviewWrap").classList.add("hidden");qs("#photoInput").value=""};
qsa("#composerEmojiBar button").forEach(b=>b.onclick=()=>{qs("#postCaption").value+=(qs("#postCaption").value?" ":"")+b.textContent});
qs("#publishPost").onclick=()=>{
  if(!profiles.length)return;
  const caption=qs("#postCaption").value.trim();
  if(!pendingPhoto && !caption){alert(lang==="nl"?"Voeg een foto of tekst toe.":"Add a photo or some text.");return}
  const p=active();
  socialPosts.push({id:"post_"+Date.now()+"_"+Math.random().toString(36).slice(2,6),profileId:p.id,name:p.name,date:new Date().toISOString(),photo:pendingPhoto,caption,reactions:{},comments:[]});
  try{savePosts()}catch(e){
    socialPosts.pop();
    alert(lang==="nl"?"De foto is te groot om lokaal op te slaan. Kies een kleinere foto.":"The photo is too large to save locally. Choose a smaller photo.");
    return;
  }
  qs("#postCaption").value="";pendingPhoto="";qs("#photoPreview").src="";qs("#photoPreviewWrap").classList.add("hidden");qs("#photoInput").value="";renderFeed();
};
qs("#clearPosts").onclick=()=>{
  if(!profiles.length)return;
  const id=active().id;socialPosts=socialPosts.filter(p=>p.profileId!==id);savePosts();renderFeed();
};

if(localStorage.getItem("gf_dark")==="1"){document.body.classList.add("dark");qs("#themeBtn").textContent="🌙"}
renderAll();window.addEventListener("resize",()=>profiles.length&&renderChart());
