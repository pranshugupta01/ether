import React, { useEffect, useState } from 'react';
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

    const handleContract =  () => {


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

    useEffect(() => {

    },[])    // fetch latest transactions

    useEffect(() => {

    },[])    // fetch lastest blocks 

    

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
