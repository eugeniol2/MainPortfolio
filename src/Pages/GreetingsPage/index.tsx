import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { TextBox } from '../../components/TextBox';
import { Container, TextBoxContainer } from './styles';
import selfphoto from '../../assets/selfphoto.png';

const GreetingsPage: React.FC = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      <Container>
        <TextBoxContainer>
          <TextBox
            Prefix="Olá, me chamo"
            title="Eugênio Araújo"
            subtitle="Front-  End Developer"
          >
            Amante da tecnologia desde 2019, em meu tempo livre sempre busco
            estar me desafiando, e faço isso através de projetos pessoais como
            este. Como programador, busco sempre manter meu código limpo, apesar
            de que algo sempre poderá, ainda, ser melhorado. Por fim,
            atualmente, busco uma vaga de estágio para que possa por em prática
            tudo aquilo que venho aprendendo.
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
          sx={
            lgDown
              ? {
                  width: 250,
                  borderRadius: 32,
                }
              : {
                  transform: 'translate(0%, -10%)',
                  width: 300,
                  borderRadius: 32,
                  right: 50,
                }
          }
          alt="picture"
          src={selfphoto}
        />
      </Container>
    </>
  );
};

export default GreetingsPage;
