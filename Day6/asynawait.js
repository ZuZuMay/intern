function walkDog(){
    console.log("cat")
}
function cleanKitchen()
{
    confirm.log("kitchen")
}
function takeOutTrash()
{
    console.log("traash")
}
walkDog().then(value=>{console.log(value);return cleanKitchen()})
        .then(value=>{console.log(value);return takeOutTrash()})
        .then(value=>{console.log(value);console.log("You finished all the work")})
        .catch(error=>console.error(error));

async function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked=true;
            if(dogWalked){
                resolve("You walk the dog ")
            }
            else{
                reject("You Didn't walk the dog");
            }
        },1500);
    })
}
async function doChores(){

    const walkDogResut=await walkDog();
    console.log(walkDogResut);

    const cleanKitchenResult=await cleanKitchen();
    console.log(cleanKitchenResult)
}
doChores();