-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2020 at 02:10 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `circlenet`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE `calendar` (
  `id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `on_date` varchar(200) NOT NULL,
  `event` varchar(200) NOT NULL,
  `discription` varchar(1000) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calendar`
--

INSERT INTO `calendar` (`id`, `user_id`, `on_date`, `event`, `discription`, `date_time`) VALUES
(1, 17, 'Jan 25 2020 ', 'event1', 'we will have class today', '2020-01-26 14:39:09'),
(2, 17, 'Apr 15 2021 ', 'vent1', 'we have math class ', '2020-01-26 14:41:14'),
(3, 17, 'Jan 20 2020 ', 'event1', 'jhasbdhashdbashdbashjdbasdsdbasjhdbajshdbjasdjhasdbjhasdbjasdbjasbdjhasbdasjhdbasjhdbasjhdbasjbdasjhdbjasdbjasdasjhdbasjhdbjasjdbasdbjhasjhdbjhasdbjhasbjhdasbjh', '2020-01-26 14:47:29'),
(4, 17, 'Jan 20 2020 ', 'event1', 'jhasbdhashdbashdbashjdbasdsdbasjhdbajshdbjasdjhasdbjhasdbjasdbjasbdjhasbdasjhdbasjhdbasjhdbasjbdasjhdbjasdbjasdasjhdbasjhdbjasjdbasdbjhasjhdbjhasdbjhasbjhdasbjh', '2020-01-26 14:47:34'),
(5, 17, 'Jan 20 2020 ', 'event1', 'jhasbdhashdbashdbashjdbasdsdbasjhdbajshdbjasdjhasdbjhasdbjasdbjasbdjhasbdasjhdbasjhdbasjhdbasjbdasjhdbjasdbjasdasjhdbasjhdbjasjdbasdbjhasjhdbjhasdbjhasbjhdasbjh', '2020-01-26 14:47:42'),
(6, 17, 'Jan 20 2020 ', 'event1', 'jhasbdhashdbashdbashjdbasdsdbasjhdbajshdbjasdjhasdbjhasdbjasdbjasbdjhasbdasjhdbasjhdbasjhdbasjbdasjhdbjasdbjasdasjhdbasjhdbjasjdbasdbjhasjhdbjhasdbjhasbjhdasbjh', '2020-01-26 14:47:50'),
(10, 17, 'Jan 25 2020 ', 'event time', 'event time', '2020-01-27 02:18:41');

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `id` int(200) NOT NULL,
  `id_number` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `section` varchar(200) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campus`
--

INSERT INTO `campus` (`id`, `id_number`, `name`, `department`, `section`, `date_time`) VALUES
(1, '123', 'Dire daws', 'Computer science', '2', '2019-12-28 17:21:17'),
(2, '12', 'dire', 'comp', '2', '2020-01-19 05:59:36');

-- --------------------------------------------------------

--
-- Table structure for table `chat_messages`
--

CREATE TABLE `chat_messages` (
  `id` int(200) NOT NULL,
  `sender_id` int(200) NOT NULL,
  `reciver_id` int(200) NOT NULL,
  `chat_messages` longtext NOT NULL,
  `seen` varchar(20) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat_messages`
--

INSERT INTO `chat_messages` (`id`, `sender_id`, `reciver_id`, `chat_messages`, `seen`, `date_time`) VALUES
(1, 14, 14, 'Cbbbb', 'Yes', '2020-01-12 13:27:41'),
(2, 14, 13, 'Cbbvbb', 'Yes', '2020-01-12 13:27:41'),
(3, 14, 13, 'Hello', 'Yes', '2020-01-13 18:34:03'),
(4, 14, 14, 'Hello ', 'Yes', '2020-01-12 13:27:41'),
(5, 14, 14, 'I am here', 'Yes', '2020-01-12 13:27:41'),
(6, 14, 14, 'Cbbcvbcccv', 'Yes', '2020-01-12 13:27:41'),
(7, 14, 14, 'Hello sir how are you doing?', 'Yes', '2020-01-12 13:27:41'),
(8, 14, 14, 'Are you fine dear seife akalu', 'Yes', '2020-01-12 13:27:41'),
(9, 14, 8, 'Hello sir', 'No', '2020-01-12 13:27:41'),
(10, 14, 8, 'Hello dear seife akalu how y doing', 'No', '2020-01-12 13:27:41'),
(11, 14, 12, 'Hello James bond', 'No', '2020-01-12 13:27:41'),
(12, 14, 14, 'James', 'Yes', '2020-01-12 13:27:41'),
(13, 14, 14, 'Jsjsnsnsnsnns snsnnsns. Susanna s banks s snakes sb', 'Yes', '2020-01-12 13:27:41'),
(14, 14, 14, 'Hhhnnn', 'Yes', '2020-01-12 13:27:41'),
(15, 14, 13, 'Bsbana', 'Yes', '2020-01-13 18:34:03'),
(16, 14, 13, 'Bbbb', 'Yes', '2020-01-13 18:34:03'),
(17, 14, 14, 'Hello', 'Yes', '2020-01-12 13:27:41'),
(18, 14, 14, 'Welcome', 'Yes', '2020-01-12 13:27:41'),
(19, 14, 14, 'Welcome', 'Yes', '2020-01-12 13:27:41'),
(20, 14, 13, 'Bnsns', 'Yes', '2020-01-13 18:34:03'),
(21, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(22, 14, 14, 'Hello there', 'Yes', '2020-01-12 13:27:41'),
(23, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(24, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(25, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(26, 14, 13, 'Gbbbb', 'Yes', '2020-01-13 18:34:03'),
(27, 14, 14, 'Ipdated', 'Yes', '2020-01-12 13:27:41'),
(28, 14, 14, 'Hhedvbb', 'Yes', '2020-01-12 13:27:41'),
(29, 14, 14, 'Hbb bn', 'Yes', '2020-01-12 13:27:41'),
(30, 14, 14, 'Ghhgv', 'Yes', '2020-01-12 13:27:41'),
(31, 14, 14, 'Hhgbvvvb', 'Yes', '2020-01-12 13:27:41'),
(32, 14, 14, 'Fghghggg', 'Yes', '2020-01-12 13:27:41'),
(33, 14, 14, 'Bbcdc', 'Yes', '2020-01-12 13:27:41'),
(34, 14, 14, 'Bjj', 'Yes', '2020-01-12 13:27:41'),
(35, 14, 14, 'Bbbbnn', 'Yes', '2020-01-12 13:27:41'),
(36, 14, 14, 'Vbnnbbnmbbbvgg', 'Yes', '2020-01-12 13:27:41'),
(37, 14, 14, 'Hjknn', 'Yes', '2020-01-12 13:27:41'),
(38, 14, 14, 'Hhhhh', 'Yes', '2020-01-12 13:27:41'),
(39, 14, 14, 'Vbnbb', 'Yes', '2020-01-12 13:27:41'),
(40, 14, 14, 'Gbcvv', 'Yes', '2020-01-12 13:27:41'),
(41, 14, 14, 'Gnvbb', 'Yes', '2020-01-12 13:27:41'),
(42, 14, 14, 'Gbvcvb', 'Yes', '2020-01-12 13:27:41'),
(43, 14, 14, 'Gbcvnnn', 'Yes', '2020-01-12 13:27:41'),
(44, 14, 14, 'Gbbbb', 'Yes', '2020-01-12 13:27:41'),
(45, 14, 14, 'Gbnbbbb', 'Yes', '2020-01-12 13:27:41'),
(46, 14, 14, 'Hshsbsb', 'Yes', '2020-01-12 13:27:41'),
(47, 14, 14, 'Dear', 'Yes', '2020-01-12 13:27:41'),
(48, 14, 14, 'Shshsh', 'Yes', '2020-01-12 13:27:41'),
(49, 14, 14, 'Ghcvb', 'Yes', '2020-01-12 13:27:41'),
(50, 14, 14, 'Cbvvv', 'Yes', '2020-01-12 13:27:41'),
(51, 14, 14, 'Vnvvvbj', 'Yes', '2020-01-12 13:27:41'),
(52, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(53, 14, 14, 'God help me', 'Yes', '2020-01-12 13:27:41'),
(54, 14, 14, 'Vbvvbb', 'Yes', '2020-01-12 13:27:41'),
(55, 14, 14, 'Cb', 'Yes', '2020-01-12 13:27:41'),
(56, 14, 14, 'Dear ', 'Yes', '2020-01-12 13:27:41'),
(57, 14, 14, 'Mmm', 'Yes', '2020-01-12 13:27:41'),
(58, 14, 14, 'God helped me', 'Yes', '2020-01-12 13:27:41'),
(59, 14, 14, 'God is with me', 'Yes', '2020-01-12 13:27:41'),
(60, 14, 14, 'He is with me', 'Yes', '2020-01-12 13:27:41'),
(61, 14, 14, 'Hes with me', 'Yes', '2020-01-12 13:27:41'),
(62, 14, 14, 'Hello', 'Yes', '2020-01-12 13:27:41'),
(63, 14, 14, 'Dear', 'Yes', '2020-01-12 13:27:41'),
(64, 14, 14, 'God is with me', 'Yes', '2020-01-12 13:27:41'),
(65, 14, 14, 'Ggggg', 'Yes', '2020-01-12 13:27:41'),
(66, 14, 14, 'Bnmnjn', 'Yes', '2020-01-12 13:27:41'),
(67, 14, 14, 'Hello', 'Yes', '2020-01-12 13:27:41'),
(68, 14, 14, 'Thank you god', 'Yes', '2020-01-12 13:27:41'),
(69, 14, 14, 'Hjnbbgfgh gv h g g jesus did did did d diced Judi d hudhdj hhhj.  Hhhjj hhhhhhhh.  Yhhhhhhh hhhh. Hhhh. Ahhh. High hhhh', 'Yes', '2020-01-12 13:27:41'),
(70, 14, 14, 'Hello', 'Yes', '2020-01-12 13:27:41'),
(71, 14, 14, 'Helks sjs disks djdjd djdjd jdjjd kdkjd kdjd jdjd jjjd jdkkd kdkdjd hdbbd jddjdbdd jddjdj jdjdjd jdjdjdbd jbbccgvvvv dddb', 'Yes', '2020-01-12 13:27:41'),
(72, 14, 14, 'Dear god', 'Yes', '2020-01-12 13:27:41'),
(73, 14, 14, 'Dear seo', 'Yes', '2020-01-12 13:27:41'),
(74, 14, 14, 'Hey', 'Yes', '2020-01-12 13:27:41'),
(75, 14, 14, 'Jemes', 'Yes', '2020-01-12 13:27:41'),
(76, 14, 14, 'Hello', 'Yes', '2020-01-12 13:27:41'),
(77, 14, 13, 'Dear', 'Yes', '2020-01-13 18:34:03'),
(78, 14, 14, 'Dear', 'Yes', '2020-01-12 13:27:41'),
(79, 14, 14, 'Gbbbvvbhh hh. Hv. Hh. Hhhhgccbb. Hh. Hhbbhhb ', 'Yes', '2020-01-12 13:27:41'),
(80, 14, 14, 'Gggg', 'Yes', '2020-01-12 13:27:41'),
(81, 14, 14, 'Ghhj', 'Yes', '2020-01-12 13:27:41'),
(82, 14, 14, 'Ghhj', 'Yes', '2020-01-12 13:27:41'),
(83, 14, 14, 'Ghjj', 'Yes', '2020-01-12 13:27:41'),
(84, 14, 14, 'Ghbbbj', 'Yes', '2020-01-12 13:27:41'),
(85, 14, 14, 'Hjjbb', 'Yes', '2020-01-12 13:27:41'),
(86, 14, 14, 'Bjkjjnnj', 'Yes', '2020-01-12 13:27:41'),
(87, 14, 14, 'Ggg', 'Yes', '2020-01-12 13:27:41'),
(88, 14, 14, 'Hgg', 'Yes', '2020-01-12 13:27:41'),
(89, 14, 14, 'Ddff', 'Yes', '2020-01-12 13:27:41'),
(90, 14, 14, 'Fhh', 'Yes', '2020-01-12 13:27:41'),
(91, 14, 14, 'Hhhvvb', 'Yes', '2020-01-12 13:27:41'),
(92, 14, 14, 'Dddddf', 'Yes', '2020-01-12 13:27:41'),
(93, 12, 12, 'test local', 'No', '2020-01-12 13:27:41'),
(94, 14, 14, 'Hshsbsbsnsnnsnsjsjs hands jssjjs shushed jsjsjs jsjsjsjs jsksjjs jsksksj ', 'Yes', '2020-01-12 13:27:41'),
(95, 14, 14, 'Hello Rajesh disks sjsisj sisisis sisisj isisjs isisis jsjs isjs v', 'Yes', '2020-01-12 16:10:58'),
(96, 14, 14, 'H', 'Yes', '2020-01-12 16:10:58'),
(97, 14, 14, 'Just ', 'Yes', '2020-01-12 16:10:58'),
(98, 14, 14, 'Ggh', 'Yes', '2020-01-12 16:10:58'),
(99, 14, 14, 'Bhjk', 'Yes', '2020-01-12 16:10:58'),
(100, 14, 14, 'Vnmm', 'Yes', '2020-01-12 16:10:58'),
(101, 14, 14, 'Gjghh', 'Yes', '2020-01-12 16:10:58'),
(102, 14, 14, 'Hjj', 'Yes', '2020-01-12 16:10:58'),
(103, 14, 14, 'Hey', 'Yes', '2020-01-12 16:10:58'),
(104, 14, 14, 'Bjk', 'Yes', '2020-01-12 16:10:58'),
(105, 14, 14, 'Ghj', 'Yes', '2020-01-12 16:10:58'),
(106, 14, 14, 'Ggg', 'Yes', '2020-01-12 16:10:58'),
(107, 14, 14, 'Chcvbvvbhbbbnnjjbghhh gghhhj ghjjj ghjjn ghhh hhgvvb yh', 'Yes', '2020-01-12 16:10:58'),
(108, 14, 14, 'Gjnbvjb vbbj hv vhj. Jjj. Jjj jjj hj ', 'Yes', '2020-01-12 16:10:58'),
(109, 14, 14, 'Fjmvhjvu ubjjj hj hh hj', 'Yes', '2020-01-12 16:10:58'),
(110, 14, 14, 'Gjnvujj hhjj hjj jik hjj hjk hik', 'Yes', '2020-01-12 16:10:58'),
(111, 14, 14, 'Chnnjghjj hbhhhhj hhjjjj hjjjjghh. Hjjj hjjkjggh hjhjfgh hjjnfgh hhjn', 'Yes', '2020-01-12 16:10:58'),
(112, 14, 14, 'Vbbbvhj hhj hjj jjjjj hjjjj jjjj. Ujjj hjjj hujj hjjj', 'Yes', '2020-01-12 16:10:58'),
(113, 14, 14, 'Hjnmhkknhjibujjjjb jj jk ui .uk jkk ui iii iik uik jjkk joo ikk jjjk', 'Yes', '2020-01-12 16:10:58'),
(114, 14, 14, 'Vjkvbjjnjk uk', 'Yes', '2020-01-12 16:10:58'),
(115, 14, 14, 'Bjkbjkljhnkohhjkk', 'Yes', '2020-01-12 16:10:58'),
(116, 14, 14, 'Cjjbghj', 'Yes', '2020-01-12 16:10:58'),
(117, 14, 14, 'Gsgshshs Susanna shushed jsjsjsj jsjsjs jsjsjs jsjsjs jsjsjsj jsjsjs jsjsjs hshshs hsjsjs hsjs', 'Yes', '2020-01-12 16:10:58'),
(118, 14, 14, '  Hello  than', 'Yes', '2020-01-12 16:10:58'),
(119, 14, 14, 'Fear brothers thank you for your remarkable help', 'Yes', '2020-01-12 16:10:58'),
(120, 14, 14, 'Jj', 'Yes', '2020-01-12 16:10:58'),
(121, 14, 14, 'Hh', 'Yes', '2020-01-12 16:10:58'),
(122, 14, 14, 'Gg', 'Yes', '2020-01-12 16:10:58'),
(123, 14, 14, 'Cbnbvvb', 'Yes', '2020-01-12 16:10:58'),
(124, 14, 14, 'Dhjhsjsjjsvzjsjsjs shushed jsjsjs jsjjs jsjsjs jsjsjs jdjsjd jsjs jsjsjs jdjsj jsjs jdjdj', 'Yes', '2020-01-12 16:10:58'),
(125, 14, 14, 'Ghhhhh', 'Yes', '2020-01-12 16:10:58'),
(126, 14, 14, 'Ha', 'Yes', '2020-01-12 16:10:58'),
(127, 14, 14, 'Haha', 'Yes', '2020-01-12 16:10:58'),
(128, 14, 14, 'Ghjjghh ghhh ghy ggyh gyy gyy. Ghyy ggygyyy gyy gyy ghh gyhh gyy gyh gyy gyyh yyy', 'Yes', '2020-01-12 16:10:58'),
(129, 14, 14, 'Hhhhhh', 'Yes', '2020-01-12 16:10:58'),
(130, 14, 14, 'Dis', 'Yes', '2020-01-12 16:10:58'),
(131, 14, 14, 'Hello', 'Yes', '2020-01-12 16:10:58'),
(132, 14, 14, 'Hjjjj', 'Yes', '2020-01-12 16:10:58'),
(133, 14, 14, 'Gjnvbhj', 'Yes', '2020-01-12 16:10:58'),
(134, 14, 14, 'Ghjbbb', 'Yes', '2020-01-12 16:10:58'),
(135, 14, 14, 'Dear', 'Yes', '2020-01-12 16:11:28'),
(136, 14, 14, 'Ghhhh', 'Yes', '2020-01-12 16:15:24'),
(137, 14, 14, 'Jjhhjj', 'Yes', '2020-01-12 16:20:30'),
(138, 14, 14, 'Hey', 'Yes', '2020-01-12 16:22:43'),
(139, 14, 14, 'Hello.there', 'Yes', '2020-01-12 16:23:18'),
(140, 14, 12, 'Hey man', 'No', '2020-01-12 16:24:59'),
(141, 14, 14, 'Hello', 'Yes', '2020-01-12 16:26:59'),
(142, 14, 14, 'How you', 'Yes', '2020-01-12 16:27:43'),
(143, 14, 14, 'Dear brother how are you doing?', 'Yes', '2020-01-12 16:30:46'),
(144, 14, 14, 'Hey', 'Yes', '2020-01-12 16:37:15'),
(145, 14, 14, 'How is life', 'Yes', '2020-01-12 16:38:40'),
(146, 14, 14, 'Mmmn', 'Yes', '2020-01-13 15:59:43'),
(147, 14, 14, 'Welcome', 'Yes', '2020-01-13 16:04:30'),
(148, 14, 14, 'Hjbbbj', 'Yes', '2020-01-13 16:04:59'),
(149, 14, 14, 'Hey', 'Yes', '2020-01-13 16:13:32'),
(150, 14, 14, 'testing123', 'Yes', '2020-01-13 16:46:16'),
(151, 14, 14, 'Hey', 'Yes', '2020-01-13 16:51:46'),
(152, 14, 14, 'Hello', 'Yes', '2020-01-13 16:52:58'),
(153, 14, 14, 'test>//??', 'Yes', '2020-01-13 16:53:55'),
(154, 14, 14, 'Mmii', 'Yes', '2020-01-13 16:55:54'),
(155, 14, 14, 'Ggg', 'Yes', '2020-01-13 17:05:20'),
(156, 14, 14, '::)', 'Yes', '2020-01-13 17:05:33'),
(157, 14, 14, ' Bb', 'Yes', '2020-01-13 17:06:03'),
(158, 14, 14, 'Geee', 'Yes', '2020-01-13 17:06:19'),
(159, 14, 14, 'Gebjv', 'Yes', '2020-01-13 17:06:38'),
(160, 14, 14, 'My', 'Yes', '2020-01-13 17:06:50'),
(161, 14, 14, 'Hhj', 'Yes', '2020-01-13 17:07:05'),
(162, 14, 14, ' Hey', 'Yes', '2020-01-13 17:07:38'),
(163, 14, 14, 'Hmm', 'Yes', '2020-01-13 17:07:59'),
(164, 14, 14, 'Jakob', 'Yes', '2020-01-13 17:08:19'),
(165, 14, 14, 'Geyyy', 'Yes', '2020-01-13 17:08:44'),
(166, 14, 14, 'Hello', 'Yes', '2020-01-13 17:09:11'),
(167, 14, 14, 'Dear sir', 'Yes', '2020-01-13 17:09:41'),
(168, 14, 14, 'Hey', 'Yes', '2020-01-13 17:12:24'),
(169, 14, 14, 'Hheee', 'Yes', '2020-01-13 17:13:14'),
(170, 14, 14, 'Brothers', 'Yes', '2020-01-13 17:13:58'),
(171, 14, 14, 'Mmmm', 'Yes', '2020-01-13 17:14:53'),
(172, 14, 14, 'Hhhhhhh', 'Yes', '2020-01-13 17:16:09'),
(173, 14, 14, 'Mmmmm', 'Yes', '2020-01-13 17:18:13'),
(174, 14, 14, 'Vjfhvghjk', 'Yes', '2020-01-13 17:19:18'),
(175, 14, 14, 'Huhu', 'Yes', '2020-01-13 17:20:24'),
(176, 14, 14, 'Mmmmm', 'Yes', '2020-01-13 17:22:19'),
(177, 14, 14, 'Nnn', 'Yes', '2020-01-13 17:23:16'),
(178, 14, 14, 'Mmmmmmmmm', 'Yes', '2020-01-13 17:24:00'),
(179, 14, 14, 'Hello', 'Yes', '2020-01-13 17:37:53'),
(180, 14, 14, 'Hey', 'Yes', '2020-01-13 17:40:10'),
(181, 14, 14, 'Hey', 'Yes', '2020-01-13 17:43:11'),
(182, 14, 14, 'Hey', 'Yes', '2020-01-13 17:46:13'),
(183, 14, 14, 'Vjj', 'Yes', '2020-01-13 17:56:13'),
(184, 14, 14, 'Hh', 'Yes', '2020-01-13 18:07:26'),
(185, 14, 14, 'We', 'Yes', '2020-01-13 18:07:41'),
(186, 14, 14, 'M', 'Yes', '2020-01-13 18:08:28'),
(187, 14, 14, 'Gjvjk hjj hj uj hkk jkk jkghj uikk uii hii uii hik uik jok hkk hjjv hjhj', 'Yes', '2020-01-13 18:10:28'),
(188, 14, 14, 'Welcome', 'Yes', '2020-01-13 18:18:18'),
(189, 14, 14, 'Welcome', 'Yes', '2020-01-13 18:22:19'),
(190, 14, 14, 'Wel', 'Yes', '2020-01-13 18:22:37'),
(191, 14, 14, 'Mmmm', 'Yes', '2020-01-13 18:22:53'),
(192, 14, 14, 'Eelcome', 'Yes', '2020-01-13 18:23:15'),
(193, 14, 14, 'Dear', 'Yes', '2020-01-13 18:25:49'),
(194, 14, 14, 'Mmmmm', 'Yes', '2020-01-13 18:26:54'),
(195, 14, 14, 'Hello', 'Yes', '2020-01-13 18:31:27'),
(196, 14, 14, 'Hey bro', 'Yes', '2020-01-13 18:32:37'),
(197, 14, 13, 'Hey', 'Yes', '2020-01-13 18:34:35'),
(198, 14, 14, 'Hey', 'Yes', '2020-01-13 18:41:02'),
(199, 14, 14, 'Gjjv hb jj hjj hjjj jjjv hjj hjj hjjj hjn jjj hjj', 'Yes', '2020-01-13 18:42:12'),
(200, 14, 13, 'Hello brother', 'Yes', '2020-01-13 18:45:32'),
(201, 14, 13, 'Heyyy', 'Yes', '2020-01-13 19:03:54'),
(202, 14, 14, 'Hey', 'Yes', '2020-01-13 18:52:21'),
(203, 14, 14, 'We rule', 'Yes', '2020-01-13 18:53:07'),
(204, 14, 13, 'Hello', 'Yes', '2020-01-13 19:07:40'),
(205, 14, 14, 'Bro', 'Yes', '2020-01-13 19:05:09'),
(206, 14, 14, 'fffff', 'Yes', '2020-01-13 19:06:17'),
(207, 14, 13, 'Hey', 'Yes', '2020-01-13 19:09:21'),
(208, 14, 13, 'Mmm', 'Yes', '2020-01-13 19:09:21'),
(209, 14, 13, 'Mmm', 'Yes', '2020-01-13 19:09:40'),
(210, 14, 13, 'Mmm', 'Yes', '2020-01-13 19:17:18'),
(211, 14, 13, 'Cbbbbbnnn jkk kk jkk jjv jjj uij uik hhj. U hhh hjj hij hjj hjj hjj hjk hjkk hjkk', 'Yes', '2020-01-13 19:17:18'),
(212, 14, 13, 'Haha', 'Yes', '2020-01-13 19:17:18'),
(213, 14, 14, 'Haha', 'Yes', '2020-01-13 19:12:23'),
(214, 14, 14, 'Dear bro', 'Yes', '2020-01-13 19:13:04'),
(215, 14, 14, 'Hey bro', 'Yes', '2020-01-13 19:15:15'),
(216, 14, 14, 'Mmaa', 'Yes', '2020-01-13 19:16:50'),
(217, 14, 14, 'Haha', 'Yes', '2020-01-13 19:18:21'),
(218, 14, 14, 'Hello', 'Yes', '2020-01-13 19:20:00'),
(219, 14, 14, 'Hgjb. Ghost hj hjj hkk hjk hjj ghj hhj hkk hkk gkklgh ::) gjkk gjkk hjkk hjkkg humble hkkj', 'Yes', '2020-01-13 19:22:07'),
(220, 14, 14, 'Fkmvgk hi hj jkggj jjj hjgh jkhb hjv. :-/ bj', 'Yes', '2020-01-13 19:24:11'),
(221, 14, 14, 'Hey', 'Yes', '2020-01-15 17:14:14'),
(222, 14, 14, 'Nn', 'Yes', '2020-01-15 17:14:55'),
(223, 14, 14, 'Welcome', 'Yes', '2020-01-15 17:16:26'),
(224, 14, 14, 'Vvvvv', 'Yes', '2020-01-15 17:19:43'),
(225, 14, 14, 'Vvvv', 'Yes', '2020-01-15 17:24:01'),
(226, 14, 14, 'Bbbb', 'Yes', '2020-01-15 17:25:57'),
(227, 14, 14, 'Vvvv', 'Yes', '2020-01-15 17:27:44'),
(228, 14, 14, 'Vvvvcvc', 'Yes', '2020-01-15 17:28:58'),
(229, 14, 14, 'Ggvv', 'Yes', '2020-01-15 17:29:08'),
(230, 14, 14, 'Nnnn', 'Yes', '2020-01-15 17:34:47'),
(231, 14, 14, 'Hhh', 'Yes', '2020-01-15 17:38:04'),
(232, 14, 14, 'Gvvv', 'Yes', '2020-01-15 17:40:29'),
(233, 14, 14, 'gttt', 'Yes', '2020-01-15 17:41:59'),
(234, 14, 14, 'Gvvv', 'Yes', '2020-01-15 17:43:42'),
(235, 14, 14, 'Hey', 'Yes', '2020-01-15 17:44:14'),
(236, 14, 14, 'Bbvv', 'Yes', '2020-01-15 17:47:45'),
(237, 14, 14, 'Gbbv', 'Yes', '2020-01-15 17:47:57'),
(238, 14, 14, 'Bbhhh', 'Yes', '2020-01-15 17:48:13'),
(239, 14, 14, 'Bbhhh', 'Yes', '2020-01-15 17:48:27'),
(240, 14, 14, 'Vvv', 'Yes', '2020-01-15 17:48:49'),
(241, 14, 14, 'Gyyy', 'Yes', '2020-01-15 17:49:08'),
(242, 14, 14, 'Gyyy', 'Yes', '2020-01-15 17:50:01'),
(243, 14, 14, 'He', 'Yes', '2020-01-15 17:53:19'),
(244, 14, 14, 'He', 'Yes', '2020-01-15 17:54:08'),
(245, 14, 14, 'Nn', 'Yes', '2020-01-15 17:56:11'),
(246, 14, 14, 'Nn', 'Yes', '2020-01-15 17:56:48'),
(247, 14, 14, 'Nnn', 'Yes', '2020-01-15 17:59:00'),
(248, 14, 14, 'Vvv', 'Yes', '2020-01-15 17:59:00'),
(249, 14, 14, 'Hhh', 'Yes', '2020-01-15 18:00:18'),
(250, 14, 14, 'Bbb', 'Yes', '2020-01-15 18:03:27'),
(251, 14, 14, 'Bbb', 'Yes', '2020-01-15 18:04:13'),
(252, 14, 14, 'Bbbb', 'Yes', '2020-01-15 18:05:03'),
(253, 14, 14, 'Hey', 'Yes', '2020-01-15 18:05:55'),
(254, 14, 14, 'Bra', 'Yes', '2020-01-15 18:06:18'),
(255, 14, 14, 'How yu', 'Yes', '2020-01-15 18:06:48'),
(256, 14, 14, 'Life is good! ', 'Yes', '2020-01-15 18:07:23'),
(257, 14, 14, 'Are you sure', 'Yes', '2020-01-15 18:07:45'),
(258, 14, 14, 'Thank you for unferstanfing', 'Yes', '2020-01-15 18:08:10'),
(259, 14, 14, 'We ethiopian can fevelop any thing', 'Yes', '2020-01-15 18:08:47'),
(260, 14, 14, 'I like programming', 'Yes', '2020-01-15 18:09:21'),
(261, 14, 14, ' Socket programming is cool', 'Yes', '2020-01-15 18:10:00'),
(262, 14, 14, 'Behind jdjdjd shushed shushed ididud ididid idiidid uduejjd udjdjdj jdudjd uufhdbrudggeueiidevdudueh disheveled heuehe ueueue hehehe usueje ueuehe ueueje ushehe', 'Yes', '2020-01-15 18:10:56'),
(263, 14, 14, 'Thanks', 'Yes', '2020-01-15 18:14:18'),
(264, 14, 14, 'Chat app', 'Yes', '2020-01-15 18:18:11'),
(265, 14, 14, 'Chat app', 'Yes', '2020-01-15 18:18:30'),
(266, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance and upgrades.', 'Yes', '2020-01-15 18:21:27'),
(267, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance and upgrades.', 'Yes', '2020-01-15 18:22:22'),
(268, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve th', 'Yes', '2020-01-15 18:24:11'),
(269, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain', 'Yes', '2020-01-15 18:24:48'),
(270, 14, 14, 'Ghhhyy', 'Yes', '2020-01-15 18:30:38'),
(271, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we ', 'Yes', '2020-01-15 18:41:58'),
(272, 14, 14, 'Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for futures maintenance Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future Seife Akalu:\nby the way. i have read some part of the website, and after this task has been completed. if you allow me i want to implement the user page with codeIgniter. voucher activation and device information should be solved right? no one should use some ones username for watching videos and voucher activation related issues. this and other related functionality should be implemented. \ni want to arrange and solve the back-end, when we maintain each functionality their was messed up means core PHP with Laravel,  with better functionality this\'ll help you for future maintenance and upgrades. and upgrades. maintenance and upgrades. and upgrades.  future maintenance and upgrades. and upgrades. and upgrades. and upgrades. upgrades. upgrades. upgrades. upgrades. upgrades. ', 'Yes', '2020-01-15 18:48:50'),
(273, 14, 14, 'Hey', 'Yes', '2020-01-16 06:37:10'),
(274, 14, 14, 'Sbjzjzjsjs sjsjjd dudidj jdkdkd hdjdj jdjdj hdjdj shushed jdjd ddiidjd dudud jdjdj hdjdj jdjdh jdjdj', 'Yes', '2020-01-16 06:38:02'),
(275, 14, 14, 'Rwrlcome to ', 'Yes', '2020-01-16 06:42:10'),
(276, 14, 14, 'hey you', 'Yes', '2020-01-16 08:30:48'),
(277, 14, 14, 'yop', 'Yes', '2020-01-16 08:35:33'),
(278, 14, 14, 'Brisbane jesus shush shushed jsjsjd skins jsjjd jsjdjd jdjdhd shushed shush', 'Yes', '2020-01-16 08:35:59'),
(279, 14, 14, 'Welcomr sjdjjd sjsjdj sjdjd djdjjd shushed hands jsjdjd sbdhd shdjd shushed shushed djjdd ', 'Yes', '2020-01-16 08:36:28'),
(280, 14, 14, 'Hey u', 'Yes', '2020-01-16 18:15:17'),
(281, 14, 14, 'Hahaha', 'Yes', '2020-01-16 18:15:43'),
(282, 14, 14, 'Bsbsb', 'Yes', '2020-01-16 18:15:48'),
(283, 14, 14, 'Hey u', 'Yes', '2020-01-16 18:16:55'),
(284, 14, 14, 'Welcome', 'Yes', '2020-01-16 18:19:06'),
(285, 14, 13, 'Bshsbs', 'Yes', '2020-01-17 08:15:43'),
(286, 14, 13, 'Bsbs', 'Yes', '2020-01-17 08:15:43'),
(287, 14, 13, 'Bzns', 'Yes', '2020-01-17 08:15:43'),
(288, 14, 14, 'Gey u', 'Yes', '2020-01-16 18:31:47'),
(289, 14, 14, 'Nsns', 'Yes', '2020-01-16 18:31:56'),
(290, 14, 14, 'Jsns', 'Yes', '2020-01-16 18:31:56'),
(291, 14, 14, 'WE', 'Yes', '2020-01-16 18:32:30'),
(292, 14, 14, 'Bzns', 'Yes', '2020-01-16 18:32:30'),
(293, 14, 14, 'Nsns', 'Yes', '2020-01-16 18:32:30'),
(294, 14, 14, 'Snsn', 'Yes', '2020-01-16 18:32:31'),
(295, 14, 14, ' Nsnsn', 'Yes', '2020-01-16 18:32:31'),
(296, 14, 14, 'Banks', 'Yes', '2020-01-16 18:32:31'),
(297, 14, 14, 'Banks', 'Yes', '2020-01-16 18:34:09'),
(298, 14, 14, 'Hey', 'Yes', '2020-01-16 18:34:46'),
(299, 14, 14, 'Ddd', 'Yes', '2020-01-17 07:25:57'),
(300, 14, 14, 'Fssc', 'Yes', '2020-01-17 07:26:34'),
(301, 14, 14, 'Ggg', 'Yes', '2020-01-17 07:29:41'),
(302, 14, 14, 'We care', 'Yes', '2020-01-17 07:30:58'),
(303, 14, 14, 'L', 'Yes', '2020-01-17 07:40:12'),
(304, 14, 14, 'Gg', 'Yes', '2020-01-17 07:42:07'),
(305, 14, 14, 'Hjk', 'Yes', '2020-01-17 07:44:36'),
(306, 14, 14, 'Gjjgg', 'Yes', '2020-01-17 07:47:49'),
(307, 14, 14, 'Hj', 'Yes', '2020-01-17 07:52:39'),
(308, 14, 14, 'H', 'Yes', '2020-01-17 07:56:22'),
(309, 14, 14, 'You', 'Yes', '2020-01-17 08:03:54'),
(310, 14, 14, 'Mms', 'Yes', '2020-01-17 08:05:28'),
(311, 14, 14, 'Bjk', 'Yes', '2020-01-17 08:07:09'),
(312, 14, 14, 'Hey', 'Yes', '2020-01-17 08:07:52'),
(313, 14, 14, 'Hey', 'Yes', '2020-01-17 08:09:31'),
(314, 14, 14, 'Ggh', 'Yes', '2020-01-17 08:13:16'),
(315, 14, 14, 'Ghh', 'Yes', '2020-01-17 08:14:26'),
(316, 14, 14, 'Gjjb', 'Yes', '2020-01-17 08:15:10'),
(317, 14, 13, 'Hey u', 'No', '2020-01-17 08:15:53'),
(318, 14, 14, 'Hh', 'Yes', '2020-01-17 08:24:19'),
(319, 14, 14, 'Hhh', 'Yes', '2020-01-17 08:24:59'),
(320, 14, 14, 'Cx', 'Yes', '2020-01-17 08:31:53'),
(321, 14, 14, 'Cf', 'Yes', '2020-01-17 08:34:39'),
(322, 14, 14, 'Abaj', 'Yes', '2020-01-17 08:34:59'),
(323, 14, 14, 'Hfggb', 'Yes', '2020-01-17 08:38:58'),
(324, 14, 14, 'Hey', 'Yes', '2020-01-17 08:41:31'),
(325, 14, 14, 'Uuu', 'Yes', '2020-01-17 08:43:41'),
(326, 14, 14, 'Gwe', 'Yes', '2020-01-17 08:46:01'),
(327, 14, 14, 'Fhhb', 'Yes', '2020-01-17 08:48:58'),
(328, 14, 14, 'Ghbbjfghhhb ghh ggh ghhj hhh hhhj hh hhh hh hhh', 'Yes', '2020-01-17 08:49:27'),
(329, 14, 14, 'Bzbsns disks shush shushed used sushi jesus sushi usus disks sushi shushed sushi she\'s sushi sushi dishwashers jesus used usus hdus isjs', 'Yes', '2020-01-17 08:50:11'),
(330, 14, 14, 'Sez', 'Yes', '2020-01-17 08:52:37'),
(331, 14, 14, 'Gee', 'Yes', '2020-01-17 08:55:24'),
(332, 14, 14, 'Fghfffgg', 'Yes', '2020-01-17 08:55:58'),
(343, 14, 17, 'Ggg', 'Yes', '2020-01-19 09:10:21'),
(344, 14, 17, 'Welcome', 'Yes', '2020-01-19 09:10:21'),
(345, 14, 17, 'Dear', 'Yes', '2020-01-19 09:10:21'),
(347, 14, 17, 'Ello', 'Yes', '2020-01-19 09:10:21'),
(348, 14, 17, 'Fhmj hu hh hj hj hjjj hjk jkk hjj hj hj', 'Yes', '2020-01-19 09:10:21'),
(372, 17, 17, 'fff', 'Yes', '2020-01-19 15:23:16'),
(373, 17, 17, 'hello', 'Yes', '2020-01-19 15:25:28'),
(374, 17, 17, 'j', 'Yes', '2020-01-19 15:27:37'),
(375, 17, 17, 'jk', 'Yes', '2020-01-19 15:30:17'),
(376, 17, 17, 'germk', 'Yes', '2020-01-19 15:42:41'),
(379, 17, 17, 'asdasd', 'Yes', '2020-01-20 06:58:11'),
(380, 17, 17, 'dealll', 'Yes', '2020-01-20 07:01:47'),
(381, 17, 17, 'asdasdasd', 'Yes', '2020-01-20 07:05:20'),
(382, 17, 17, 'hBjhsbas', 'Yes', '2020-01-20 07:16:18'),
(383, 17, 17, 'kkkk', 'Yes', '2020-01-20 07:26:01'),
(385, 17, 17, 'welcome to ethiopia', 'Yes', '2020-01-20 07:34:16'),
(386, 17, 17, 'gegeegeg', 'Yes', '2020-01-20 07:36:43'),
(387, 17, 17, 'ggg', 'Yes', '2020-01-20 07:41:53'),
(388, 17, 17, 'gmail login', 'Yes', '2020-01-20 07:44:13'),
(389, 17, 17, 'delete message', 'Yes', '2020-01-20 07:45:11'),
(390, 17, 17, 'delete message', 'Yes', '2020-01-20 07:46:26'),
(392, 17, 17, 'dear ethio', 'Yes', '2020-01-20 07:53:27'),
(393, 17, 17, 'lcome', 'Yes', '2020-01-20 07:54:18'),
(394, 17, 17, 'hhh', 'Yes', '2020-01-20 07:56:40'),
(395, 17, 17, 'dnadnasd', 'Yes', '2020-01-20 07:58:59'),
(396, 17, 17, 'welcome', 'Yes', '2020-01-20 08:00:49'),
(397, 17, 17, 'editer', 'Yes', '2020-01-21 07:45:42'),
(398, 17, 17, 'edited', 'Yes', '2020-01-21 07:45:22'),
(427, 17, 16, 'edited again and again', 'No', '2020-01-21 08:19:13'),
(429, 17, 17, 'edited again and again', 'Yes', '2020-01-21 08:33:30'),
(431, 17, 17, 'edited update', 'Yes', '2020-01-21 07:55:41'),
(433, 17, 17, 'insted of being empty', 'Yes', '2020-01-20 18:02:07'),
(434, 17, 17, 'hello ethio updated again again asdasdasdasdasdasd and again so that we  could see the effect on virtual dom', 'Yes', '2020-01-20 18:01:38'),
(435, 17, 17, 'well done', 'Yes', '2020-01-21 08:33:49'),
(436, 17, 17, 'kkk', 'Yes', '2020-01-21 08:46:33'),
(438, 17, 17, 'keekekekek', 'Yes', '2020-01-21 09:09:50'),
(439, 17, 17, 'nnnnn', 'Yes', '2020-01-21 09:12:05'),
(443, 17, 17, 'pdate socket', 'Yes', '2020-01-22 18:26:43'),
(446, 17, 17, 'editedddoo', 'Yes', '2020-01-24 17:43:40'),
(447, 17, 17, 'asdasdasdsadsdadasdsdhello ddear welcome homeadasd head', 'Yes', '2020-01-25 07:40:04'),
(448, 14, 17, 'Hello bros', 'Yes', '2020-01-26 07:24:45'),
(449, 17, 14, 'ru fine?', 'Yes', '2020-01-26 07:11:37'),
(450, 17, 14, 'hello', 'Yes', '2020-01-26 07:23:06'),
(451, 14, 17, 'Khuu', 'Yes', '2020-01-26 07:29:12'),
(452, 14, 17, 'Dear seo', 'Yes', '2020-01-26 07:33:29'),
(454, 14, 17, 'Weldone updated', 'Yes', '2020-01-26 08:19:14'),
(458, 14, 17, 'Ggg update', 'Yes', '2020-01-26 08:09:50'),
(459, 14, 17, 'Hello there', 'Yes', '2020-01-26 08:07:20'),
(460, 14, 17, 'Hello', 'Yes', '2020-01-26 08:11:55'),
(461, 14, 17, 'Brra updated', 'Yes', '2020-01-26 08:32:21'),
(463, 17, 15, 'This kjasd asdkj djk asjkd asjkd ajksd jkasd asjkd asjkd jkasd jkasd asjkd kasjd kasjd askd askd jkasd kas daskd kasd as daskj jkad ask dkasdasjkd kasj dkas dkas dask dk  kj ajksd aksd jkas dkas djkas dkasd ajksd jkas dkaksd ak ajks dajks dkasaasdssaaasj ajks dasjkd aksj dasjk dkasjd ajks aks as jkd ajksd ask daskdkas dkas askdasjk djkas dasjkdasjk dasjkaks kdas jkdasjkd ajksd askjd ajksd as dasjkasjkd asd asjkdasjkd adjkasjkdasasajd ask sa aakdadaajdads aaaasajaas daskjdaskd askd aasdasdasdasdasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'Yes', '2020-01-28 15:39:39'),
(464, 17, 15, '', 'Yes', '2020-01-28 15:39:39'),
(465, 17, 15, 'asdasdasdasdasdasdasdasdassssssssssssssssasdasdasdhajksdnkJSDNKanskdjNASDJKNAjkdnJKADNKjadnkAND aks dkASD JK djk k KJASD Kka sdjkA SDJK asdk AD JKASK DJKAD JKA djk JKD jkdkjAD asd jk ASDJK ajkd jkASD  Dkas djkasd jkas dkDJK JKASD KJa dk jkASDJKJKASDF JKASD FKAJKSFKJASDFKJSF KAS DFJKASDJKFASDJKFSJKF KASDJ FJKASDKJF ASJKDF JKSDF JK SJKDF JKASDKJFJ JKS DFJKA SJDKF JKAS FJAS FJKASF JK ASJDKFAJKSD FAKSJFAJFDA KJSDJAJF JKS JFA FJKASD FKAS DJFAJKSF JKA FJKADJKAD FJKADJKFAKSFJKASDFJKASFKASJKDFAJKSDFK KASKJDFKJA SJKDFK K KSDFJKJKFKAS DFKJASJKDFJKASDFJKHJASDJF BAS FAHS AFASDFHASDJF KASDKFASDF0016000000', 'Yes', '2020-01-28 15:39:39'),
(466, 17, 14, 'weldone', 'Yes', '2020-02-02 10:54:22');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(255) NOT NULL,
  `calendar_id` int(255) NOT NULL,
  `event` varchar(200) NOT NULL,
  `discription` varchar(1000) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(200) NOT NULL,
  `subject_title` varchar(200) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject_title`, `date_time`) VALUES
(1, 'programming', '2019-12-28 10:42:37'),
(2, 'maths', '2019-12-28 10:42:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `full_name` varchar(200) NOT NULL,
  `birthdate` varchar(200) NOT NULL,
  `gender` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `push_token` varchar(200) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `photo_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `birthdate`, `gender`, `email`, `username`, `password`, `push_token`, `date_time`, `photo_url`) VALUES
(1, 'Fg', 'Dec 28 2019 ', 'key1', 'Ss@ss.com', 'Ser', '123', '', '2019-12-28 16:26:43', ''),
(2, 'Fg', 'Dec 28 2019 ', 'key1', 'Ss@ss.com', 'Ser', '123', '', '2019-12-28 16:26:44', ''),
(3, 'Fg', 'Dec 28 2019 ', 'key1', 'Ss@ss.com', 'Serr', '123', '', '2019-12-28 16:27:09', ''),
(4, 'Ss', 'Dec 11 2019 ', 'key0', 'Ss@ss.com', 'Seo11', '123', '', '2019-12-28 16:31:13', ''),
(5, 'Seife', 'Dec 04 2019 ', 'key0', 'A@a.com', 'Seo', '123', '', '2019-12-29 06:55:10', ''),
(6, 'Seo', 'Dec 18 2019 ', 'key0', 'Ss@d.com', 'Seor', '123', '', '2019-12-29 07:03:44', ''),
(7, 'Mm', 'Dec 04 2019 ', 'key0', 'Ss@ss.com', 'Seou', '123', '', '2019-12-29 07:11:33', ''),
(8, 'Mm', 'Dec 04 2019 ', 'key0', 'Ss@ss.com', 'Seouu', '123', '', '2019-12-29 07:13:00', ''),
(9, 'Mm', 'Dec 04 2019 ', 'key0', 'Ss@ss.com', 'Seouut', '123', '', '2019-12-29 07:14:36', ''),
(10, 'Mm', 'Dec 04 2019 ', 'key0', 'Ss@ss.com', 'Seouutu', '123', '', '2019-12-29 07:15:12', ''),
(11, 'Mm', 'Dec 04 2019 ', 'key0', 'Ss@ss.com', 'Seouutui', '123', '', '2019-12-29 07:16:32', ''),
(12, 'Seife', 'Dec 05 2019 ', 'key0', 'Ss@ss.com', 'Seoy', '123', '', '2019-12-29 07:22:15', ''),
(13, 'Seife', 'Dec 18 2019 ', 'key0', 'Ss@ss.com', 'Seoc', '123', '', '2019-12-29 07:25:42', ''),
(14, 'Seife', 'Dec 11 2019 ', 'key1', 'Ss@ss.com', 'Seog', '123', '', '2019-12-29 07:29:56', ''),
(15, 'dd', 'Jan 14 2020 ', 'key0', 's@s.com', 's', '123', '', '2020-01-19 05:55:00', ''),
(16, 'ss', 'Jan 07 2020 ', 'key0', 's@s.com', 'se', '123', '', '2020-01-19 05:57:59', ''),
(17, 'ss', 'Jan 09 2020 ', 'key0', 's@s.com', 'sep', '123', '', '2020-01-19 06:04:47', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_messages`
--
ALTER TABLE `chat_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `campus`
--
ALTER TABLE `campus`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `chat_messages`
--
ALTER TABLE `chat_messages`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=467;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
