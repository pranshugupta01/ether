import React, { useState } from 'react';
import Web3 from 'web3';


const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/564d1029bb6d4c5aa8081904dea41eda'));



function App() {
  const [blockNumber, setBlockNumber] = useState('');
  const [blockData, setBlockData] = useState(null);
  const [contractAddress, setContractAddress] = useState('');
  const [contractData, setContractData] = useState(null);

  const handleBlock = () => {
    web3.eth.getBlock(blockNumber, (e, block) => {
      if (e) {
        console.error(e);
        setBlockData(null);
      } else {
        console.log(block);
        setBlockData(block);
      }
    });

      };



      // const handleContract = async (e) => {
        
      //   // setContractData(fetch);
      // };
  

   

    // const web3 = new Web3("https://mainnet.infura.io/v3/");

    const handleContract =  () => {


//       const c = new web3.eth.Contract(null, contractAddress);
//       const fetch = await c.methods.getPastEvents('allEvents', { fromBlock: 0, toBlock: 'latest' }).call();
//       const a= fetch.then((e)=>console.log(e));
//       console.log(a);
// }
      web3.eth.getBalance(contractAddress, (error, result) => {
        if (error) {
          // console.log(error);
          setContractData(null);
        } else {
          // console.log(result);
          setContractData(web3.utils.fromWei(result, "ether"));
        }
      });

    }
      // web3.eth.getCode(contractAddress, (error, res) => {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     // // console.log(res);
      //     // const transactionHash = web3.utils.sha3(contractAddress);
          // console.log(`Transaction hash: ${transactionHash}`);

          // web3.eth.getTransactionReceipt('0xfbf68ad353eaf0b0eee678d043d8c40f8a4f413db0df77a8afd30e0aeda8b1c0')
          // .then((r) => {
          //   if (r) {
          //     console.log(r);
          //   } else {
          //     console.log("receipt not available");
          //   }
          // })
          // .catch((e) => {
          //   console.log(e);
          // });






      
          
        //  const c=web3.eth.getTransactionReceipt(creationTransactionHash);
        //  alert(c.blockNumber);
            // if (error) {
            //   console.log(error);
            // } else if (!receipt) {
            //   console.log(`Transaction receipt not found for hash: ${creationTransactionHash}`);
            // } else {
            //   console.log(`Block number: ${receipt.blockNumber}`);
            // }
          
        // }
      // });

    

    
    //     if (err) {
    //       console.error(err);
    //       setContractData(null);
    //     } else {
    //       console.log(result);
    //       setContractData(result);
    //     }
    //   });
    // };
      // }







    return (
      <>

        <h2>Block</h2>
        <input type="text" placeholder='Block Number' value={blockNumber} onChange={(e) => setBlockNumber(e.target.value)} />
        <button onClick={handleBlock}>Get</button>

        {blockData && (
          <div>
            <h3>Block Number: {blockData.number}</h3>
            <p>Timestamp: {new Date(blockData.timestamp * 1000).toLocaleString()}</p>
            <p>Transactions: {blockData.transactions.length}</p>
          </div>
        )}

        <h2>Contract </h2>
        <input type="text" placeholder="Contract Address" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} />
       
        <button onClick={handleContract}>Get </button>

        {contractData && <p>Contract : {contractData} ethers</p>}
      </>
    );
  };
        
  export default App;
