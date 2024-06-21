CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Memasukkan kategori utama
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Audio, Kamera & Elektronik Lainnya', NULL),
(uuid_generate_v4(), 'Buku & Alat Tulis', NULL),
(uuid_generate_v4(), 'Perlengkapan Rumah', NULL),
(uuid_generate_v4(), 'Fashion Anak & Bayi', NULL),
(uuid_generate_v4(), 'Fashion Muslim', NULL),
(uuid_generate_v4(), 'Fashion Pria', NULL),
(uuid_generate_v4(), 'Fashion Wanita', NULL),
(uuid_generate_v4(), 'Handphone & Komputer', NULL),
(uuid_generate_v4(), 'Lainnya', NULL);

-- Memasukkan subkategori untuk 'Audio, Kamera & Elektronik Lainnya'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Audio, Kamera & Elektronik Lainnya')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Konsol Game', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Alat Casting', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Setrika & Mesin Uap', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Penyedot Debu & Peralatan Perawatan Lantai', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Telepon', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pendingin Ruangan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'TV & Aksesoris', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Lampu', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Kamera', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Video Game', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Buku & Alat Tulis'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Buku & Alat Tulis')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Pengetahuan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Fiksi', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Anak', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Alat Tulis', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Menggambar & Mewarnai', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Alat Kantor', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Perlengkapan Rumah'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Perlengkapan Rumah')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Kain Pel', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sapu', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Storage', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Kain Lap', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Kemoceng', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Hangers & Hooks', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Fashion Anak & Bayi'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Fashion Anak & Bayi')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Pakaian Bayi', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Bayi', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Anak Laki-Laki', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Anak Perempuan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Anak Laki-Laki', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Anak Perempuan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Aksesoris Bayi & Anak', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Fashion Muslim'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Fashion Muslim')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Hijab', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Aksesoris Muslim', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Atasan Muslim Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Dress Muslim', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Bawahan Muslim Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Mukena & Perlengkapan Sholat', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Muslim Pria', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Muslima Anak', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Outerwear', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Fashion Pria'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Fashion Pria')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Pakaian Pria', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Pria', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Pria', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Fashion Wanita'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Fashion Wanita')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Pakaian Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Wanita', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Handphone & Komputer'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Handphone & Komputer')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Handphone & Aksesoris', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Komputer & Aksesoris', (SELECT "Id" FROM parent_id));

-- Memasukkan subkategori untuk 'Lainnya'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Lainnya')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Olahraga & Outdoor', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Jam Tangan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Alat Musik', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Otomotif', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Pria - Pakaian Pria'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Pakaian Pria')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Denim', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Hoodie & Sweatshirt', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sweater & Cardingan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Jaket, Mantel, & Rompi', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Jas Formal', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Celana Panjang', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Celana Pendek', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Atasan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Dalam', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Tidur', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Pria - Sepatu Pria'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Sepatu Pria')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Sneakers', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Kaos Kaki', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sandal', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Aksesoris & Perawatan Sepatu', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Boot', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tali Sepatu', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Slip-On & Mules', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Formal', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Pria - Tas Pria'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Tas Pria')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Tas Selempang & Bahu Pria', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Dompet', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Ransel', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Pinggang Pria', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Laptop', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Clutch', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tote Bag', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Kerja', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Wanita - Pakaian Wanita'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Pakaian Wanita')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Atasan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Celana Panjang & Legging', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Celana Pendek', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Rok', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Dress', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Jaket, Mantel & Rompi', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Swater & Cardingan', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Hoodie & Sweatshirt', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Pakaian Tidur & Piyama', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Denim', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Wanita - Sepatu Wanita'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Sepatu Wanita')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Boots', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sneakers', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sepatu Flat', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Loafers & Boat Shoes', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Slip Ons, Mary Janes & Mules', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Heels', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Wedges', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Sandal', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Kaos Kaki & Stocking', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Fashion Wanita - Tas Wanita'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Tas Wanita')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Ransel Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Serut', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Clutch', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Pinggang Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tote Bag', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Top Handle Bag', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tas Selempang & Bahu Wanita', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Dompet Wanita', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Handphone & Komputer - Handphone & Aksesoris'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Handphone & Aksesoris')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Smartwatch', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Headset', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Powerbank', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Casing', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Handphone', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Tablet', (SELECT "Id" FROM parent_id));

-- Memasukkan sub-subkategori untuk 'Handphone & Komputer - Komputer & Aksesoris'
WITH parent_id AS (SELECT "Id" FROM "Categories" WHERE "name" = 'Komputer & Aksesoris')
INSERT INTO "Categories" ("Id", "name", "parentId") VALUES
(uuid_generate_v4(), 'Laptop', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Monitor', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Mouse', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Keyboard', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Storage External', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Networking', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Printer & Tinta', (SELECT "Id" FROM parent_id)),
(uuid_generate_v4(), 'Gaming', (SELECT "Id" FROM parent_id));
