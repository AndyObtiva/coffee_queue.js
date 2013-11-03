PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
INSERT INTO "products" VALUES(1,'Filtered','2013-10-30 19:21:19.847396','2013-10-30 19:21:19.847396');
INSERT INTO "products" VALUES(2,'Latte','2013-10-30 19:21:19.854382','2013-10-30 19:21:19.854382');
INSERT INTO "products" VALUES(3,'Espresso','2013-10-30 19:21:19.856550','2013-10-30 19:21:19.856550');
INSERT INTO "products" VALUES(4,'Cuppoccino','2013-10-30 19:21:19.858536','2013-10-30 19:21:19.858536');
INSERT INTO "products" VALUES(5,'Mocha','2013-10-30 19:21:19.860371','2013-10-30 19:21:19.860371');
INSERT INTO "products" VALUES(6,'Americano','2013-10-31 01:12:22.228774','2013-10-31 01:12:22.228774');
INSERT INTO "product_options" VALUES(1,'Large',1,250,'2013-10-31 01:12:22.163174','2013-10-31 01:12:22.167005');
INSERT INTO "product_options" VALUES(2,'Medium',1,200,'2013-10-31 01:12:22.171169','2013-10-31 01:12:22.172779');
INSERT INTO "product_options" VALUES(3,'Small',1,150,'2013-10-31 01:12:22.175473','2013-10-31 01:12:22.177298');
INSERT INTO "product_options" VALUES(4,'Regular',2,400,'2013-10-31 01:12:22.180636','2013-10-31 01:12:22.182149');
INSERT INTO "product_options" VALUES(5,'Skim',2,400,'2013-10-31 01:12:22.184587','2013-10-31 01:12:22.186411');
INSERT INTO "product_options" VALUES(6,'Single',3,250,'2013-10-31 01:12:22.189481','2013-10-31 01:12:22.190945');
INSERT INTO "product_options" VALUES(7,'Double',3,450,'2013-10-31 01:12:22.193504','2013-10-31 01:12:22.195100');
INSERT INTO "product_options" VALUES(8,'Standard',4,400,'2013-10-31 01:12:22.198454','2013-10-31 01:12:22.200008');
INSERT INTO "product_options" VALUES(9,'Regular',5,450,'2013-10-31 01:12:22.203088','2013-10-31 01:12:22.204689');
INSERT INTO "product_options" VALUES(10,'Regular Skim',5,450,'2013-10-31 01:12:22.207204','2013-10-31 01:12:22.208900');
INSERT INTO "product_options" VALUES(11,'White',5,450,'2013-10-31 01:12:22.211356','2013-10-31 01:12:22.212976');
INSERT INTO "product_options" VALUES(12,'White Skim',5,450,'2013-10-31 01:12:22.215700','2013-10-31 01:12:22.217415');
INSERT INTO "product_options" VALUES(13,'Marble',5,450,'2013-10-31 01:12:22.220163','2013-10-31 01:12:22.221703');
INSERT INTO "product_options" VALUES(14,'Marble Skim',5,450,'2013-10-31 01:12:22.224093','2013-10-31 01:12:22.225576');
INSERT INTO "product_options" VALUES(15,'Standard',6,300,'2013-10-31 01:12:22.232839','2013-10-31 01:12:22.234520');
COMMIT;
