require("@nomiclabs/hardhat-waffle");

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/1Ux3Fh9tAMjtW0TwfdC8f75DoAKfzHwY" ,
      accounts:["7d88612dd17701b176d41a31e31709a3a1005e6e39b2fa83419ad794dbe84d61"],
    }
  }
}