import styled from 'styled-components'

export const PeopleItem = styled.li`
  height: 30px;
  cursor: pointer;
  transition: .3s;
  border-bottom: 1px solid;
  position: relative;
  &:hover {
    background: #dedede;
  }   
  .btn {
    transform: scale(0);
  }
  &:hover .btn {
    transform: scale(1);
  }
  
  p {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.open {
      background: #dedede;
    }
  }
`
