# Hardhat Smart Contract Project

This is a Hardhat project for developing and testing Ethereum smart contracts using TypeScript. The project is based on the [Hardhat TypeScript template](https://github.com/SagarKarmoker/typescript-hardhat).

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SagarKarmoker/typescript-hardhat.git
cd typescript-hardhat
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
├── contracts/          # Smart contracts directory
│   └── Lock.sol       # Sample smart contract
├── scripts/           # Deployment and other scripts
│   └── deploy.ts      # Contract deployment script
├── test/             # Test files
│   └── Lock.test.ts  # Sample test file
├── hardhat.config.ts # Hardhat configuration
└── tsconfig.json     # TypeScript configuration
```

## Available Scripts

### Compile Contracts
```bash
npx hardhat compile
```

### Run Tests
```bash
npx hardhat test
```

### Deploy Contracts
```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

### Start Local Hardhat Network
```bash
npx hardhat node
```

## Testing

The project uses Hardhat's built-in testing framework with Chai assertions. Tests are written in TypeScript and located in the `test/` directory.

Example test command:
```bash
npx hardhat test
```

## Deployment

1. Create a `.env` file in the root directory with your network configuration:
```
PRIVATE_KEY=your_private_key
ALCHEMY_API_KEY=your_alchemy_api_key
```

2. Deploy to a network:
```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

Available networks can be configured in `hardhat.config.ts`.

## Development

1. Write your smart contracts in the `contracts/` directory
2. Write tests in the `test/` directory
3. Create deployment scripts in the `scripts/` directory
4. Compile contracts: `npx hardhat compile`
5. Run tests: `npx hardhat test`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

[Sagar Karmoker](https://github.com/SagarKarmoker) 