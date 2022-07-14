SELECT 'PIRMIN';
SELECT 13*2;
SELECT now() AS data_atual;

SELECT city, country_id FROM sakila.city;

SELECT * FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'nome_completo' FROM sakila.actor;

SELECT DISTINCT first_name FROM sakila.actor;

SELECT COUNT(*) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT COUNT(*) FROM sakila.address;
SELECT COUNT(address2) FROM sakila.address
WHERE address2 = '';

SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

SELECT * FROM sakila.address
ORDER BY address DESC, district;

SELECT * FROM sakila.film;
SELECT film.title, film.release_year, film.description FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

SELECT COUNT(DISTINCT first_name)FROM sakila.actor;
SELECT first_name FROM sakila.actor
ORDER BY first_name;