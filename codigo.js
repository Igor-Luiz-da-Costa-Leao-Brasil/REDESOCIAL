const container = document.querySelector('.post-container')

window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then( ({posts}) => {
            posts.forEach( post => {
                const p = `
        <li>
        <div class ="caixa">

            <!-- Caixa de Like -->
            <img src="images/like.png" alt="" class="like">
            <p class="like-string">${post.reactions}</p>
            
            <!-- Caixa de Comentarios -->
            <img src="images/comentarios.png" alt="" class="comentarios">
                <p class="comentarios-string-usuario">Narciso_Leão:</p>
                <p class="comentarios-string">Otimo pedido !</p>
            <!-- Caixa de Compartilhar -->
            <img src="images/compartilhar.png" alt="" class="compartilhar">
    
            <!-- Caixa de Salvar -->
            <img src="images/salvar.png" alt="" class ="salvar">
    
            <!-- Caixa de etc -->
            <img src="images/etc.png" alt="" class="etc">
    
            <!-- Caixa de usuario -->
            <img src="images/aesthetic22.png" alt="" class="usuario">
                <p class="usuario-string">Miranda_Cabral</p>
    
            <!-- Caixa de Posts -->
            <img src="images/aesthetic8.jpg" alt="" class="post">
            <p class="post-title">${post.title}</p>
            <p class="post-body">${post.body}</p>
            
        </div> 
        </li>`
                container.innerHTML += p
            });
        })
})