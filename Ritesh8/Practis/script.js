let parent = [
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40256888_1-fresho-coriander-leaves-with-roots-enhances-flavour-of-the-dishes.jpg?tr=w-1920,q=80",
        name:"Coriander Leaves",
        Weight:"100 g",
        price:"₹6" 

    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/20001190_12-fresho-onion.jpg?tr=w-1920,q=80",
        name:"Onion",
        Weight:"500 g",
        price: "₹12.5"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40320936_1-fresho-potato-fresh-crop.jpg?tr=w-1920,q=80",
        name:"Potato",
        Weight:"1 kg",
        price:"₹40"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80",
        name:"Carrot",
        Weight:"1 kg",
        price:"₹50"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000159_27-fresho-potato.jpg?tr=w-1920,q=80",
        name:"Potato",
        Weight:"1 kg",
        price:"₹39"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-1920,q=80",
        name:"Ledies'Fingers",
        Weight:"1 kg",
        price:"₹38"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000097_19-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
        name:"Coriander Leaves",
        Weight:"100 g",
        price:"₹5"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000103_16-fresho-cucumber.jpg?tr=w-1920,q=80",
        name:"Cucumber (Loose)",
        Weight:"500 g",
        price:"₹13"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/1228332_1-fresho-tomato-local.jpg?tr=w-1920,q=80",
        name:"Tomato - Local",
        Weight:"2 x 1 kg",
        price:"₹74"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000382_10-fresho-carrot-red.jpg?tr=w-1920,q=80",
        name:"Carrot - Red",
        Weight:"500 g",
        price:"₹18"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40312600_2-fresho-tomato-hybrid.jpg?tr=w-1920,q=80",
        name:"Tomato - Hybrid",
        Weight:"250 g",
        price:"₹10.5"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/40089741_2-fresho-beans-haricot.jpg?tr=w-1920,q=80",
        name:"Beans - Haricot (Loose)",
        Weight:"1 kg",
        price:"₹116"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000069_20-fresho-capsicum-green.jpg?tr=w-1920,q=80",
        name:"Capsicum - Green (Loose)",
        Weight:"5oo g",
        price:"₹30"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-1920,q=80",
        name:"Cauliflower",
        Weight:"500 g",
        price:"₹30"
        
    },{
        img:"https://www.bigbasket.com/media/uploads/p/m/20000979_12-fresho-palak-cleaned-without-roots.jpg?tr=w-1920,q=80",
        name:"Palak",
        Weight:"250 g",
        price:"₹15"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000045_18-fresho-beetroot.jpg?tr=w-1920,q=80",
        name:"Beetroot (Loose)",
        Weight:"1 kg",
        price:"₹48"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000668_12-fresho-cucumber-english.jpg?tr=w-1920,q=80",
        name:"Cucumber - English (Loose)",
        Weight:"1 kg",
        price:"₹55"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/50000513_3-fresho-chilli-green-organically-grown.jpg?tr=w-1920,q=80",
        name:"Chilli ",
        Weight:"500 g",
        price:"₹75"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000334_15-fresho-drumstickmoringa.jpg?tr=w-1920,q=80",
        name:"Drumstick/Moringa",
        Weight:"1 kg",
        price:"₹60"
        
    },
    {
        img:"https://www.bigbasket.com/media/uploads/p/m/10000327_13-fresho-curry-leaves.jpg?tr=w-1920,q=80",
        name:"Curry Leaves",
        Weight:"1 kg",
        price:"₹60"
        
    },
]

let containar = document.querySelector("#containar3")

parent.forEach(function(){
    let separateDiv = document.createElement("div")

    let name = document.createElement("h4")
    name.innerHTML = ele.name

    let img = document.createElement("img")
    img.src = ele.img

    let Weight = document.createElement("p")
    Weight.innerHTML = ele.Weight

    let price = document.createElement("b")
    price.innerHTML = ele.price

    separateDiv.append(img, name, Weight, price)
    containar.append(separateDiv)

})
