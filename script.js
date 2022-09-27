const button =document.querySelector('.btn')
const toasts = document.getElementById('toasts')


const messages = [
    'message one',
    'message two',
    'message Three',
    'message Four'
]

button.addEventListener('click', () => creatNotification())

function creatNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getrandomMessage()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
}

function getrandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}