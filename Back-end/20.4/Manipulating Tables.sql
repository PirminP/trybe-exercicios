SELECT * FROM sakila.staff;
-- INSERT INTO nome_da_tabela (coluna1, coluna2)
-- VALUES ('valor_coluna1', 'valor_coluna2');

SELECT * FROM sakila.staff;
SELECT * FROM sakila.actor;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.staff;
INSERT INTO sakila.staff
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');


-- SELECT first_name, last_name FROM sakila.customer;
-- SELECT * FROM sakila.actor;
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
    
-- SELECT * FROM sakila.category;
INSERT INTO sakila.category(name)
VALUES
	('TERROR'),
    ('SCIENCE'),
    ('CULTURE');
    
SELECT * FROM sakila.staff;
UPDATE sakila.staff
SET first_name = 'Thomas', last_name = 'Shelby'
WHERE staff_id = 5;

SELECT first_name FROM sakila.actor;
UPDATE sakila.actor
SET first_name = 'STEAVE'
WHERE actor_id IN (1,2,3);

SELECT first_name FROM sakila.actor;
-- SET SQL_SAFE_UPDATES = 0; -- safe mode because of ELSE first_name
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'AVE'
			WHEN 2 THEN 'DAVID'
			WHEN 3 THEN 'CARO'
		ELSE first_name
END);

SELECT * FROM sakila.staff;
UPDATE sakila.staff
SET password = 'YourPassword'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

SELECT rental_rate, rating, length, replacement_cost FROM sakila.film;
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);

SELECT * FROM sakila.film_text; 
SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

SELECT * FROM sakila.actor;
-- DELETE FROM sakila.actor
-- WHERE first_name = 'GRACE'; -- Necessary to delete dependencies first: ID film_actor

SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id = 7;
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT * FROM sakila.actor;
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';
-- SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';




