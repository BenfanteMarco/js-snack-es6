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

// snack 2

// lista oggeti di squadre
const squadreCalcio =[
    {
        name : 'inetr',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'napoli',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'roma',
        puntiFatti : 0,
        falliSubiti : 0
    },  
]

// funziona che genera numeri casuali
function randomNUm(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadreCalcio.forEach((elem) => {
    elem.puntiFatti = randomNUm(20, 90);
    elem.falliSubiti = randomNUm(20, 90);
})

console.log(squadreCalcio);