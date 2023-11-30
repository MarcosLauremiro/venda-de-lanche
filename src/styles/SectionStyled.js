import styled from "styled-components";

export const SectionStyled = styled.section`
    width: 100%;
    max-width: 1000px;
    
    margin: 0 auto;

    ul{
        width: 100%;
        max-width: 1000px;

        display: flex;
        align-items: center;
        flex-wrap:wrap;
        justify-content: center;

        gap: 2rem;

        margin-top: 2rem;

        li{
            width: 260px;
            height: 350px;

            display: flex;
            flex-direction: column;
            justify-content: center;

            border: 2px solid var(--color-grey-100);
            border-radius: 0.4rem;

            &:hover{
                border: 2px solid var(--color-color-primary);
                border-radius: 0.4rem;
            }
            &:hover button{
                background-color: var(--color-color-primary);
            }

            .img_snake{
                display: flex;
                align-items: center;
                justify-content: center;

                height: 160px;
                width: 100%;
                max-width: inherit;

                background-color: #F5F5F5;

                border-radius: 0.4rem 0.4rem 0 0;
                img{
                            
                }
            }
            .info_snake{
                height: calc(350px - 160px);

                display: flex;
                flex-direction: column;
                align-items: start;
                gap: .8rem;

                padding: 1rem;
            }
            .button-add{
                padding: 1rem;
            }
        }
    }

    @media (max-width: 820px) {
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: start;

            overflow: auto;
        }
    }

`

export const ButtonStyled = styled.button`
    border: none;
    border-radius: .5rem;
    
    background-color: var(--color-grey-300);
    
    color: white;
    
    padding: .5rem 1rem;
    
    cursor: pointer;
`