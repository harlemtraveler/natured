\c natureDB

INSERT INTO categories
  (categories)
VALUES
  ('Camping'),
  ('Hiking'),
  ('Skydiving'),
  ('Fishing'),
  ('Running');

INSERT INTO products
  (user_id,name,description,price,category_id,stock)
 VALUES
  (null,'Red bull parachute','This is a top of the line parachute mad ein the USA.', '1500','3','6'),
  (null,'Fishermans´rod','This is a heavy duty fishing rod, perfect for heavy fish such as marlin, swordfish, and groupers', '1000','4','22'),
  (null,'Appalachian tent','This is a reliable camping tent designed for temperate regions', '3000','1','10'),
  (null,'Nike pro','This shoes are design for jogging lovers.', '100','5','40'),
  (null,'Hike pro','The perfect backpack to go hicking', '500','2','13');


