var web3 = new Web3(Web3.givenProvider);
// Here we have metamask so what givenprovider will do is take whatever provider we get from metamask i.e local node, testnet. real eth blockchain..it will take that network and connect
var instance;
var user;
var contractAddress = "0x381BFb2229bC9A3cd2fC1654C268F8358094F155";

//whenever the page has finished loading 
$(document).ready(function(){
    //here we can connect metamask and web3 and true for all web3 applications 
    //we need to call metamask enable function -> allow website to use their metamask account and interact with the blockchain
    window.ethereum.enable().then(function(accounts)
    {
        //so when user accpets that we have to create the contact's instance..similar to truffle
        instance = new web3.eth.Contract(abi,contractAddress,{from:accounts[0]})
        //from:Account[0] => coz what account will use as default for transactions
        //abi is the specification of what the contract does in order for the lib to know what func and param are therd and what it is expecting to return..type of args and what to expect in return
        //application binary interface

        user = accounts[0];

        console.log(instance);

        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner; 
            let kittenId = event.returnValues.kittenId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#kittyCreation").css("display","block");
            $("#kittyCreation").text("owner:" + owner + " kittenId:" + kittenId +" mumId:" + mumId + " dadId" + dadId + " genes:" + genes)

        })
        .on('error',console.error);

        // in order to call a method
        // this takes dna string as an argument
        // call a setfunctions..function that modifies the contract state unless we have a view keyword..if it has a view keyword..(.send) -> to send to the smart contract (async call will not return..wait for eth node)
        // .send({}=> options object(but we donot have any),function(error,txHash))
        // instance.methods.createKittyGen0(dnaStr).send({},function(error,txHash){

        //     we get an error or a txhash
        //     if(error)
        //     console.log(error);
        //     else{
        //         console.log(txHash);
        //         tx went through
        //     }

        // })

    })
})
function CreateCat()
{
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({},function(error,txHash){

            // we get an error or a txhash
            if(error)
            console.log(err);
            else{
                console.log(txHash);
                //transaction has been sent
                // tx went through
                //birth even was emitted when cat is created so listener can be used here
                //listener => so whenever we get an event of typre Birth then display pop up of the cat created..also details of the birth
            }

        })
}
 