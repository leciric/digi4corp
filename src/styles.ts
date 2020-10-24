import styled from 'styled-components';

import landingImg from './assets/landing.png';


export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

.content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1180px;
    
    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${landingImg}) no-repeat 80% center ;

    .enter-app {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
    height: 80px;

    background: #0198D8;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
}
main {
    max-width: 360px;
    color: #0198D8;

    h1 {
        font-size: 50px;
        font-weight: 600;
        line-height: 70px;
    }
    p {
        margin-top: 40px;
        font-size: 24px;
        line-height: 34px;
    }

}

    .developer{
    position: absolute;
    top: 0;
    right: 0;
    color: #0198D8;
    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;
    strong{
        font-weight: 800;
        }
    }
.enter-app:hover {
    background: #a65089;
}
}

`;

export const DownSide = styled.div`


    width: 100vw;
    max-width: 1920px;
    height: 90vh;
    max-height: 850px;

    color: #0198D8;

    display: flex;
    
    align-items: center;

    flex-direction: column;

    

    .content {
    position: relative;

    width: 100%;
    max-width: 1180px;
    
    height: 100%;
    max-height: 600px;

    display: flex;
    align-items: space;
    flex-direction: column;
    justify-content: space-evenly;

    border-bottom: 1px solid #a65089;


    h1 {
        font-size: 40px;
        font-weight: 600;
        line-height: 70px;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 30px;
    }

    .column {
        display: flex;
        flex-direction: row;
        flex-basis: 100%;
        flex: 1;
        align-items: center;
        justify-content: center;

        span { 
            margin-left: 10px;
            font-size: 20px;
        }
}

.paragraph {
    display: flex;
    flex-direction: row;
    text-align: right;

    justify-content: center;
    


    p {
        max-width: 500px;
        font-size: 20px;
    }

    .paragraph-left {
        text-align: left;
    }

    .paragraph-right {
        text-align: right;
    }
    }
}


`;

export const Footer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;

    img {
        width: 30%;
    }

    .contato {

        h1 {
            font-size: 25px;
        }
        
        .info{
        display: flex;
        flex-direction: column;
    }
    }





`;