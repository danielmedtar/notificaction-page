const notificationNumber = document.querySelector('#numbers')
const markRead = document.querySelector('#mark-read')
const unreadNotif = document.querySelectorAll('.unread')

notificationNumber.innerText = unreadNotif.length

unreadNotif.forEach((change) => {
    change.addEventListener('click', () => {
        change.classList.remove('unread')
        change.classList.add('read')

        const newUnread = document.querySelectorAll('.unread')
        notificationNumber.innerText = newUnread.length
    })
})


markRead.addEventListener('click', () => {
    unreadNotif.forEach((change) => {
        change.classList.remove('unread')
        change.classList.add('read')
    })

    const newUnread = document.querySelectorAll('.unread')
    notificationNumber.innerText = newUnread.length
})

