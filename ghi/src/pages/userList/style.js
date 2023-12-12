import styled from 'styled-components';
import Background from '../../images/UserList.jpg';

export const ImgBackground = styled.div`
    background-image: url(${Background});
    min-height: 60vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px 0;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 40px;

    button {
        height: 24px;
    }
`;
