import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
	--color-color-primary: #27ae60;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
	--color-grey-100: #e0e0e0;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
    }
    .title-1-styled{
        font: bold 1.625rem 'Inter', sans-serif ;
    }
    .title-2-styled{
        font: bold 1.375rem 'Inter', sans-serif ;
    }
    .title-3-styled{
        font: bold 1.125rem 'Inter', sans-serif ;
    }
    .title-4-styled{
        font: bold 1rem 'Inter', sans-serif ;
    }
    .text-1-styled{
        font: normal 0.875rem 'Inter', sans-serif ;
    }
    .text-2-styled{
        font: 600 0.875rem 'Inter', sans-serif ;
    }
    .text-3-styled{
        font: normal 0.75rem 'Inter', sans-serif ;
    }
`