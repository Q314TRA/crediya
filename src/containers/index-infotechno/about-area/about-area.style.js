import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    background: #F8F8F8;
    padding-top: 120px;
    padding-bottom: 105px;
`;

export const LeftBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 40px;
    }
`;