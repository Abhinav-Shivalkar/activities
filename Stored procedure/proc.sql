DELIMITER //
CREATE PROCEDURE read_det()
BEGIN
SELECT * FROM EMPLOYEE;
END //

CALL read_det();


DELIMITER //
CREATE PROCEDURE ins_det(e_id int,e_name tinytext,e_dob date,e_jd date,e_phone bigint(12),e_email varchar(50),sect tinytext)
BEGIN
INSERT INTO EMPLOYEE (ID,NAME,DOB,J_DATE,PHONE_NO,EMAIL_ID,SECTION)
VALUES(e_id,e_name,e_dob,e_jd,e_phone,e_email,sect);
END //

CALL ins_det(2,'Sachin Tendulkar','1973-04-24','2023-06-1',918973641747,'sachin@gmail.com','Solution analyst');

DELIMITER //
CREATE PROCEDURE delete_details(e_id int)
BEGIN
DELETE FROM EMPLOYEE WHERE ID=e_id;
END //

CALL delete_details(2);

DELIMITER //
CREATE PROCEDURE up_det(e_id int,e_email varchar(50))
BEGIN
UPDATE EMPLOYEE 
SET EMAIL_ID = e_email
WHERE id=e_id;
END //

CALL up_det(1,'abhinav.s@gmail.com');



