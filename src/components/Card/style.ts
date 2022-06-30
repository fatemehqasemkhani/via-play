import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  background: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 0;
  height: 180px;
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
    
    .title {
      margin-bottom: 5px;
      border: none;
      text-align: left;
      padding: 0;
      font-size: 16px;
      color: #df3c3c;
      cursor: pointer;
      transition: all 0.5s ease-out;
      
      &:hover {
        color: #000;
      }
    }
  }
  
  .thumbnail {
    max-width: 120px;
    width: 100%;
    max-height: 100%;
  }
  
  .removeBtn {
    height: 30px;
    width: 80px;
    margin-top: auto;
    align-self: end;
  }
`