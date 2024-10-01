CREATE DATABASE F1;
USE F1;

CREATE TABLE DRIVER (
    ID INT AUTO_INCREMENT PRIMARY KEY,  
    NAME VARCHAR(50), 
    TEAM varchar(50),
    COUNTRY VARCHAR(50),                
    PODIUMS INT,                        
    POINTS FLOAT,                       
    GPE INT,                            
    WC INT,                             
    HRF VARCHAR(50),                    
    HGP INT,                          
    BIRTH VARCHAR(50),                  
    PLACE VARCHAR(50)                   
);

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE)
VALUES ('Pierre Gasly', 'Alpine', 'France', 4, 402, 146, 0, '1 (x1)', 2, '07/02/1996', 'Rouen, France');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE)
VALUES ('Lando Norris', 'McLaren', 'United Kingdom', 23, 874, 120, 0, '1 (x2)', 1, '13/11/1999', 'Bristol, England');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE)
VALUES ('George Russell', 'Mercedes', 'United Kingdom', 13, 597, 120, 0, '1 (x2)', 1, '15/02/1998', "King's Lynn, England");

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE)
VALUES ('Zhou Guanyu', 'Kick Sauber', 'China', 0, 12, 60, 0, '8 (x1)', 5, '30/05/1999', 'Shanghai, China');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE) 
VALUES
('Valtteri Bottas', 'Kick Sauber', 'Finland', 67, 1797, 238, 0, '1 (x10)', 1, '1989-08-28', 'Nastola, Finland'), 
('Charles Leclerc', 'Ferrari', 'Monaco', 38, 1291, 141, 0, '1 (x7)', 1, '1997-10-16', 'Monte Carlo, Monaco'), 
('Oscar Piastri', 'McLaren', 'Australia', 7, 294, 38, 0, '1 (x1)', 2, '2001-04-06', 'Melbourne, Victoria'), 
('Yuki Tsunoda', 'RedBull', 'Japan', 0, 83, 82, 0, '4 (x1)', 6, '2000-05-11', 'Sagamihara, Japan');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE) 
VALUES
('Alexander Albon','Williams', 'Thailand', 2, 234, 97, 0, '3 (x2)', 4, '1996-03-23', 'London, England'), 
('Lewis Hamilton', 'Mercedes', 'United Kingdom', 201, 4803.5, 348, 7, '1 (x105)', 1, '1985-01-07', 'Stevenage, England'), 
('Esteban Ocon', 'Alpine', 'France', 3, 427, 149, 0, '1 (x1)', 3, '1996-09-17', 'Évreux, Normandy'), 
('Carlos Sainz', 'Ferrari', 'Spain', 23, 1166.5, 200, 0, '1 (x3)', 1, '1994-09-01', 'Madrid, Spain');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE) 
VALUES
('Fernando Alonso','Aston Martin', 'Spain', 106, 2317, 396, 2, '1 (x32)', 1, '1981-07-29', 'Oviedo, Spain'), 
('Nico Hulkenberg', 'Haas', 'Germany', 0, 552, 222, 0, '4 (x3)', 1, '1987-08-19', 'Emmerich am Rhein, Germany'), 
('Sergio Perez', 'Red Bull Racing', 'Mexico', 39, 1629, 274, 0, '1 (x6)', 1, '1990-01-26', 'Guadalajara, Mexico'), 
('Lance Stroll', 'Aston Martin', 'Canada', 3, 292, 159, 0, '3 (x3)', 1, '1998-10-29', 'Montreal, Canada');

INSERT INTO DRIVER (NAME, TEAM, COUNTRY, PODIUMS, POINTS, GPE, WC, HRF, HGP, BIRTH, PLACE) 
VALUES
('Franco Colapinto','Williams','Argentina',0,0,1,0,'12(x1)',18,'2003-05-27','Buenos Aires, Argentina'),
('Kevin Magnussen','Haas','Denmark',1,192,180,0,'2(x1)',4,'1992-10-05','Roskilde, Denmark'),
('Daniel Ricciardo','RB','Australia',32,1329,255,0,'1(x8)',1,'1989-07-01','Perth, Australia'),
('Max Verstappen','Red Bull Racing','Netherlands',108,2889.5,201,3,'1(x61)',1,'1997-09-30', 'Hasselt, Belgium');

use F1;
CREATE TABLE TEAM (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FULLNAME VARCHAR(100),
    BASE VARCHAR(100),
    Team_Chief VARCHAR(100),
    Technical_Chief VARCHAR(100),
    Chassis VARCHAR(100),
    Power_Unit VARCHAR(100),
    First_Team_Entry INT,
    World_Championships INT,
    Highest_Race_Finish VARCHAR(100),
    Pole_Positions INT,
    Fastest_Laps INT
);
INSERT INTO TEAM (FULLNAME, BASE, Team_Chief, Technical_Chief, Chassis, Power_Unit, First_Team_Entry, World_Championships, Highest_Race_Finish, Pole_Positions, Fastest_Laps)
VALUES
('BWT Alpine F1 Team', 'Enstone, United Kingdom', 'Oliver Oakes', 'David Sanchez', 'A524', 'Renault', 1986, 2, '1 (x21)', 20, 15),
('MoneyGram Haas F1 Team', 'Kannapolis, United States', 'Ayao Komatsu', 'Andrea De Zordo', 'VF-24', 'Ferrari', 2016, 0, '4 (x1)', 1, 2);

