-- CREATE SEQUENCE seq_dept INCREMENT 10  START 10;
        
-- CREATE TABLE DEPARTMENT
-- (
--      DEPTCODE   INTEGER NOT NULL DEFAULT nextval('seq_dept') PRIMARY KEY,
--      DeptName   CHAR(30),
--      LOCATION   VARCHAR(33) UNIQUE
-- );


-- CREATE TABLE EMPLOYEE
-- (
--      EmpCode      INTEGER NOT NULL PRIMARY KEY,
--      EmpFName     VARCHAR(15) NOT NULL,
--      EmpLName     VARCHAR(15) NOT NULL,
--      Job          VARCHAR(45),
--      Manager      CHAR(4),
--      HireDate     DATE,
--      Salary       DECIMAL DEFAULT 0,
--      Commission   INTEGER,
--      Department_code  INTEGER REFERENCES DEPARTMENT(DEPTCODE) 
-- );

-- INSERT INTO DEPARTMENT (DeptName,LOCATION) VALUES 
-- ('FINANCE', 'EDINBURGH'),
-- ('SOFTWARE','PADDINGTON'),
-- ('SALES', 'MAIDSTONE'),
-- ('MARKETING', 'DARLINGTON'),
-- ('ADMIN', 'BIRMINGHAM');
      

-- INSERT INTO EMPLOYEE (EmpCode,EmpFName,EmpLName,Job,Manager,HireDate,Salary,Commission,Department_code)
-- VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20),
--        (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30),    
--        (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20),
--        (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30),
--        (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10),
--        (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20),
--        (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10),
--        (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30),
--        (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20),
--        (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20),
--        (9902, 'ANDREW', 'FAULKNER', 'ANALYST', 7566, '1981-12-03', 3000,0, 10),
--        (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20),
--        (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30),
--        (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30),
--        (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL),
--        (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50),
--        (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50);



-- SELECT COUNT (*) FROM EMPLOYEE
-- INNER JOIN DEPARTMENT
-- ON DEPTCODE = Department_code
-- WHERE DEPTCODE=10;

-- SELECT COUNT (*) FROM EMPLOYEE
-- INNER JOIN DEPARTMENT
-- ON DEPTCODE = Department_code
-- WHERE DEPTCODE=10 AND Job ILIKE '%ANALYST%';

-- SELECT EmpFName,EmpLName,job, DEPTCODE FROM EMPLOYEE JOIN DEPARTMENT
-- ON DEPARTMENT.DEPTCODE = EMPLOYEE.Department_code;

-- SELECT AVG(salary) FROM EMPLOYEE WHERE job = 'SOFTWARE ENGINEER'


-- SELECT * FROM EMPLOYEE
-- -- INNER  JOIN DEPARTMENT
-- -- ON DEPTCODE = Department_code
-- WHERE Department_code IS NULL


-- SELECT EmpFName,EmpLName,job,Department_code,DeptName,LOCATION FROM EMPLOYEE INNER JOIN DEPARTMENT
-- ON DEPARTMENT.DEPTCODE = EMPLOYEE.Department_code
-- ORDER BY EmpFName ASC, LOCATION ASC;


-- SELECT EmpFName,SALARY+Commission FROM EMPLOYEE ;

-- SELECT MAX(SALARY) FROM EMPLOYEE ;

-- SELECT * FROM DEPARTMENT;









