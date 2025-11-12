export type ProjectCategory = 'Backend' | 'Smart Contracts'  | 'Infra' | 'NFT' | 'Games'  | 'Frontend' | 'Bots' | 'AI'

export interface Project {
  id: string
  name: string
  category: ProjectCategory | ProjectCategory[]
  description: string
  tech: string[]
  image?: string
  images?: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'ChainPro',
    category: ['Backend'],
    description: 'ChainPro is the hedge fund-grade terminal for onchain trading.',
    tech: ['Go', 'Solana Web3', 'ethers.js', 'Multi-chain'],
    demo: 'https://chainpro.xyz/',
    image: '/chainpro/cover.jpg',
    images: ['/chainpro/cover.jpg', '/chainpro/image-1.jpg', '/chainpro/image-2.jpg', '/chainpro/image-3.jpg'],
  },
  {
    id: '2',
    name: 'FeeFree',
    category: ['Backend', 'Smart Contracts'],
    description: 'FeeFree is a decentralized exchange (DEX) that provides a fee-free DeFi experience with zero LP fees. FeeFree aims to minimize gas costs, with each transaction incurring only a nominal flat gas fee per transaction (less than $0.1 per transaction).',
    tech: ['Javascript', 'Solidity', 'GraphQL'],
    demo: 'https://app.feefree.fi/',
    image: '/feefree/cover.jpeg',
    images: ['/feefree/cover.jpeg', '/feefree/image-1.jpeg', '/feefree/image-2.jpeg'],
  },
  {
    id: '3',
    name: 'Legends of Elumia',
    category: ['Games', 'Backend', 'Smart Contracts'],
    description: 'Legends of Elumia is a next-generation, massively multiplayer online role-playing game(MMORPG), leading the way for players to gain full ownership of their in-game assets using revolutionary new mechanics.',
    tech: ['Go', 'Solana', 'Rust', 'Solana Web3'],
    demo: 'https://www.elumia.io/',
    image: '/elumia/cover.jpg',
    images: ['/elumia/cover.jpg', '/elumia/image-1.jpg', '/elumia/image-2.jpg'],
  },
  {
    id: '4',
    name: 'MemeDealer',
    category: ['Backend', 'Frontend'],
    description: 'Developed a comprehensive Rune Dex platform with a user-friendly interface, allowing users to explore and manage their runes efficiently. The platform includes features such as rune swapping, staking, and vesting options, ensuring a seamless and intuitive experience for users.',
    tech: ['Typescript', 'MongoDB', 'Bitcoin', 'Rune', 'BitcoinJs', 'React', 'Next.js'],
    demo: 'https://nft-marketplace-api.vercel.app',
    image: '/memedealer/cover.gif',
    images: ['/memedealer/cover.gif', '/memedealer/image-1.jpg'],
  },
  {
    id: '5',
    name: 'MinervaAI',
    category: ['Backend', 'AI'],
    description: 'MinervaAI specializes in AI-enabled financial crime technology. The company provides a standardized, intelligent, and automated solution to audit-proof Anti-Money Laundering (AML), Anti-Terrorist Financing (ATF) investigations, and Enhanced Due Diligence (EDD) at a fraction of the time and cost. AML and compliance programs cost financial institutions $180 billion globally. MinervaAI’s proprietary technology, deep understanding of AML processes, and strong Canadian banking relationships set the company up to facilitate AML data requirements for investigations and EDD, increasing productivity and accuracy for clients.',
    tech: ['Go', 'Amazon Web Services'],
    demo: 'https://www.cengn.ca/project/case-studies/minerva-ai/',
    image: '/minervaai/cover.jpg',
    images: ['/minervaai/cover.jpg'],
  },
  {
    id: '6',
    name: 'Monkai',
    category: ['Backend', 'Frontend', 'Smart Contracts', 'NFT'],
    description: 'Multi Chain NFT minting, swapping, and trading platform',
    tech: ['Rust', 'Solidity', 'Typescript', 'React', 'Next.js'],
    image: '/monkai/cover.jpg',
    images: ['/monkai/cover.jpg', '/monkai/image-1.jpg'],
  },
  {
    id: '7',
    name: 'Pine Instant NFT loans',
    category: ['Backend', 'NFT'],
    description: 'Pine is a decentralized non-custodial asset-backed financing protocol. Your gateway to real yield in NFT financing and beyond.',
    tech: ['Go', 'Typescript', 'Ethers.js'],
    demo: 'https://pine.loans/',
    image: '/pine/cover.jpg',
    images: ['/pine/cover.jpg', '/pine/image-1.jpg'],
  },
  {
    id: '8',
    name: 'Ribbon Finance',
    category: ['Smart Contracts', 'Backend'],
    description: 'Ribbon Finance is a new protocol that creates crypto structured products for DeFi. Structured products are packaged financial instruments that use a combination of derivatives to achieve some specific risk-return objective, such as betting on volatility, enhancing yields or principal protection.',
    tech: ['Solidity', 'Hardhat', 'Typescript', 'Ethers.js'],
    demo: 'https://www.ribbon.finance/',
    image: '/ribbon/cover.png',
    images: ['/ribbon/cover.png', '/ribbon/image-1.jpg', '/ribbon/image-2.jpg'],
  },
  {
    id: '9',
    name: 'Saint',
    category: ['Backend', 'Smart Contracts', 'Frontend'],
    description: '$SAINT is an AI agent that uses blockchain technology to transform complex blockchain data into streamlined, actionable insights. It leverages the power of AI and deep learning to provide real-time tracking, comprehensive analytics, and robust tools for both novice and seasoned crypto users. The mission of $SAINT is to empower users by delivering a comprehensive, AI-driven platform that simplifies blockchain interactions. It aims to make complex data accessible, understandable, and valuable for everyone in the crypto space.',
    tech: ['TypeScript', 'Solidity', 'Ethers.js', 'React','Next.js'],
    demo: 'https://satoshiaiagent.com/',
    image: '/saint/cover.webp',
    images: ['/saint/cover.webp'],
  },
  {
    id: '10',
    name: 'Signal21',
    category: ['Backend', 'Infra'],
    description: 'Signal21 is a Bitcoin data and research platform that helps investors, analysts, and builders track the Bitcoin economy, including Bitcoin Layer 2s, DeFi apps, corporate treasuries, and on-chain trends.',
    tech: ['Go', 'PostgreSQL', 'GraphQL'],
    demo: 'https://app.signal21.io/',
    image: '/signal21/cover.jpg',
    images: ['/signal21/cover.jpg', '/signal21/image-1.jpg'],
  },
  {
    id: '11',
    name: 'Unich',
    category: ['Backend', 'Smart Contracts'],
    description: 'Unich is an advanced exchange revolutionizing Pre-TGE Finance with three core values: fast, smart, and lowest fees. Our mission is to leverage blockchain technology to empower individuals and communities with financial control, as reflected in our slogan: \'Catch Your Freedom\'.',
    tech: ['Go', 'Rust', 'Solana Web3'],
    demo: 'https://unich.com/',
    image: '/unich/cover.png',
    images: ['/unich/cover.png', '/unich/image-1.png', '/unich/image-2.png'],
  }, 
  {
    id: '12',
    name: 'EVM-Bundler',
    category: ['Bots', 'Backend'],
    description: 'Simple EVM-Bundler - You can bundle your transactions to reduce the gas fees.',
    tech: ['Typescript', 'Ethers.js', 'Flashbots', "MEV-Share"],
    github: 'https://github.com/hinokamikagura/evm-bundler',
    image: '/evmbundler/cover.jpg',
    images: ['/evmbundler/cover.jpg'],
  }, 
  {
    id: '13',
    name: 'Solana Trading Bot',
    category: ['Bots', 'Backend'],
    description: 'Pumpfun & Raydium Bundler, Volume Bot, Copy Trading Bot, Sniper Bot, Arbitrage Bot',
    tech: ['Rust', 'Typescript', 'Jito Bundler'],
    image: '/solanatradingbot/cover.jpg',
    images: ['/solanatradingbot/cover.jpg'],
  }
]

