import React from 'react'
import { nameDiv, imgDiv, statDiv, buyDiv } from '../common'
import ListRender from '../common/listRender'

const Marketplace = ({ otherCryptomons, isBuyMonLoading, buyMon }) => {
  return (
    <>
      <ListRender pageName="Marketplace" />

      {otherCryptomons &&
        otherCryptomons
          .filter((mon) => mon.forSale)
          .map((mon) => (
            <React.Fragment key={mon.id}>
              <div className="mon">
                <figure className="my-figure">
                  {nameDiv(mon)}
                  {imgDiv(mon)}
                  <figcaption>{statDiv(mon)}</figcaption>
                </figure>
                {buyDiv(mon, isBuyMonLoading, buyMon)}
              </div>
            </React.Fragment>
          ))}
    </>
  )
}

export default Marketplace
