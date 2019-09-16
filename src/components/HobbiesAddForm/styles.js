import styled from 'styled-components'

export const AddHobbies = styled.form`
  width: 100%;
  display: flex;
  height: 30px;
  position: relative;
  
  .wrap {
    width: 100%;
    display: flex;
    padding-right: 39px;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-left: 1px solid;
  }
  
  .MuiInputBase-root {
    height: 100%;
  }
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    display: none;
  }
  input.MuiInputBase-input::-webkit-inner-spin-button{
    display: none;
    -webkit-appearance: none;
  }
  .Dropdown-placeholder:not(.is-selected) {
    font-size: 12px;
    color: #ccc;
  }
  .Dropdown-control {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    border: none;
    cursor: pointer;
    outline: none;
    height: 29px;
    transition: .3s;
  }
  .Dropdown-menu {
    border: 1px solid;
    position: absolute;
    top: 100%;
    right: -1px;
    left: -1px;
    background: #f9f9f9;
    z-index: 1;
  }
  .Dropdown-option {
    font-size: 14px;
    padding: 0 8px;
    height: 26px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .3s;
  }
  .Dropdown-option:hover {
    background: #dedede;
  }
  .Dropdown-arrow {
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    transition: .3s;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 5px solid #333;
  }
  .is-open .Dropdown-arrow {
    transform: rotate(180deg);
  }
`
