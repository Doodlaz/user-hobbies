import styled from 'styled-components'

export const HobbyBlock = styled.ul`
  .hobbies-list-item {
    width: 100%;
    display: flex;
    height: 30px;
    position: relative;
    border-bottom: 1px solid;
    
    p{
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-size: 16px;
      border-right: 1px solid;
      
      &:last-of-type{
        border-right: 0;
        padding-right: 49px;
      }
    }
  }
`
