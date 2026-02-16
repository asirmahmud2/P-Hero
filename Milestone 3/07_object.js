const asir = {
    height: 5.7,
    weight: 65,
    color: "Brown",
    skill: {
        communication: ["Bangla", "English"],
        language: ["C++", "javascript"],
    },
    'fav song': ["dude","duna"]
}

// asir.color="Dark";
// //way to access the property
// console.log(asir.height);
// console.log(asir['weight']);

// console.log(asir["fav song"]); // only access by bracket method

// const keys = Object.keys(asir);
// console.log(keys);
// const values=Object.values(asir);
// console.log(values);

// delete asir["fav song"];


// for(const property in asir)
// {
//     console.log(property);
//     console.log(asir[property]);
// }

for(const property in asir)
{
    console.log(property, ":",asir[property]," | type:",typeof asir[property]);
    // console.log(asir[property]);
}
