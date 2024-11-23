-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 22/11/2024 às 23:59
-- Versão do servidor: 8.3.0
-- Versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `jogos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogo`
--

DROP TABLE IF EXISTS `jogo`;
CREATE TABLE IF NOT EXISTS `jogo` (
  `id_jogos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  PRIMARY KEY (`id_jogos`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `jogo`
--

INSERT INTO `jogo` (`id_jogos`, `nome`, `categoria`, `descricao`) VALUES
(5, 'Resident evil 4', 'Ação', 'É um jogo de ação e survival horror que marcou uma grande mudança na franquia Resident Evil, ao introduzir uma perspectiva de câmera sobre o ombro em vez da tradicional visão fixa. O jogo segue o agente especial Leon S. Kennedy em uma missão para resgatar a filha do presidente dos Estados Unidos, Ashley Graham, sequestrada por um culto misterioso em uma aldeia rural na Espanha. O jogo mistura combate intenso, exploração e resolução de puzzles, enquanto Leon enfrenta uma série de inimigos infectados, conhecidos como Los Illuminados. A reimaginação de 2023 (Resident Evil 4 Remake) moderniza os gráficos e a jogabilidade, mantendo a essência do original.'),
(6, 'Unturned', 'Survival', 'É um jogo de sobrevivência em mundo aberto com gráficos em estilo blocky (similar ao estilo de Minecraft). O jogo se passa em um mundo pós-apocalíptico onde zumbis infestam a terra, e os jogadores precisam sobreviver coletando recursos, construindo abrigo e defendendo-se contra criaturas e outros jogadores. O jogo oferece modos single-player e multiplayer e é conhecido pela sua comunidade ativa e constante atualização, com novos conteúdos como armas, mapas e mecânicas de jogo sendo adicionados regularmente.'),
(7, 'Resident evil 5', 'Ação', 'Resident Evil 5 segue Chris Redfield e Sheva Alomar enquanto investigam uma nova ameaça bioterrorista na África. Os protagonistas enfrentam uma epidemia viral que transforma os habitantes em infectados. O jogo mantém a mesma perspectiva de câmera sobre o ombro de RE4, mas oferece uma experiência mais voltada para a ação, com maior ênfase em tiroteios e cooperativo online. O jogo inclui uma narrativa que lida com questões sobre bioterrorismo, com locais exóticos, uma grande variedade de inimigos e chefes desafiadores.'),
(8, 'Counter-Strike', 'First Person Shooter', 'Counter-Strike é um dos jogos de tiro mais icônicos da história dos eSports. O jogo original começou como um mod de Half-Life e, devido ao sucesso, foi transformado em um jogo independente. O objetivo de Counter-Strike é simples: jogadores se dividem entre terroristas e anti-terroristas, com os terroristas tentando plantar uma bomba e os anti-terroristas tentando impedi-los. O jogo se destaca pela tática de equipe, onde os jogadores devem colaborar estrategicamente para completar ou prevenir objetivos, além de escolher as melhores armas e equipar-se de forma eficiente.'),
(9, 'Valorant', 'First Person Shooter', 'Valorant é um jogo de tiro tático em primeira pessoa, onde equipes de cinco jogadores competem em rodadas para plantar ou desarmar uma bomba, ou eliminar a equipe adversária. Cada jogador escolhe um agente com habilidades únicas, como cura, bloqueio de visão, e outras habilidades táticas. O jogo é amplamente comparado a Counter-Strike, mas com a adição de habilidades especiais que proporcionam novas dinâmicas de jogo.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
