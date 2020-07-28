import styled, {css} from "styled-components";
import House from "../../assets/images/house.jpg"
import React from 'react';

export const GridCard =  styled.article`
    grid-template-rows: auto;
`


export const ListCardInfo = styled.div`
    grid-area: bottom;
    grid-template-rows: repeat(3,auto);
    display: grid;
    grid-template-columns: 1fr;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-height: 86px;
    padding: 5px 8px 7px;
`

export const ListCardLink = styled.a`
    display: grid;
    -webkit-box-ordinal-group: 3;
    order: 2;
`
export const ListCardAddress = styled.address`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 5px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
`

export const ListCardFooter = styled.div`
    grid-row: 3/4;
    grid-template-columns: auto 1fr;
    display: grid;
    -webkit-box-ordinal-group: 4;
    order: 3;
    display: -webkit-box;
    display: flex;
    flex-direction: row;
    webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
`

export const ListCardType = styled.div`
    margin-top: 3px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    -webkit-box-ordinal-group: 2;
    order: 1;
`

export const ListCardTypeIcon = styled.div`
    margin-right: 5px;
    line-height: 1;
    vertical-align: middle;
    font-size: 10px;
`

export const ListCardHeading = styled.div`
    margin-bottom: 0;
    grid-row: 1/2;
    -webkit-box-align: end;
    align-items: end;
    grid-template-columns: auto 1fr;
    display: grid;
    line-height: 1;
    margin-bottom: 9px;
    -webkit-box-ordinal-group: 2;
    order: 1;
`

export const ListCardPrice = styled.div`
    display: Inline-block;
    font-size: 24px;
    height: 32px;
    font-weight: 24px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 0;
`

export const ListCardDetails =  styled.ul`
    display: inline;
    font-size: 14px;
    font-weight: 600;
    list-style: none;
    margin-left: 15px;
    max-width: 100%;
    margin-bottom: 5px;
    text-align: right;
`

export const ListCardLabel = styled.abbr`
    font-size: 14px;
    font-weight: 400;
`

export const ListCardTop = styled.div`
    grid-area: top;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    overflow: hidden;
    position: relative;
`

export const ListCardVariableTextOverlay = styled.div`
    transition: opacity .2s linear;
    place-self: start;
    grid-area: 1/1/-1/-1;
    position: absolute;
    overflow: hidden;
    max-width: calc(100% - 40px);
    left: 0;
    top: 0;
    background: rgba(0,0,0,.54);
    color: #FFF;
    padding: 5px 15px;
    font-size: 13px;
    z-index: 1;
`

export const PriceReduction = styled.span`
    margin-left: -3px;
`

export const ListCardBrokerage = styled.div`
    grid-area: auto;
    -webkit-transition: opacity .2s linear;
    transition: opacity .2s linear;
    background: 0 0;
    width: 100%;
    padding-bottom: 10px;
    text-align: right;
    text-shadow: 1px 1px 0 rgba(0,0,0,.25);
    bottom: 0;
    right: 0;
    z-index: 1;
`


export const ListCardTruncate = styled.div`
    margin: 0;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const ListCardImg = styled.a`
    padding-top: 41.67%;
    content: '';
    display: block;
    padding-top: 53.33%;
    overflow: hidden;
    position: relative;
    background-color: #F1F1F4;
`
export const CardImg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 100%;
    width: 100%;
    height: auto;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
`

export const ListButtonSave = styled.button`
    align-self: start;
    justify-self: end;
    grid-area: 1/1/-1/-1;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    background: 0 0;
    border: 0;
    right: 0;
    top: 0;
`

export const ListCardSaveContent = styled.span`
    display: block;
    width: 44px;
    padding: 8px 8px 5px;
    -webkit-filter: drop-shadow(0 0 1px rgba(0, 0, 0, .66));
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, .66));
    -webkit-transition: -webkit-filter .2s ease-out;
    transition: -webkit-filter .2s ease-out;
    transition: filter .2s ease-out;
    transition: filter .2s ease-out,-webkit-filter .2s ease-out;
`


export const Card = () => {
    return (
        <GridCard>
            <ListCardInfo>
                <ListCardLink>
                    <ListCardAddress>
                        18800 Egret Bay Blvd APT 608, Houston, TX 77058
                    </ListCardAddress>
                </ListCardLink>
                <ListCardFooter>
                    
                        <ListCardType>
                            <ListCardTypeIcon>
                                Townhouse for sale
                            </ListCardTypeIcon>
                        </ListCardType>
                  
                </ListCardFooter>
                <ListCardHeading>
                    <ListCardPrice>
                        $113, 500
                    </ListCardPrice>
                     <ListCardDetails>
                        <li>
                        <ListCardLabel>
                            bds
                        </ListCardLabel>
                        </li>
                         <li>
                         <ListCardLabel>
                            ba
                        </ListCardLabel>
                         </li>
                         <li>
                         <ListCardLabel>
                            sqrt
                        </ListCardLabel>
                         </li>
                    </ListCardDetails>
                </ListCardHeading>
            </ListCardInfo>
            <ListCardTop>
                <ListCardVariableTextOverlay>
                    <PriceReduction>
                        Price cut: $5, 000 (May 10)
                    </PriceReduction>
                </ListCardVariableTextOverlay>
            </ListCardTop>
            <div>
                <ListCardBrokerage>
                    <ListCardTruncate>
                        Executive Real Estate Services
                    </ListCardTruncate>
                </ListCardBrokerage>
                <ListCardImg href="">
                <CardImg src={House}></CardImg>
                </ListCardImg>
            </div>
            <ListButtonSave>
                <ListCardSaveContent>

                </ListCardSaveContent>
            </ListButtonSave>
        </GridCard>
    )
}

export default Card