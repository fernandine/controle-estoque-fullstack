-- -------------------------------------------
-- Users and Roles
-- -------------------------------------------

INSERT INTO tb_user (username, email, password) VALUES ('operador', 'teste@operador', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (username, email, password) VALUES ('gerente', 'teste@gerente', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERADOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_GERENTE');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

-- -------------------------------------------
-- Produtos
-- -------------------------------------------

INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('1000010', 'Shampoo', 5, 50);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('2000020', 'Condicionador', 2, 90);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('3000030', 'Espuma de Barbear', 10, 40);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('4000040', 'Hidratante', 4, 25);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('5000050', 'Desodorante', 8, 85);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('6000060', 'Escova de Dente', 12, 20);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('7000070', 'Creme dental', 1, 30);
INSERT INTO tb_produto (EAN, nome, quantidade_minima, saldo_inicial) VALUES ('8000080', 'Sabonete', 6, 95);

-- -------------------------------------------
-- Tipo de movimentação
-- -------------------------------------------

INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (1, 0, 15, '2023-02-24', 'Compra direta', 'INV-1285');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (2, 2, 25, '2023-01-09', 'Venda', 'AJ-12745');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (3, 3, 42, '2023-01-17', 'Ajuste Manual', 'INV-92345');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (4, 4, 37, '2023-01-13', 'Saldo Inicial', 'INV-185345');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (5, 3, 26, '2023-02-21', 'Saldo Iniciaa', 'QP-1445');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (6, 1, 80, '2023-02-10', 'Ajuste Manual', 'INV-1945');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (7, 2, 16, '2023-01-05', 'Venda', 'AJ-12348');
INSERT INTO tb_estoque_movimento (produto_id, tipo_movimento, quantidade, data, motivo, documento) VALUES (8, 3, 7, '2023-01-02', 'Compra direta', 'AV-12645');

