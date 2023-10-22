import {ethers} from "ethers";
import fetch from "node-fetch";

export async function walletWatcher(): Promise<HttpResponse> {
  try {
    let RPC_URL = process.env.RPC_URL

    // provider
    const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(RPC_URL)

    // get block number / other rpc call
    let blockNumber = await provider.getBlockNumber()

    // persist data
    let timestamp = Math.floor(Date.now() / 1000)
    await persistData(timestamp, blockNumber)

    return {
      statusCode: 200,
      body: JSON.stringify({
          "timestamp": timestamp,
          "blockNumber": blockNumber,
      })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        "error": error
      })
    }
  }
}

async function persistData(timestamp: number, blockNumber: number) {
  try {
    // todo: 
  } catch (error) {
    console.error(`persistence error: ${error.message}`);
    throw error
  }
}

interface HttpResponse {
  statusCode: number
  body?: string
}
