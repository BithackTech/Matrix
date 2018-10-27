var abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isMinter",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MinterAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MinterRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
];

function get_account(){
    return document.getElementById("account").value;
}

function get_token1(){
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];
    //Transcation abi

    var contract_at = web3.eth.contract(abi);
    var transaction = '0x33df3afb56a70698578c05ee70a950f395ad9491';
    var token1 = contract_at.at(transaction);
    // var basicmatrixtokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]);
    // var basicmatrixtoken = basicmatrixtokenContract.new(
    //     {
    //         from: web3.eth.accounts[0],
    //         data: '0x60806040526100163364010000000061001b810204565b6100f8565b610033600382640100000000610ae161006a82021704565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b600160a060020a038116151561007f57600080fd5b61009282826401000000006100c1810204565b1561009c57600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b6000600160a060020a03821615156100d857600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b610ba7806101076000396000f3006080604052600436106100cc5763ffffffff60e060020a60003504166306fdde0381146100d1578063095ea7b31461015b57806318160ddd1461019357806323b872dd146101ba578063313ce567146101e4578063395093511461020f57806340c10f191461023357806370a082311461025757806395d89b4114610278578063983b2d561461028d57806398650275146102b0578063a457c2d7146102c5578063a9059cbb146102e9578063aa271e1a1461030d578063cae9ca511461032e578063dd62ed3e14610397575b600080fd5b3480156100dd57600080fd5b506100e66103be565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610120578181015183820152602001610108565b50505050905090810190601f16801561014d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016757600080fd5b5061017f600160a060020a03600435166024356103f5565b604080519115158252519081900360200190f35b34801561019f57600080fd5b506101a8610473565b60408051918252519081900360200190f35b3480156101c657600080fd5b5061017f600160a060020a0360043581169060243516604435610479565b3480156101f057600080fd5b506101f9610516565b6040805160ff9092168252519081900360200190f35b34801561021b57600080fd5b5061017f600160a060020a036004351660243561051b565b34801561023f57600080fd5b5061017f600160a060020a03600435166024356105cb565b34801561026357600080fd5b506101a8600160a060020a03600435166105f4565b34801561028457600080fd5b506100e661060f565b34801561029957600080fd5b506102ae600160a060020a0360043516610646565b005b3480156102bc57600080fd5b506102ae610666565b3480156102d157600080fd5b5061017f600160a060020a0360043516602435610671565b3480156102f557600080fd5b5061017f600160a060020a03600435166024356106bc565b34801561031957600080fd5b5061017f600160a060020a03600435166106c9565b34801561033a57600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261017f948235600160a060020a03169460248035953695946064949201919081908401838280828437509497506106e29650505050505050565b3480156103a357600080fd5b506101a8600160a060020a0360043581169060243516610823565b60408051808201909152601081527f42617369784d6174726978546f6b656e00000000000000000000000000000000602082015281565b6000600160a060020a038316151561040c57600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a03831660009081526001602090815260408083203384529091528120548211156104a957600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020546104dd908363ffffffff61084e16565b600160a060020a038516600090815260016020908152604080832033845290915290205561050c848484610865565b5060019392505050565b601281565b6000600160a060020a038316151561053257600080fd5b336000908152600160209081526040808320600160a060020a0387168452909152902054610566908363ffffffff61095716565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b60006105d6336106c9565b15156105e157600080fd5b6105eb8383610970565b50600192915050565b600160a060020a031660009081526020819052604090205490565b60408051808201909152600381527f424d540000000000000000000000000000000000000000000000000000000000602082015281565b61064f336106c9565b151561065a57600080fd5b61066381610a1a565b50565b61066f33610a62565b565b6000600160a060020a038316151561068857600080fd5b336000908152600160209081526040808320600160a060020a0387168452909152902054610566908363ffffffff61084e16565b60006105eb338484610865565b60006106dc60038363ffffffff610aaa16565b92915050565b60006106ee84846103f5565b5083600160a060020a031660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e019050604051809103902060e060020a9004338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a03168152602001828051906020019080838360005b838110156107d25781810151838201526020016107ba565b50505050905090810190601f1680156107ff5780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000875af192505050151561050c57600080fd5b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000808383111561085e57600080fd5b5050900390565b600160a060020a03831660009081526020819052604090205481111561088a57600080fd5b600160a060020a038216151561089f57600080fd5b600160a060020a0383166000908152602081905260409020546108c8908263ffffffff61084e16565b600160a060020a0380851660009081526020819052604080822093909355908416815220546108fd908263ffffffff61095716565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561096957600080fd5b9392505050565b600160a060020a038216151561098557600080fd5b600254610998908263ffffffff61095716565b600255600160a060020a0382166000908152602081905260409020546109c4908263ffffffff61095716565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610a2b60038263ffffffff610ae116565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b610a7360038263ffffffff610b2f16565b604051600160a060020a038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6000600160a060020a0382161515610ac157600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b600160a060020a0381161515610af657600080fd5b610b008282610aaa565b15610b0a57600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b600160a060020a0381161515610b4457600080fd5b610b4e8282610aaa565b1515610b5957600080fd5b600160a060020a0316600090815260209190915260409020805460ff191690555600a165627a7a72305820469e7642b2a9646c4e2d10156227d75075f0366a7945979fdd5a9251be34ebaa0029',
    //         gas: '4700000'
    //     }, function (e, contract){
    //         console.log(e, contract);
    //         if (typeof contract.address !== 'undefined') {
    //             console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    //         }
    //     });
    return token1;
}

// $("#real_log").click(function () {
//     // console.log(get_token1());
//     //for test
//     // window.location.href = "#marco";
//     //more...
//     var token1 = get_token1();
//     var tokens = 1000000000000;
//     var this_account = get_account();
//     // console.log(this_account);
//     token1.mint(this_account, tokens, function (err, res) {
//         if(err) console.error(err);
//     });
// });

function query(account){
    // 没有完全调好
    var token1 = get_token1();
    console.log(token1);
    var k = 0;
    token1.balanceOf(account, function (err, res) {
        if(err)    console.error(err);
        else    k = res['e'];
    });
    return k;
}
// form.submit();
