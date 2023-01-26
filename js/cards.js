let containerNotif = document.querySelector('#container-notif')


let createCard = (notif) => {
    
    for(const notifs of notif) {
        containerNotif.insertAdjacentHTML("beforeend",`
            <div class="container-card">
                <div class="card-content">
                    <img src="${notifs.avatar}" alt="Avatar ${notifs.name}" title="Avatar ${notifs.name}"/>
                    <h3 class="name">${notifs.name}</h3>
                    <p class="message">${notifs.message}</p>
                </div>
            
                <p class="time-content">${notifs.time}</p>
            </div>
        `)
    }  
}
createCard(notif)