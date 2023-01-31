let containerNotif = document.querySelector('#container-notif')


let createCard = (notif) => {
    
    for(const notifs of notif) {
        containerNotif.insertAdjacentHTML("beforeend",`
        <div class="container-card ${notifs.unread}">
            <div class="card-content">
                <img src="${notifs.avatar}" alt="Avatar ${notifs.name}" title="Avatar ${notifs.name}"/>
                <p class="name">${notifs.name}</p>
                <p class="message1">${notifs.message1} <span class"message2">${notifs.message2}</span></p>
                <img src="${notifs.img}" class="kim-img" alt="${notifs.name}">
            </div>            
            <p class="time-content">${notifs.time}</p>            
            <p class="border">${notifs.private}</p>

        </div>
        `
        )        
    }  
}

createCard(notif)