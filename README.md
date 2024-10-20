# Veil Trade

<img src="web-app/src/assets/images/veilTrade.jpeg" alt="logo" width="448" height="336" style="display:block;margin:0 auto">

VeilTrade is an on-chain private double auction DEX utilizing zero-knowledge proofs to facilitate private, large-scale trades without affecting the market. Unlike traditional DEXs, Veil Trade reduces slippage, eliminates the prevailing front-running attacks, and is optimized for low liquidity pools and institutional investors.

Decentralized Exchanges often struggle with significant market impact when they're faced with large-scale orders that exceed their existing liquidity. This prompts whales and institutional investors to migrate their assets to Centralized Exchanges (CEXs) when they're contemplating large-scale trades however in turn taking risk of "Whale alerts".
Veil Trade is essentially based on the concept of "dark-pools" in the traditional financial markets. It operates private double auction to ensure large scale trading for institutional investors. In the open auction, traders have to submit the zero-knowledge proofs of their balance along with their encrypted orders.

## Contract Addresses

All these contracts have been deployed to the Base Sepolia Testnet.

- cancelVerifier : `0x07AD9186f24776784f516c960192004AAf225880`
- settleVerifier : `0xE4B3B41C25bA0C68D007d62ef3fF215739a2b4FC`
- depositVerifier : `0x4ef0A04Fb545B77adCa6dDba7b1648ccF9b557f3`
- orderVerifier : `0xBCE2dd10f23Ac67557E1F2297f79E422211EE077`
- withdrawVerifier : `0x1457132Ef4b3A540Df50f7F781a3250489868d20`
- veilTrade : `0xCA8FC92970a4361d9219Cf5535F3cDFFB1C4f1B9`
