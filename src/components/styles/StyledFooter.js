import styled from 'styled-components';

export const StyledFooter = styled.div`
  background: #1c1c1c;
  padding: 20px;
  color: #FFFFFF;
  height: 150px;
  
  .react-logo{
    font-size: 50px;
    border: 2px solid white;
    padding: 10px;
  }

  .footer-content{
    max-width: 1280px;
    min-height: 120px;
    padding: 0 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .statement{
    padding-top: 20px;
  }

  .statement span{
    color: #FF802C;
  }

  @media screen and (max-width: 1025px) {
    .footer-content{
      padding: 0 10%;
    }
    .react-logo{
      font-size: 35px;
      border: 2px solid white;
      padding: 20px;
      margin: 30px;
    }
  }

  @media screen and (max-width: 700px){
    .footer-content{
      padding: 0;
    }
    .react-logo{
      font-size: 30px;
      cursor: pointer;
      padding: 10px;
      border: 2px solid white;
    }
  }

  @media screen and (max-width: 550px) {
      max-width: 1280px;
      min-height: 300px;

      .footer-content{
      display:block;
      text-align: center;
    }
  }
`