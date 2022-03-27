var some = 'ps';

function person() {
    let name = 'jet';
    console.log(this.name);
}

person();



function nikeProducts(n,p,c) {
    this.name = n;
    this.price = p;
    this.color = c;
}

var nikepro1 = new nikeProducts("sneaker",2500,"red")
var nikepro2 = new nikeProducts("sneakestylis",25000,"green")


function newspaper(n,d,id) {
    this.name = n;
    this.date = d;
    this.id = id;
}

var new1 = new newspaper('TheHindu',new date(),Math.round(Math.random() * 100));


