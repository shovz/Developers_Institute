-- Get a list of all films joined with their languages – 
-- select the following details : film title, description, and language name. Try your query with different joins:

-- Get all films, even if they don’t have languages.
SELECT title, description,name from film
LEFT JOIN language
ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.
SELECT title, description,name from film
RIGHT JOIN language
ON film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : id, name. 
-- Add some new films to the table.

CREATE TABLE new_film (
    film_id SERIAL PRIMARY KEY,
    film_name VARCHAR(255)
);

INSERT INTO new_film (film_name)
VALUES ('LOTR'),('SPIDERMAN'),('AVATAR'),('COPS')
RETURNING *



-- Create a new table called customer_review, which will contain film reviews that customers will make.

CREATE TABLE customer_review (
    review_id SERIAL NOT NULL PRIMARY KEY,
    film_id INTEGER  REFERENCES new_film(film_id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title_review VARCHAR(255),
    score SMALLINT NOT NULL,
    review_text VARCHAR,
    last_update  DATE
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.    

INSERT INTO customer_review (film_id,language_id,title_review,score,review_text,last_update)
VALUES 
       (
         (SELECT film_id FROM new_film WHERE film_name ='LOTR'),
         (SELECT language_id FROM language WHERE name ='English'),
         'LOTR REVIEW',10,'best movie ever', CURRENT_DATE)
       ),
       (
        (SELECT film_id FROM new_film WHERE film_name ='SPIDERMAN'),
        (SELECT language_id FROM language WHERE name ='Italian '),
        'SPIDERMAN REVIEW',6,'its a spider', CURRENT_DATE
       ),
       (
        (SELECT film_id FROM new_film WHERE film_name ='AVATAR'),
        (SELECT language_id FROM language WHERE name ='English '),
        'AVATAR REVIEW',2,'its blue and fast', CURRENT_DATE
       ),
       (
        (SELECT film_id FROM new_film WHERE film_name ='COPS'),
        (SELECT language_id FROM language WHERE name ='German'),
        'COPS REVIEW',8,'piew piew', CURRENT_DATE
       )
RETURNING *


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film
WHERE film_name = 'AVATAR';

SELECT * FROM new_film;

SELECT * FROM customer_review;


-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name ='German')
WHERE title = 'Factory Dragon';

-- Which foreign keys (references) are defined for the customer table? 
-- How does this affect the way in which we INSERT into the customer table?

-- store_id, address_id - we need to select thd id's from the currect table


-- We created a new table called customer_review. Drop this table.
-- Is this an easy step, or does it need extra checking?

DROP TABLE customer_review;


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
q is not clear enough what is the condition of returning


-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
q is not clear enough what is the condition of returning


-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
-- but he can’t remember their names. Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT title FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE description ILIKE '%a sumo wrestler%' 
AND first_name ='Penelope' AND last_name = 'Monroe'


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

SELECT title FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id = film_category.category_id
WHERE rating ='R' 
AND name ='Documentary' AND length <60


-- The 3rd film : A film that his friend Matthew Mahan rented. 
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT title FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
WHERE (first_name ILIKE '%Matthew%' AND last_name ILIKE '%Mahan%')
AND amount >4.00 AND (return_date BETWEEN '2005-07-28' AND '2005-08-01');

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


SELECT title FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
INNER JOIN payment ON payment.rental_id = rental.rental_id
WHERE (first_name ILIKE '%Matthew%' AND last_name ILIKE '%Mahan%')
AND (title ILIKE '%boat%' OR description ILIKE '%boat%') 
AND replacement_cost > (SELECT AVG(replacement_cost) FROM film);





















