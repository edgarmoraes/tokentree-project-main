import React from "react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import { useVerifyMetadata } from "../hooks/useVerifyMetadata"
import { useIPFS } from '../hooks/useIPFS'
import { Card } from "react-bootstrap"

export default function User() {
    const [data, setData] = useState([])
    const [code, setCode] = useState('')

    const router = useRouter()
    const accountId = router.query.accountId

    const { chainId, isInitialized, enableWeb3, authenticate, logout, isWeb3Enabled, isAuthenticated, Moralis } = useMoralis()
    const { resolveLink } = useIPFS()

    const Web3Api = useMoralisWeb3Api()
    const ethers = Moralis.web3Library;
    var invalidAdress = true

    const options = {
        chain: 'eth',
        address: accountId,
    }

    const checkAddress = async (provider) => {
        const test = await provider.getCode(options.address)
        return test
    }

    const fecthAllNfts = async (options) => {
        console.log(options.address)
        const nfts = await Web3Api.account.getNFTs(options)
        return nfts
    }

    // useEffect(() => {
    //     if (isInitialized && accountId !== undefined) {
    //         console.log(accountId)
    //         const provider = ethers.getDefaultProvider()
    //         checkAddress(provider)
    //             .then((res) => {
    //                 setCode(res)
    //             })
    //             .then(() => {
    //                 console.log(code)
    //                 if (code == '0x') {
    //                     fecthAllNfts(options)
    //                         .then((res) => {
    //                             setData(res.result)
    //                         })
    //                 } else {
    //                     console.log("Invalid Address.")
    //                 }
    //             })
    //     }
    // }, [isInitialized, accountId])

    useEffect(() => {
        if (isInitialized && accountId !== undefined) {
            const provider = ethers.getDefaultProvider()
            checkAddress(provider)
                .then((res) => {
                    setCode(res)
                    console.log(code)
                })
                .then(() => {
                    fecthAllNfts(options)
                        .then((res) => {
                            setData(res.result)
                            console.log(data)
                        })
                })
        }
    }, [isInitialized, accountId])

    return (
        <section>
            <div>
                {data.map((nft, index) => {
                    if (nft.metadata !== null) {
                        return (
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Body>
                                    <Card.Img variant="top" src={resolveLink(JSON.parse(nft.metadata).image)}>
                                    </Card.Img>
                                    <Card.Title>
                                        {nft.name} #{nft.token_id}
                                    </Card.Title>
                                    {/* <Card.Text>
                                        {resolveLink(JSON.parse(nft.metadata).image)}
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        )
                    }
                })}
            </div>
        </section >
    )
}