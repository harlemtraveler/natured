INSERT INTO categories
  (categories, img_url)
VALUES
  ('Camping', 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80'),
  ('Hiking', 'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80'),
  ('Skydiving', 'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c908728ab8df488716426562f8c8e4&auto=format&fit=crop&w=967&q=80'),
  ('Fishing', 'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80'),
  ('Running', 'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80');

INSERT INTO products
  (user_id,name,description,price,category_id,stock)
 VALUES
  (null,'Red bull parachute','This is a top of the line parachute mad ein the USA.', '1500','3','6'),
  (null,'Fishermans´rod','This is a heavy duty fishing rod, perfect for heavy fish such as marlin, swordfish, and groupers', '1000','4','22'),
  (null,'Appalachian tent','This is a reliable camping tent designed for temperate regions', '3000','1','10'),
  (null,'Nike pro','This shoes are design for jogging lovers.', '100','5','40'),
  (null,'Hike pro','The perfect backpack to go hicking', '500','2','13');

INSERT INTO states
  (state)
VALUES
  ('Alabama'),
  ('Alaska'),
  ('Arizona'),
  ('Arkansas'),
  ('California'),
  ('Colorado'),
  ('Connecticut'),
  ('Delaware'),
  ('Florida'),
  ('Georgia'),
  ('Hawaii'),
  ('Idaho'),
  ('Illinois'),
  ('Indiana'),
  ('Iowa'),
  ('Kansas'),
  ('Kentucky'),
  ('Loisiana'),
  ('Maine'),
  ('Maryalnd'),
  ('Massachsets'),
  ('Michigan'),
  ('Minnesota'),
  ('Missisipi'),
  ('Missouri'),
  ('Montana'),
  ('Nebraska'),
  ('Nevada'),
  ('New Hamshire'),
  ('New Jersey'),
  ('New Mexico'),
  ('North Carolina'),
  ('Norht Dakota'),
  ('Ohio'),
  ('Oklahoma'),
  ('Oregon'),
  ('Pennsylvannia'),
  ('Rhode Island'),
  ('South Carolina'),
  ('South Dakota'),
  ('Tennesse'),
  ('Texas'),
  ('Utah'),
  ('Vermont'),
  ('Virginia'),
  ('Washington'),
  ('West Virginia'),
  ('Wisconsin'),
  ('Wyoming');

