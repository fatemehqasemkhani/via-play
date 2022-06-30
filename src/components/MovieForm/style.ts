import styled from 'styled-components';

export const Form = styled.form`
  margin: 0;
  width: 100%;
  background: #fff;
  padding: 0 0 15px 0;
  border: 1px solid #e8e8e8;
  
  .container {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  
  h1 {
    padding-left: 15px;
  }
  
  .inputContainer {
    flex: 1;
    margin-left: 15px;
    
    .title {
      display: block;
      text-align: left;
    }
  }

  .submitButton {
    height: 40px;
    flex: 1;
    margin-left: 15px;
    margin-right: 15px;
  }
`