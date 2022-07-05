import React from 'react'
import { Heading, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FarmStakingCard from '../FarmStakingCard'
import TotalValueLockedCard from '../TotalValueLockedCard'
import TwitterCard from '../TwitterCard'

const Stats = () => {  
  const { t } = useTranslation()
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xxl" marginBottom="12px">
        {t('NSBC Finance')}
      </Heading>
      <Heading textAlign="center" scale="md" mb="32px">
        {t('Rewarding Binance Smart Chain Yield Farmers with NSBC, every day!')}
      </Heading>
      <Flex flexDirection={['column', null, null, 'row']} justifyContent="center">
        <FarmStakingCard />
        <TotalValueLockedCard />
        <TwitterCard />
      </Flex>
    </Flex>
  )
}

export default Stats
