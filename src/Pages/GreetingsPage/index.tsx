import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { TextBox } from '../../components/TextBox';
import { Container, TextBoxContainer } from './styles';
import selfphoto from '../../assets/selfphoto.png';

export const GreetingsPage: React.FC = () => {
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
            Olá a todos!! me considero um desenvolvedor Front-End altamente
            habilidoso e dedicado, com experiência em diversas tecnologias
            importantes, incluindo React, Next.js, CSS, API REST, React Native e
            TypeScript. Como desenvolvedor Front-End, sou capaz de criar
            interfaces de usuário altamente responsivas e atraentes, além de
            trabalhar com API para conectar-se a servidores e extrair dados para
            minha aplicação. Além disso, tenho conhecimentos em TypeScript, o
            que me permite criar aplicativos mais robustos e escaláveis. Estou
            em busca de novas oportunidades para aplicar minhas habilidades e
            conhecimentos em um ambiente desafiador e colaborativo.
          </TextBox>
          <Button
            variant="outlined"
            target="blank"
            href="https://drive.google.com/drive/u/0/folders/1vdqkBKMDQfb7RnLfq_tkaQBV8eWjveBL"
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
