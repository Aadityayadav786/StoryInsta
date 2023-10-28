var arr = [
    {dp: "https://media.newstrack.in/amp/uploads/entertainment-news/regional-cinema-news/Aug/12/big_thumb/sonam_5f3389f503071.JPG",story:"https://i.redd.it/m8i8ssaymgj91.jpg"},
    {dp: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/09/Suresh-Chavhanke-1.jpg?resize=696,527&ssl=1",story:"https://pbs.twimg.com/media/F8-L8zPbAAAhJJj.jpg"},
    {dp: "https://www.livemint.com/lm-img/img/2023/10/27/1600x900/Rahul_Gandhi__1697879042969_1698384311958.jpg",story:"https://i.pinimg.com/originals/46/52/f3/4652f38010de836845be8f326dd79044.jpg"},
    {dp: "https://files.prokerala.com/news/photos/imgs/1024/prime-minister-narendra-modi-while-celebrating-1464133.jpg",story:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/modi-meloni-pti-one_one.jpg?VersionId=3V_sxtgxfwawBuofGcTrmP.Cag4b5Dlo" },
  
    {dp: "https://im.indiatimes.in/content/2023/Jul/LORD-PUNEET-BIG_64ad3fe77e841.jpg?w=1200&h=900&cc=1",story:"https://www.memecreator.com/static/images/memes/339211.jpg"},
    {dp: "http://drive.google.com/uc?export=view&id=10gIvkHnKAvAeXH5d9LcQR5Snt9Vmtbs-",story:"https://drive.google.com/uc?export=view&id=10wwciLZmli1ddC6_GQfRCzFlJyWVHMBx"}
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
   clutter += `  <div class="story">
   <img id="${idx}" src="${elem.dp} " alt="">
</div>`
})

document.querySelector("#storiyan").innerHTML = clutter

storiyan.addEventListener("click",function(dets){
   
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
});


