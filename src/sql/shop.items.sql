DROP TABLE IF EXISTS shop_items_table;
CREATE TABLE shop_items_table (
  id         INT AUTO_INCREMENT NOT NULL,
  item_name     VARCHAR(300) NOT NULL,
    category_id    VARCHAR(300) NOT NULL,
 price    VARCHAR(300) NOT NULL,
   image_url     VARCHAR(300) NOT NULL,


  PRIMARY KEY (`id`)
);

INSERT INTO categories_table 
  (id, item_name,category_id,price,image_url) 
VALUES