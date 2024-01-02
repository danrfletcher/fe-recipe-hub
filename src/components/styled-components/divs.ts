import styled from "styled-components"

export const LeftNavSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    & > * {
        margin-right: 10px;
    }
    `

export const RightNavSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
    & > * {
        margin-left: 10px;
    }
    `

export const NavButtonBox = styled.div`
    height: 2.5em;
    width: 2.5em;
    border-radius: 10px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
        height: 100%;
        width: 100%;
        padding: 8px;
        fill: white;
    }
    `