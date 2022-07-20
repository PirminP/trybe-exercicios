-- Manipulating strings
SELECT * FROM sakila.film;

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- Conditionals
SELECT * FROM sakila.customer;
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

-- EXC
SELECT
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público Alvo'
FROM sakila.film;

-- Math functions
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT * FROM sakila.film;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3;
SELECT 10 DIV 2;
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0

SELECT ROUND(10.4925);
SELECT ROUND(10.5136);
SELECT ROUND(10.4925, 3); -- 10.493
SELECT CEIL(10.2); -- 11
SELECT FLOOR(10.2); -- 10

SELECT POW(2, 2);
SELECT POW(2, 4); 
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

SELECT RAND();
SELECT ROUND(7 + (RAND() * 6));

-- EXC
SELECT FLOOR(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494); -- 39
SELECT CEIL(85.234); -- 86

-- Working with data
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
SELECT DATEDIFF('2020-01-31', '2020-01-01'); -- 30 days later 
SELECT DATEDIFF('2020-01-01', '2020-01-31'); -- 30 days before
SELECT TIMEDIFF('08:30:10', '09:30:10');
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10'); -- 239:00:00
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

-- EXC
SELECT DATEDIFF('2030-01-20', NOW());
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- USING AVG, MIN, MAX, SUM & COUNT
SELECT * FROM sakila.film;
SELECT AVG(replacement_cost) FROM sakila.film; 
SELECT MIN(replacement_cost) FROM sakila.film; 
SELECT MAX(replacement_cost) FROM sakila.film;
SELECT SUM(replacement_cost) FROM sakila.film; 
SELECT COUNT(replacement_cost) FROM sakila.film;

-- EXC
SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

-- Display and filter data with GROUP BY and HAVING
SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- EXC
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- EXC
SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;





