CREATE TABLE products (
    id uuid primary key,
    title varchar(20),
    description  varchar(50),
    price integer
);

CREATE TABLE stocks (
    product_id uuid,
    count integer,
    CONSTRAINT fk_product
      FOREIGN KEY(product_id)
	  REFERENCES products(id)
);