INSERT INTO TEAM (FULLNAME, BASE, Team_Chief, Technical_Chief, Chassis, Power_Unit, First_Team_Entry, World_Championships, Highest_Race_Finish, Pole_Positions, Fastest_Laps)
VALUES
('Aston Martin Aramco F1 Team', 'Silverstone, United Kingdom', 'Mike Krack', 'Dan Fallows', 'AMR24', 'Mercedes', 2018, 0, '1 (x1)', 1, 3),
('Stake F1 Team Kick Sauber', 'Hinwil, Switzerland', 'Alessandro Alunni Bravi', 'James Key', 'C44', 'Ferrari', 1993, 0, '1 (x1)', 1, 7);

INSERT INTO TEAM (FULLNAME, BASE, Team_Chief, Technical_Chief, Chassis, Power_Unit, First_Team_Entry, World_Championships, Highest_Race_Finish, Pole_Positions, Fastest_Laps)
VALUES
('Scuderia Ferrari', 'Maranello, Italy', 'Frédéric Vasseur', 'Enrico Gualtieri', 'SF-24', 'Ferrari', 1950, 16, '1 (x247)', 251, 262),
('Visa Cash App RB Formula One Team', 'Faenza, Italy', 'Laurent Mekies', 'Jody Egginton', 'VCARB 01', 'Honda RBPT', 1985, 0, '1 (x2)', 1, 3);

INSERT INTO TEAM (FULLNAME, BASE, Team_Chief, Technical_Chief, Chassis, Power_Unit, First_Team_Entry, World_Championships, Highest_Race_Finish, Pole_Positions, Fastest_Laps) 
VALUES
('Mercedes-AMG PETRONAS F1 Team', 'Brackley, United Kingdom', 'Toto Wolff', 'James Allison', 'W15', 'Mercedes', 1970, 8, '1 (x119)', 131, 100),
('Williams Racing', 'Grove, United Kingdom', 'James Vowles', 'Pat Fry', 'FW46', 'Mercedes', 1978, 9, '1 (x114)', 128, 133);

INSERT INTO TEAM (FULLNAME, BASE, Team_Chief, Technical_Chief, Chassis, Power_Unit, First_Team_Entry, World_Championships, Highest_Race_Finish, Pole_Positions, Fastest_Laps) 
VALUES
('McLaren Formula 1 Team', 'Woking, United Kingdom', 'Andrea Stella', 'Peter Prodromou / Neil Houldey', 'MCL38', 'Mercedes', 1966, 8, '1 (x186)', 161, 169),
('Oracle Red Bull Racing', 'Milton Keynes, United Kingdom', 'Christian Horner', 'Pierre Waché', 'RB20', 'Honda RBPT', 1997, 6, '1 (x120)', 105, 98);

use F1;
ALTER TABLE DRIVER
ADD COLUMN IMG_URL VARCHAR(255);

UPDATE DRIVER
SET IMG_URL = CASE ID
    WHEN 9 THEN '/Image/Racer/alealb01.avif'
	WHEN 12 THEN '/Image/Racer/carsai01.avif'
    WHEN 6 THEN '/Image/Racer/chalec01.avif'
    WHEN 19 THEN '/Image/Racer/danric01.avif'
    WHEN 11 THEN '/Image/Racer/estoco01.avif'
    WHEN 13 THEN '/Image/Racer/feralo01.avif'
    WHEN 17 THEN '/Image/Racer/fracol01.avif'
    WHEN 3 THEN '/Image/Racer/georus01.avif'
    WHEN 4 THEN '/Image/Racer/guazho01.avif'
    WHEN 18 THEN '/Image/Racer/kevmag01.avif'
    WHEN 2 THEN '/Image/Racer/lannor01.avif'
    WHEN 16 THEN '/Image/Racer/lanstr01.avif'
    WHEN 10 THEN '/Image/Racer/lewham01.avif'
    WHEN 8 THEN '/Image/Racer/yuktsu01.avif'
    WHEN 20 THEN '/Image/Racer/maxver01.avif'
    WHEN 14 THEN '/Image/Racer/nichul01.avif'
    WHEN 5 THEN '/Image/Racer/valbot01.avif'
    WHEN 7 THEN '/Image/Racer/oscpia01.avif'
    WHEN 1 THEN '/Image/Racer/piegas01.avif'
    WHEN 15 THEN '/Image/Racer/serper01.avif'
    END
WHERE ID BETWEEN 1 AND 20;

UPDATE `F1`.`DRIVER` SET `TEAM` = 'RedBull2' WHERE (`ID` = '19');

use f1;
ALTER TABLE TEAM
ADD COLUMN IMG_URL_TEAM VARCHAR(255);

UPDATE TEAM
SET IMG_URL_TEAM = CASE id
    WHEN 1 THEN '/Image/LogoDetail_Team/alpine.jpeg'
	WHEN 2 THEN '/Image/LogoDetail_Team/aston martin 2024.png'
    WHEN 3 THEN '/Image/LogoDetail_Team/ferrari.png'
    WHEN 4 THEN '/Image/LogoDetail_Team/haas.jpeg'
    WHEN 5 THEN '/Image/LogoDetail_Team/kick sauber.png'
    WHEN 6 THEN '/Image/LogoDetail_Team/mclaren.png'
    WHEN 7 THEN '/Image/LogoDetail_Team/mercedes.jpeg'
    WHEN 8 THEN '/Image/LogoDetail_Team/rb.png'
    WHEN 9 THEN '/Image/LogoDetail_Team/red bull.jpeg'
    WHEN 10 THEN '/Image/LogoDetail_Team/williams.jpeg'
    END
WHERE ID BETWEEN 1 AND 10;