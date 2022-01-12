import {Jumbotron} from "../components";
import JumboData from "../fixtures/jumbo.json";

const JumbotronContainer = () => {
  return (
    // 我们调用了Jumbotron组件，它是一个Compound Component，因此我们可以在这里随意进行组装。
    <Jumbotron.Container>
      {JumboData.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Image
              src={require(`../assets${item.image}`).default}
              alt={item.alt}
            />
            {/* 不知为何必须加一个.default才行 */}
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;
