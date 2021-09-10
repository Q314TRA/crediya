import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const HeroWrapper = styled(BackgroundImage)`
    background-attachment: scroll;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.colors.themeColor};
`;

export const HeroTextBox = styled.div`
    max-width: 730px;
    width: 100%;
    @media ${device.small}{
        margin-top: 60px;
        text-align: center;
    }
`;

export const HeroBtnGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    @media ${device.small}{
        justify-content: center;
    }
    @media ${device.xsmall}{
        flex-wrap: wrap;
        margin-top: 20px;
    }
`;

export const ImageBox = styled.div`
    margin-left: -130px;
    margin-right: -200px;
    margin-top: 50px;
    display: flex;
    @media ${device.xxlarge}{
        margin-left: -80px;
        margin-right: 0px;
        margin-top: 100px;
    }
    @media ${device.medium}{
        margin-left: -50px;
    }
    @media ${device.small}{
        max-width: 300px;
        margin: auto;
        margin-top: 30px;
    }
    img{
        margin: 0 auto;
    }
`;