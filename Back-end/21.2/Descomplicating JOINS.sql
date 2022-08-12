-- INNER JOIN
SELECT first_name, actor_id FROM sakila.actor;
SELECT actor_id FROM sakila.film_actor;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- EXC
-- SELECT * FROM sakila.actor;
-- SELECT * FROM sakila.film_actor;
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- SELECT * FROM sakila.staff;
-- SELECT * FROM sakila.address;
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
JOIN sakila.address AS a 
ON s.address_id = a.address_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM sakila.customer AS c
JOIN sakila.address AS a 
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- SELECT * FROM sakila.address;
-- SELECT * FROM sakila.customer;
SELECT
    c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
JOIN sakila.address AS a 
ON c.address_id = a.address_id
WHERE a.district = 'California'
	AND c.first_name LIKE '%rene%';
    

-- LEFT/RIGHT JOIN

-- SELECT * FROM sakila.customer;
-- SELECT * FROM sakila.actor;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- SELECT * FROM sakila.customer;
-- SELECT * FROM sakila.actor;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY a.last_name;

-- SELECT * FROM sakila.customer;
-- SELECT * FROM sakila.actor;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY a.last_name;

-- SELF JOIN

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.manager_id = Manager.employee_id;















