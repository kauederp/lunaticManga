var data = {}



var resp
var mangas = document.getElementById('mangas')
document.getElementById('formPesquisa').addEventListener('submit',(e)=>{
    e.preventDefault()
    pesquisar()
})
const pesquisar = ()=>{
    nomeManga = document.getElementById('pesquisaManga').value
    console.log(nomeManga)
    fetch('api/busca.php?nomeManga='+nomeManga)
        .then(response=>response.json())
        .then((responseJSON)=>{
            resp = responseJSON['items']
            mangas.innerHTML = ''
            responseJSON['items'].forEach(element => {
                
                div = document.createElement('div')
                img = document.createElement('img')
                title = document.createElement('h5')

                img.setAttribute('src',element.imagem)
                img.classList.add('col-12')
                div.classList.add('col-12')
                title.innerText =  element.titulo
                title.classList.add('text-truncate')
                div.appendChild(img)
                div.appendChild(title)
                a = document.createElement('a')
                a.classList.add('col-2')
                a.classList.add('mx-sm-2')
                a.classList.add('mx-4')
                a.setAttribute('title',element.titulo)
                a.appendChild(div)
                a.setAttribute("onclick","listarCapitulos('"+element.titulo+"','"+element.capitulo+"')")
                mangas.appendChild(a)
            });
        })
}
const listarCapitulos = (titulo,capitulos)=>{
    mangas.innerHTML = ''
    ul = document.createElement('ul')
    for(let i = 1; i <= capitulos; i++){
        li = document.createElement('li')
        a = document.createElement('a')
        li.setAttribute('id','cap-'+i)
        a.innerText = 'cap - '+i
        a.setAttribute("onclick","leitor('"+titulo+"','"+i+"')")


        li.appendChild(a)
        ul.appendChild(li)
        
    }   
    div = document.createElement('div')
    div.appendChild(ul)
    mangas.append(div)
    console.log('ok')
}


function leitor(titulo,cap){
    this.data.ler = {
        'manga': titulo, 
        'cap': cap
    }
    
    mangas.innerHTML = ''
    links= [
        "https://unionleitor.top/leitor/mangas/",
        "https://umangas.club/leitor/mangas/"
    ]
    
    //https://umangas.club/leitor/mangas/Library of Heavens Path (Webtoon)/01/01.jpg
}


function checarUrl(url) {
    try{
        fetch('https://umangas.club/leitor/mangas/Library%20of%20Heavens%20Path%20(Webtoon)/010/01.jpdg',{mode:'no-cors'})
    }catch(err){
        console.log("ok")
    }
    
}