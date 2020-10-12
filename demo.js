
const butReq = document.getElementById('butRequest');
butReq.addEventListener('click', getContacts);
const divcontact = document.getElementById('contacts');



const supported = ('contacts' in navigator && 'ContactsManager' in window);





async function getContacts() {
  const props = [];
   props.push('name');
   props.push('email');
   props.push('tel');
   props.push('address');
   props.push('icon');
  
  const opts = {multiple: true};
  
  
    const contacts = await navigator.contacts.select(props, opts);
    console.log(contacts);
    handleResults(contacts);
    //ulResults.classList.toggle('error', true);
    //ulResults.classList.toggle('success', false);
    //ulResults.innerText = ex.toString();
    

}

function handleResults(contacts) {
  //ulResults.classList.toggle('success', true);
  //ulResults.classList.toggle('error', false);
  //ulResults.innerHTML = '';
  renderResults(contacts);
}



function renderResults(contacts) {
  contacts.forEach((contact) => {

    var element1 = document.createElement("div");
  element1.classList.add("media");
  element1.classList.add("border");
  element1.classList.add("p-3");
  element1.style.margin = "5 px";

  var img1 = document.createElement("img");
  if (contact.icon) {
    contact.icon.forEach((icon) => {
      const imgURL = URL.createObjectURL(icon);
      img1.src = imgURL;
    });
}

    img1.classList.add("mr-3");
  img1.classList.add("mt-3");
  img1.classList.add("rounded-circle");

  


  var element2 = document.createElement("div");
  element2.classList.add("media-body");
    element2.style.width = "60 px";
  var temp = "<h4>" + contact.name + " <small><i>February 19, 2016</i></small></h4><p>You've Taken</p>"
  element2.innerHTML(temp);

  element1.appendChild(img1);
  element1.appendChild(element2);
    
    divcontact.appendChild(element1);
    
    



    

//     const lines = [];
//     if (contact.name) lines.push(`<b>Name:</b> ${contact.name.join(', ')}`);
//     if (contact.email) lines.push(`<b>E-mail:</b> ${contact.email.join(', ')}`);
//     if (contact.tel) lines.push(`<b>Telephone:</b> ${contact.tel.join(', ')}`);
//     if (contact.address) {
//       contact.address.forEach((address) => {
//         lines.push(`<b>Address:</b> ${JSON.stringify(address)}`);
//       });
//     }
//     if (contact.icon) {
//       contact.icon.forEach((icon) => {
//         const imgURL = URL.createObjectURL(icon);
//         lines.push(`<b>Icon:</b> <img src="${imgURL}">`);
//       });      
//     }
//     lines.push(`<b>Raw:</b> <code>${JSON.stringify(contact)}</code>`);
//     const li = document.createElement('li');
//     li.innerHTML = lines.join('<br>');
//     ulResults.appendChild(li);
 });
//   const strContacts = JSON.stringify(contacts, null, 2);
//   console.log(strContacts);
}
