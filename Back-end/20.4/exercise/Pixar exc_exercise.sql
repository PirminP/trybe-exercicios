-- Exc 1
-- USE Pixar;
SELECT * FROM Pixar.Movies;
INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);

-- Exc 2
SELECT * FROM Pixar.BoxOffice;
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);

-- Exc 3
SELECT * FROM Pixar.Movies;
UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = 9;

-- Exc 6
-- DELETE FROM BoxOffice
-- WHERE movie_id = 11;
SELECT * FROM Pixar.Movies;
DELETE FROM Movies
WHERE title = 'WALL-E';

-- Exc 9
SELECT * FROM Pixar.BoxOffice;
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- Exc 10
USE Pixar;
SET SQL_SAFE_UPDATES = 0;
SELECT id, title, length_minutes FROM Movies
WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE movie_id IN (1, 2, 6, 7, 8, 12, 16, 20);
DELETE FROM Movies
WHERE length_minutes < 100;