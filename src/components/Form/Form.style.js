import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 90%;
    min-width: 320px;
    height: 600px;
    
    form{
        padding: 10px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        font-size: 20px;
        color: #ffffff;
        border: 2px solid rgba(255,255,255, 0.2);
        background: transparent;
        backdrop-filter: blur(11px);
        height: 60%;
        label{
            margin: 20px 0;
        }
        input{
            background: transparent;
            outline: none;
            width: 80%;
            border: 0;
            border-bottom: 2px solid #fff;
            padding: 10px;
            &::placeholder{
                color: #ffffff;
            }
        }
        textarea{
            width: 80%;
            resize: none;
            outline: none;
            background: transparent;
            border: 0;
            border-bottom: 2px solid #fff;
            padding: 10px;            
            height: 70px;   
            margin-bottom: 10px;

        }
        button{
            width: 88%;
            height: 25px;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            background: #ffffff;
            &:hover{
                background: rgba(255,255,255, .9)
            }
        }
    }

`
export const FormMin = styled.div`
    padding: 10px;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,255,255, 0.2);
    background: transparent;
    backdrop-filter: blur(11px);
    
    p{
        display: block;
        color: #ffffff;
        font-size: 20px;
        text-align: center;
    }
`

