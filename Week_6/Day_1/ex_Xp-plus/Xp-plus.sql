-- CREATE TABLE students(
--  id SERIAL PRIMARY KEY,
--  first_name VARCHAR (20) NOT NULL,
--  last_name VARCHAR (25) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
--     ('Marc','Benichou','11/02/1998'),
--     ('Yoan','Cohen','12/03/2010'),
--     ('Lea','Benichou','07/27/1987'),
--     ('Amelia','Dux','04/07/1996'),
--     ('David','Grez','06/04/2003'),
--     ('Omer','Simpson','10/03/1980'),
--     ('Shoval','Zvulun','06/01/1991');
    
-- SELECT * FROM public.students;

-- SELECT first_name,last_name FROM public.students;

-- SELECT first_name,last_name FROM public.students WHERE id=2;

-- SELECT first_name,last_name FROM public.students WHERE last_name='Benichou' AND first_name ='Marc';

-- SELECT first_name,last_name FROM public.students WHERE last_name='Benichou' OR first_name ='Marc';

-- SELECT first_name,last_name FROM public.students WHERE first_name ILIKE '%a%';

-- SELECT first_name,last_name FROM public.students WHERE first_name ILIKE 'a%';

-- SELECT first_name,last_name FROM public.students WHERE first_name ILIKE '%a';

-- SELECT first_name,last_name FROM public.students WHERE first_name ILIKE '%a_';


-- SELECT first_name,last_name FROM public.students WHERE id=2 AND id=3;/// not posibble

-- SELECT * FROM public.students WHERE birth_date >='01/01/2000';







