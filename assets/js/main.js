// =====================================================
//          CodeFlow Übung lev1_2: Objects
// =====================================================


console.log("%c <<<<<<<<<lev1_2>>>>>>>>>", "color: yellow; font-size: 16px;");

const person = {
    name: "Samuel",
    age: 36,
    sagNameAlter: () => window.alert(`Hallo! Mein name ist ${person.name} und ich bin ${person.age} jahre alt.`)
}



// =====================================================
//          CodeFlow Übung lev1_4: Objects
// =====================================================
console.log("%c <<<<<<<<<lev1_4>>>>>>>>>", "color: yellow; font-size: 16px;");

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
unsereHaustiere.forEach((object) =>console.log(object.names))
const unsereHaustiere2 = [...unsereHaustiere];
unsereHaustiere2[0].names[0]= "Belli";
unsereHaustiere2[1].names[0]= "Bella";
unsereHaustiere2.forEach((object) =>console.log(object.names))

// =====================================================
//          CodeFlow Übung lev1_5: Objects
// =====================================================
console.log("%c <<<<<<<<<lev1_5>>>>>>>>>", "color: yellow; font-size: 16px;");

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
        },
        schrank: {
            "Obere Schublade": {
                Ordner1: "Dokumente",
                Ordner2: "Geheimnisse"
        },
            "Untere Schublade": "Cola"
        }
    };
    
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);


// =====================================================
//          CodeFlow Übung lev1_7: Objects
// =====================================================
console.log("%c <<<<<<<<<lev1_7>>>>>>>>>", "color: yellow; font-size: 16px;");
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

const output = document.body.querySelector("section");
const outputBonus = document.body.querySelector("article");


myMusic.forEach((elt) => {
    output.innerHTML += `<p>${elt.artist}</p>
    <p>${elt.title}</p>
    <p>${elt.medium}</p>
    <br><br>`
})
myMusic.forEach((elt) => {
    if (elt.release_year > 1975) {
        outputBonus.innerHTML += `<p>${elt.artist}</p>
        <p>${elt.title}</p>
        <p>${elt.medium}</p>
        <br><br>`
    }
})

// =====================================================
//          CodeFlow Übung lev1_8: Objects
// =====================================================
console.log("%c <<<<<<<<<lev1_8>>>>>>>>>", "color: yellow; font-size: 16px;");

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((elt) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails);
});

// =====================================================
//          CodeFlow Übung lev1_8: Objects
// =====================================================
console.log("%c <<<<<<<<<lev1_8>>>>>>>>>", "color: yellow; font-size: 16px;");