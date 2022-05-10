DROP TABLE IF EXISTS shop_categories_table;
CREATE TABLE categories_table (
  id         INT AUTO_INCREMENT NOT NULL,
  category_name     VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO shop_categories_table 
  (id, category_name) 
VALUES
 