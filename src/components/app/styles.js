import styled from 'styled-components'

export const People = styled.div`
  width: 40%;
  border: 1px solid;
`

export const Hobbies = styled.div`
  width: 100%;
  border: 1px solid;
`

export const Wrap = styled.div`
  display: flex;
  border: 1px solid;
  border-bottom: none;
  background: #f9f9f9;
  width: 800px;
  min-height: 120px;
    
  .input {
    flex: 1 1;
    display: flex;
    padding: 0 8px;
    outline: none;
    height: 30px;
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    border-right: 1px solid;
    font-size: 14px;
    box-sizing: border-box;
    background: #fff;
    transition: .3s;
    position: relative;
    z-index: 1;
    
    &.error {
      box-shadow: inset 0 0 18px -6px red;
    }
  }
    
  .select {
    flex: 1 1;
    display: flex;
    align-items: center;
    padding: 0 8px;
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    border-right: 1px solid;
    font-size: 14px;
    position: relative;
    background: #fff;
  }
  
  .btn {
    border: none;
    transition: .3s;
    cursor: pointer;
    outline: none;
    border-radius: 0;
    
    &_add {
      width: 40px;
      min-width: 40px;
      border-bottom: 1px solid;
      background: #fff;
      
      :hover {
        background: #dedede;
      }
    }
    
    &_remove {
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 14px;
      height: 14px;
      background: rgba(198, 150, 64, 1);
      box-shadow: inset 0 0 0 4px rgb(189, 35, 54);
      opacity: .75;
    
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 14px;
        height: 14px;
        transition: .3s;
        transform: scale(0);
        background: rgb(189, 35, 54);
      }
      &:hover {
        box-shadow: inset 0 0 0 0 rgb(189, 35, 54);
        :before {
          transform: scale(1);
        }
      }
    }
  }


  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
  
  input::placeholder{
    font-size: 12px;
    color: #ccc;
  }
`
