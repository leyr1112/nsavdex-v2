import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, Heading } from '@pancakeswap/uikit'
import { useTotalValue } from 'state/farms/hooks'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  text-align: center;
  margin-left: 6px;
  margin-right: 6px;
  background: #113255;
  margin-top: 10px;
  margin-bottom: 10px;
  >div{
    background: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 33%;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const tvl = useTotalValue()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="xl" mb="40px">
            {t('Total Value Locked (TVL)')}
        </Heading>
        <>
          <CardValue value={parseInt(tvl.toString())} prefix="$" decimals={2}/>
          <Text color="textSubtle" mt="40px">{t('Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
