let indexOfFolder = 0;
const nadpis = ["Suzuki GSX1000RR #1","Kawasaki Ninja ZX9R #2","Yamaha YZFR1 #3"];
const text = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Praesent dapibus. Vivamus ac leo pretium faucibus. Fusce aliquam vestibulum ipsum. Aenean fermentum risus id tortor. Etiam commodo dui eget wisi. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Fusce nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Donec vitae arcu. Aliquam id dolor. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nunc auctor. Maecenas lorem. Nulla quis diam. Duis risus", 
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Praesent dapibus. Vivamus ac leo pretium faucibus. Fusce aliquam vestibulum ipsum. Aenean fermentum risus id tortor. Etiam commodo dui eget wisi. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Fusce nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Donec vitae arcu. Aliquam id dolor. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nunc auctor. Maecenas lorem. Nulla quis diam. Duis risus",
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Praesent dapibus. Vivamus ac leo pretium faucibus. Fusce aliquam vestibulum ipsum. Aenean fermentum risus id tortor. Etiam commodo dui eget wisi. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Fusce nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Donec vitae arcu. Aliquam id dolor. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nunc auctor. Maecenas lorem. Nulla quis diam. Duis risus"];
const fotky = ["pictures/motorcycle1-removebg-preview.png","pictures/motorcycle2-removebg-preview.png","pictures/motorcycle3-removebg-preview.png"];
function next(){ //automaticky je zobrazena index = 0;
    let zvolenyNadpis =  nadpis[0];
    let zvolenyText = text[0];
    let zvolenaFotka = fotky[0];
    let reset = false;
    if(indexOfFolder == 0 ){
        zvolenyNadpis = nadpis[1];
        zvolenyText = text[1];
        zvolenaFotka = fotky[1];
    }
    if(indexOfFolder == 1){
        zvolenyNadpis = nadpis[2];
        zvolenyText = text[2];
        zvolenaFotka = fotky[2];
    }
    if(indexOfFolder == 2 ){
        zvolenyNadpis = nadpis[0];
        zvolenyText = text[0];
        zvolenaFotka = fotky[0];
        reset = true;
    }
    let htmlNadpis = `<h2>${zvolenyNadpis}</h2>`;
    let htmlText = `<p>${zvolenyText}</p>`;
    let htmlFotka = `<img src="${zvolenaFotka}" alt="motorcycle">`;
    document.getElementById("nadpis").innerHTML = htmlNadpis;
    document.getElementById("text").innerHTML = htmlText;
    document.getElementById("foto").innerHTML = htmlFotka;
    indexOfFolder++;
    if(reset){ indexOfFolder = 0;}
}
function previous(){
    let reset = false;
    if(indexOfFolder == 2 ){
        zvolenyNadpis = nadpis[1];
        zvolenyText = text[1];
        zvolenaFotka = fotky[1];
    }
    if(indexOfFolder == 1){
        zvolenyNadpis = nadpis[0];
        zvolenyText = text[0];
        zvolenaFotka = fotky[0];
    }
    if(indexOfFolder == 0 ){
        zvolenyNadpis = nadpis[2];
        zvolenyText = text[2];
        zvolenaFotka = fotky[2];
        reset = true;
    }
    let htmlNadpis = `<h2>${zvolenyNadpis}</h2>`;
    let htmlText = `<p>${zvolenyText}</p>`;
    let htmlFotka = `<img src="${zvolenaFotka}" alt="motorcycle">`;
    document.getElementById("nadpis").innerHTML = htmlNadpis;
    document.getElementById("text").innerHTML = htmlText;
    document.getElementById("foto").innerHTML = htmlFotka;
    indexOfFolder--;
    if(reset){ indexOfFolder = 2;}
}