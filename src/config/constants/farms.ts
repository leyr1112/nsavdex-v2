import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'NSBC',
    lpAddresses: {
      97: '',
      56: '0xD310C37f53b3cF9c2A9F11c091659538199b2101',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'NSBC-BNB',
    lpAddresses: {
      97: '',
      56: '0xD310C37f53b3cF9c2A9F11c091659538199b2101',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'NSBC-BUSD',
    lpAddresses: {
      97: '',
      56: '0x77F11D95A913fCE01AC6BfE99dD07F17CE082641',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'NSBC-ETH',
    lpAddresses: {
      97: '',
      56: '0x2891E48beBd31a5B402eb9C1EaC1eAdd7701cEdF',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.busd,
  },
]

export default farms
