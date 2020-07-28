import styled from 'styled-components';


export const CustomButton = styled.button`
    font-family: "Open Sans", Tahoma, Geneva, sans-serif;
    letter-spacing: 0px;
    text-transform: none;
    text-align: center;
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    line-height: 22px;
    display: block;
    font-size: 12px;
    font-weight: 600;
    height: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin: 0px;
    text-decoration: none;
    transition: all 0.2s ease 0s;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-radius: 2px;
    outline: none;
    overflow: hidden;
    padding: 0px 5px;
    ${props => (props.borderColor ? `${props.borderColor};` : 'border-color: rgb(209, 209, 213);')};


    &:hover
   {
    ${props => (props.hoverColor ? `${props.hoverColor};` : 'border-color: rgb(209, 209, 213);')};
  }


`;
