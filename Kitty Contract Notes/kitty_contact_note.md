# kitty_contact_notes
1] 
function _transfer(address _from,address _to, uint256 _tokenId) internal 
we will be using the transfer function for some other things too when we create new cats. According to the ERC721 standard whenever you create a new cat out of thin air/when you mint a new cat.. You should make it such a way that the transfer is from address 0 to the member who is receiving it and so we have to use the _transfer function without msg.sender
pragma solidity ^0.7.5;

import "./IERC721.sol";

contract KittyContracts is IERC721
{
    //name and symbol for our token
    string public constant name = "AmityKitties";
    string public constant symbol = "Ak";
    
    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties;
    mapping(uint256 => address)public kittyIndexToOwner; //takes a kittyid and gives back the owner of the cat
    mapping(address => uint256)public ownershipTokenCount;
    function balanceOf(address owner) override external view returns (uint256 balance)
    {
        return ownershipTokenCount[owner];
    }
    function totalSupply() external view returns (uint256 total)
    {
        return kitties.length; //length of the array of cats
    }
     function ownerOf(uint256 _tokenId) external view returns (address owner)
     {
        //cannot call this function within the contract 
        //cheaper in terms of gas
         return kittyIndexToOwner[_tokenId];
     }
     function transfer(address _to, uint256 _tokenId) external
     {
         require(_to != address(0)); //should not be 0 address
         require(_to != address(this)); //should not be this contract
         require(_owns(msg.sender, _tokenId)); //msg.sender owns this token

         _transfer(msg.sender, _to, _tokenId);
     }
     function _transfer(address _from,address _to, uint256 _tokenId) internal 
     {
         ownershipTokenCount[_to]++; //increasing the token count of the recipient
         kittyIndexToOwner[_tokenId] = _to; //setting the ownership in KittyIndexToOwner to the owner..so that the owner of this tokenID is _to

         //we check the if the from address is not == address 0 then we will decrease the token count from the sender...like Person A -> Person B 
         if(_from != address(0))
         {
             ownershipTokenCount[_from]--;
         }
         //emit the transfer event
         emit Transfer(_from, _to, _tokenId);
     }


    //basically returns true or false whether owner = claimant
    function _owns(address _claimant, uint256 _tokenId) internal view returns(bool) 
    {
        return kittyIndexToOwner[_tokenId] == _claimant;
        //to check if the kittyIndexToOwner mapping = the person who is claiming the ownership

    }

}
-------------------------------------------------------------------
how to get the contract instance 
"var instance = await Kittycontract.deployed()"
-----------------------------------------------------------------------
create kitty using instance
instance.createKittyGen0(100) -> the gen is actually 16digits which we created in the front-end
------------------------------------------------------------------------
To check the balance in truffle we use
instance.balanceOf(accounts[0]) -> accounts is a list of addresses
'0xe157D259A43cE97562F746795D99B635B0fEA19d'
instance.ownerOf(0)
'0xe157D259A43cE97562F746795D99B635B0fEA19d'
------------------------------------------------------------------------
truffle(ganache)> result["genes"].toNumber()
101
(with getKitty Function)
-----------------------------------------------------------------------
