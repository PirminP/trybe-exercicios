SELECT * FROM sakila.actor
WHERE last_name = 'DAVIS';

SELECT * FROM sakila.film
WHERE length > 50
ORDER BY length;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 20;

SELECT * FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13';

SELECT * FROM sakila.rental
WHERE return_date IS NULL;

SELECT * FROM sakila.staff;

SELECT * FROM sakila.film
WHERE title NOT LIKE 'academy%';

SELECT * FROM sakila.film
-- WHERE title LIKE '%don';
-- WHERE title LIKE 'plu%';
-- WHERE title LIKE '%plu%';
-- WHERE title LIKE 'p%p';
-- WHERE title LIKE '_p%';
-- WHERE title LIKE '________';
WHERE title LIKE 'S_____________%';

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM sakila.customer
WHERE customer_id IN (1,2,3,4,5);

SELECT title, `length` FROM sakila.film
WHERE `length` BETWEEN 50 AND 120
ORDER BY `length`;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
-- WHERE payment_date LIKE '2005-07-31%';
-- WHERE payment_date LIKE '2005-07-31 02:42:18';
-- WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

SELECT DATE(payment_date) FROM sakila.payment;
SELECT YEAR(payment_date) FROM sakila.payment; 
SELECT MONTH(payment_date) FROM sakila.payment;
SELECT DAY(payment_date) FROM sakila.payment;
SELECT HOUR(payment_date) FROM sakila.payment; 
SELECT MINUTE(payment_date) FROM sakila.payment;
SELECT SECOND(payment_date) FROM sakila.payment;

USE sakila;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

USE sakila;
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;

