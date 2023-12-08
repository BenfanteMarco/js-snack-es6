// snack-1


// lista di oggetti dei modelli e pesi (lbs) delle bici
const modelliBici =[
    {
        name : 'SLR 9 AXS Gen 4',
        peso : 17
    },
    {
        name : 'SL 6 AXS 4e gén',
        peso : 19
    },
    {
        name : 'AL 2 Gen 4',
        peso : 23
    },
    {
        name : 'SL 7',
        peso : 20
    },
    {
        name : 'AL 2 Gen 3',
        peso : 24
    },  
]

//arrey pesi
let pesi=[]

// pusho i pesi nell'array vuoto
modelliBici.forEach((elem) => {
    pesi.push(parseInt(elem.peso))
})

// trovo la bici con peso minore
pesi.sort()
console.log(pesi)
modelliBici.forEach((elem) => {
    if(elem.peso == pesi[0]){
        let {name, peso}=elem
        console.log(`la bici ${name} e\' la piu leggera con un peso uguale a: ${peso}`)
    }
})
