import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding: 1.5rem;

    background-color: var(--color-grey-100);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .header__container{
        width: 100%;
        max-width: ${({tamanho}) => tamanho}px;

        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between; 
        flex-wrap:wrap ;
    }
    .logo{
        width: 78%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;
        .titles{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            span{
                color: var(--color-color-secondary);
            }
        }

    .litle__car{
            div{
                background-color: transparent;
                border: none;

                width: fit-content;

                position: relative;

                cursor: pointer;

                &::after{       
                    content: ${({quanty}) => `'${quanty}'`};
                    background-color: green;
                    position: absolute;
                    top: -8px;
                    right: -2px;
                    border-radius: 5px;
                    font-size: 0.68rem;
                    padding: 3px;
                    color: white;
                    z-index: 10;
                    }
            }
        }

    }
    .heder_rigth{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        gap: 1.5rem;

        

    }
    .heder_rigth .search {
        display: flex;
        align-items: center;
        gap: .2rem;
    
        background-color: white;
        padding: 0.4rem;

        border-radius:  .4rem;

        input{
            height: 38px;
            padding: 1rem;
            width: 100%;

            border: none;
        }
        button{
            border: none;
            border-radius: .4rem;
            
            background-color: var(--color-color-primary);
            
            height: 32px;
            width: 42px;


        }
    }
    @media (max-width: 660px) {
        header{
            display: flex;
            align-items: center;
            justify-content: center;
            gap:1rem ;
        }
    }
    @media (max-width: 360px) {
        .logo{
            width: 100%;

            display: flex;
            justify-content: space-between;
        }
    }
`