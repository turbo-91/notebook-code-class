const emailsIcon = document.querySelector(".emails");
const btn = document.querySelector('button');

const dismissEmails = ()=>{
    console.dir(emailsIcon.dataset.emails)

    let numOfEmails = Number(emailsIcon.dataset.emails)

    console.log(typeof numOfEmails)

    emailsIcon.dataset.emails = Math.max(0, numOfEmails-1) 
}

btn.addEventListener("click", dismissEmails)