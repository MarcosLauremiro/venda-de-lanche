import styled from "styled-components";

export const ModalStyled = styled.div`
    width: 100vw;
    height: 100vh;
    
    position: fixed;
    top: 0;

    background: rgba(245, 245, 245, .5);
    

    display: flex;
    align-items: center;
    justify-content: center;
    .modal__container{
        background-color: white;

        width:clamp(250px, 400px, 500px) ;
        height: clamp(150px, 360px, 400px) ;

        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;

        gap: .5rem;

        border-radius: 8px;
    }
    .headerModal{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        background-color: var(--color-color-primary);
        
        padding: 1rem;

        border-radius: 8px 8px 0 0;

        color: white;
    }
    .listSnake{
        width: 100%;
        height: calc(100% - 52px - 160px);
        ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;

            width: 100%;

            padding: 1rem;

            overflow: auto;   
        }
    }
    .total{
        width: 100%;
        height: 20px;
    
        padding: 2rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttom_clear{
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1rem;
        button{
            width: 100%;
            height: 40px;

            background-color: var(--color-grey-100);
            border: none;
            border-radius: .3rem;
        }
    }
    @media(max-width: 700px) {
        
    }
`

export const LiCarStyled = styled.li`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: .5rem;

    .info_snake{
        display: flex;
        justify-content: center;
        height: 100%;
        gap: .5rem;

        .img_snake{

            width: 80px;
            height: 80px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 4px;

            background-color: var(--color-grey-100);

            img{
                width: 60px;
            }
        }
        .name_snake{
            height: 100%;
        }
    }
    .button_lixo{
        button{
            background-color: transparent;
            border: none;
            img{
                cursor: pointer;
            }
        }
    }
`
