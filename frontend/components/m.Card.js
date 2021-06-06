import styled from '@emotion/styled';

function Card({ item }) {
    return (
        <Kotak>
                 <a href={'/m.personal/' + item.id} key={item.id} >
            <h5>{item.nama}</h5>
            <h6>{item.nim}</h6>
            <p dangerouslySetInnerHTML={{ __html: item.bidang }} />   
            </a>
        </Kotak>   
    )
}


const Kotak = styled.div`
top: 120%;
left: 39%;
margin-top: 30px;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 25px;
width: 350px;
padding: 40px;
background-color: #E62129;
box-sizing: border-box;
border-radius: 10px;
h5,h6,p{
    color: white;
`


export default Card