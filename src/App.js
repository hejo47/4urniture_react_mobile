import "./App.css";
import Wrapper from "./components/UI/Wrapper";
import Container from "./components/UI/Container";
import Header from "./components/common/Header";
import ContentL from "./components/section/ContentL";
import imgtest from "./img/test.jpg";
import Inner from "./components/UI/Inner";
import ShowRoomFT from "./components/section/ShowRoomFT";
function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Container>
          <Header></Header>
          <Inner>
            <ContentL imgsrc={imgtest}></ContentL>
            <ContentL imgsrc={imgtest}></ContentL>
            <ShowRoomFT />
          </Inner>
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
