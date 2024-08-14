ALTER TABLE Estoque
ADD CONSTRAINT chk_quantidade_disponivel CHECK (quantidade_disponivel >= 0);
