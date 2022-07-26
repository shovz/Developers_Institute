CREATE TABLE Customer (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(100) NOT NULL, 
    last_name  VARCHAR(100) NOT NULL

);

CREATE TABLE Custome_profile (
    id SERIAL PRIMARY KEY, 
    isLoggedIn  BOOLEAN DEFAULT false, 
    customer_id  INTEGER REFERENCES Customer (id)

);

INSERT INTO  Customer(first_name,last_name)
VALUES ('John', 'Doe'),('Jerome', 'Lalu'),('Lea', 'Rive')
RETURNING *


INSERT INTO  Custome_profile(isLoggedIn,customer_id)
VALUES (true, (SELECT ID FROM Customer WHERE first_name= 'John')),(false, (SELECT ID FROM Customer WHERE first_name= 'Jerome'))
RETURNING *

SELECT first_name FROM Customer 
INNER JOIN Custome_profile ON Custome_profile.customer_id=Customer.id
WHERE isLoggedIn=true


SELECT first_name,isLoggedIn  FROM Customer 
LEFT JOIN Custome_profile ON Custome_profile.customer_id=Customer.id

SELECT COUNT(*) FROM Customer 
LEFT JOIN Custome_profile ON Custome_profile.customer_id=Customer.id
WHERE isLoggedIn=false


CREATE TABLE Book (
    book_id  SERIAL PRIMARY KEY, 
    title  VARCHAR(100) NOT NULL, 
    author   VARCHAR(100) NOT NULL

);

CREATE TABLE Student (
    student_id   SERIAL PRIMARY KEY, 
    name   VARCHAR(100) NOT NULL UNIQUE, 
    age   INTEGER NOT NULL CHECK (age<15)

);

CREATE TABLE Library (
    book_fk_id  INTEGER REFERENCES Book (book_id)  ON DELETE CASCADE ON UPDATE CASCADE, 
    student_id   INTEGER REFERENCES Student (student_id)  ON DELETE CASCADE ON UPDATE CASCADE,  
    borrowed_date DATE
);


INSERT INTO  Book(title,author)
VALUES ('Alice In Wonderland','Lewis Carroll'),('Harry Potter','J.K Rowling'),('To kill a mockingbird','Harper Lee')
RETURNING *


INSERT INTO  Student(name,age)
VALUES ('John',12),('Lera',11),('Patrick',10),('Bob',14)
RETURNING *

INSERT INTO  Library(book_fk_id,student_id,borrowed_date)
VALUES 
((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),(SELECT student_id FROM Student WHERE name='John'),'2022-02-15'),
((SELECT book_id FROM Book WHERE title='To kill a mockingbird'),(SELECT student_id FROM Student WHERE name='Bob'),'2021-03-03'),
((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),(SELECT student_id FROM Student WHERE name='Lera'),'2021-05-23'),
((SELECT book_id FROM Book WHERE title='Harry Potter'),(SELECT student_id FROM Student WHERE name='Bob'),'2021-08-12')
RETURNING *


-- Select all the columns from the junction table
SELECT * FROM Library
INNER JOIN Book ON Book.book_id = Library.book_fk_id
INNER JOIN Student ON Student.student_id = Library.student_id


-- Select the name of the student and the title of the borrowed books

SELECT name,title FROM Library
INNER JOIN Book ON Book.book_id = Library.book_fk_id
INNER JOIN Student ON Student.student_id = Library.student_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland

SELECT AVG(age) FROM Library
INNER JOIN Book ON Book.book_id = Library.book_fk_id
INNER JOIN Student ON Student.student_id = Library.student_id
WHERE title ILIKE '%Alice in Wonderland%'


-- Delete a student from the Student table, what happened in the junction table ?

DELETE FROM Student
WHERE  NAME='Bob';

SELECT * FROM Library;

