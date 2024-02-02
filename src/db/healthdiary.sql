DROP DATABASE IF EXISTS HealthDiary;
-- muista pääset data baseen "use HealthDiary "
CREATE DATABASE HealthDiary;

USE HealthDiary;

CREATE TABLE Users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password  VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR (10) NOT NULL DEFAULT 'regular'
);


CREATE TABLE DiaryEntries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    mood VARCHAR(50),
    weight DECIMAL(5,2),
    sleep_hours INT,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE SOCIAL_REACTIONS (
    entry_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE PRIMARY KEY ,
    comment Text,
    likes INT,
    FOREIGN KEY (entry_id) REFERENCES DiaryEntries(entry_id),
    FOREIGN KEY (username) REFERENCES Users(username)

);

--inserting multiple users at once--
Insert into Users(username, password, email, user_level) values
('johndoe', 'temp-pw-1', 'johndoe@example.com','regular'),
('janedoe', 'temp-pw-2', 'janedoe@example.com', 'admin'),
('mike_smith', 'temp-pw-3', 'mike@example.com','moderator');

--inserting multiple dairy entries at once--
iNSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes, created_at) VALUES
  (1, '2024-01-10', 'Happy', 70.5, 8, 'Had a great day, felt energetic', '2024-01-10 20:00:00'),
  (1, '2024-01-11', 'Tired', 70.2, 6, 'Long day at work, need rest', '2024-01-11 20:00:00'),
  (2, '2024-01-10', 'Stressed', 65.0, 7, 'Busy day, a bit stressed out', '2024-01-10 21:00:00');

INSERT INTO SOCIAL_REACTIONS (entry_id, username, comment, likes) values
(1,'johndoe', 'test2', 1),
(2, 'janedoe', 'test3', 2),
(3,'mike_smith', 'test4', 0);


select username, entry_date,  mood, notes from users, DiaryEntries.mood, where diaryentreis.user_id =
users.user_id;

