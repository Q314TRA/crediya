import styled from "styled-components";
import { device } from "@theme";
import BackgroundImage from "gatsby-background-image";

// background: #F8F8F8;
// background-color: #015e7a;
export const SectionWrap = styled(BackgroundImage)`
    padding-top: 120px;
    padding-bottom: 105px;
    background-color: #FFFFFF;
    background-size: auto !important;
    background-position: bottom -10px right -30%;
    
    &:before,
    &:after{
        background-size: auto !important;
        background-position: bottom -10px right -30%;
    }

    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 45px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 25px;
    }
`;

export const HeaderWrap = styled.div`
    margin-right: 3rem;
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;

export const AppointmentFormWrap = styled.div`
    text-align: left;
`;