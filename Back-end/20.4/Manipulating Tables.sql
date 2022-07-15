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
    
-- SELECT * FROM sakila.staff;
UPDATE sakila.staff
SET first_name = 'Gust'
WHERE staff_id = 4;




