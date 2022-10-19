import Typography from '@mui/material/Typography';
import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';
import { TextBox } from '../../components/TextBox';
import { Container, TextBoxContainer } from './styles';
import selfphoto from '../../assets/selfphoto.png';

const GreetingsPage: React.FC = () => {
  return (
    <>
      <Container>
        <TextBoxContainer>
          <Typography variant="h6" component="h3">
            Olá, me chamo
          </Typography>
          <TextBox title="Eugênio Araújo" subtitle="Front-  End Developer">
            Amante da tecnologia desde 2019, em meu tempo livre sempre busco
            estar me desafiando, e faço isso através de projetos pessoais como
            este. Como programador, busco sempre manter meu código limpo, apesar
            de que algo sempre poderá, ainda, ser melhorado. Por fim,
            atualmente, busco uma vaga de estágio para que possa por em prática
            tudo aquilo que venho aprendendo e me esforçando para alcançar!!
          </TextBox>
          <Button
            variant="outlined"
            target="blank"
            href="https://drive.google.com/file/d/17Q7WIj2kqmsDrkIU83t0l36oeLZzCpSY/view?usp=sharing"
            endIcon={<ArrowForwardIcon />}
          >
            Currículo
          </Button>
        </TextBoxContainer>
        <Box
          component="img"
          sx={{
            // position: 'absolute',
            transform: 'translate(10%, -10%)',
            width: 350,
            borderRadius: 32,
            right: 50,
          }}
          alt="The house from the offer."
          src={selfphoto}
        />
      </Container>
    </>
  );
};

export default GreetingsPage;
