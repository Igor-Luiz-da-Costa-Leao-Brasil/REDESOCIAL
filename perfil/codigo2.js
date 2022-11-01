const container = document.querySelector('.post-container')

window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/users/1')
        .then(res => res.json())
        .then( (user) => {
                const p = `
        <li>
        <div class="quadro">
        <div class="circulo"></div>
        <div class="circulo"></div>
        <div class="quadro-dentro">
            <div class="perfil">
                <img src="../images/aesthetic66.jpg" alt="...">

                <p class="box-username">Username :</p>
                <p class="username">${user.username}</p>

                <p class="box-email">Email :</p>
                <p class="email">${user.email}</p>

                <p class="box-age">Age :</p>
                <p class="age">${user.age}</p>

                <p class="box-gender">Gender :</p>
                <p class="gender">${user.gender}</p>

                <p class="box-phone">Phone :</p>
                <p class="phone">${user.phone}</p>

                <p class="box-birth-date">Birth Date :</p>
                <p class="birth-date">${user.birthDate}</p> 
            </div>
        </div>
    </div> 
        </li>`
                container.innerHTML = p
            
        })
})