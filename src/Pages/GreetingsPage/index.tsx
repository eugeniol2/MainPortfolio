import Typography from '@mui/material/Typography';
import React from 'react';
import PortraitCircles from '../../animations/PortraitCircles';
import { TextBox } from '../../components/TextBox';
import { Container, TextBoxContainer } from './styles';
import ResumeButton from '../../components/ResumeButton';

const GreetingsPage: React.FC = () => {
  return (
    <>
      <Container>
        <TextBoxContainer>
          <Typography variant="h6" component="h3">
            Olá, me chamo
          </Typography>
          <TextBox title="Eugênio Araújo">
            Amante da tecnologia desde 2019, em meu tempo livre sempre busco
            estar me desafiando, e faço isso através de projetos pessoais como
            este. Como programador, busco sempre manter meu código limpo, apesar
            de que algo sempre poderá, ainda, ser melhorado. Por fim,
            atualmente, busco uma vaga de estágio para que possa por em prática
            tudo aquilo que venho aprendendo e me esforçando para alcançar!!
          </TextBox>
          <ResumeButton>Curriculo</ResumeButton>
        </TextBoxContainer>
        <PortraitCircles />
      </Container>
    </>
  );
};

export default GreetingsPage;
