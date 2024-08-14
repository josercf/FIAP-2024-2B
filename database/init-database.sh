#!/bin/bash
set -e

# Diretório onde os scripts SQL estão localizados
DATABASE_DIR="/docker-entrypoint-initdb.d"

# Função para esperar o MySQL estar disponível
wait_for_mysql() {
  until mysqladmin ping -h "$MYSQL_HOST" --silent; do
    echo "Esperando o MySQL iniciar..."
    sleep 3
  done
}

# Espera o MySQL estar disponível
wait_for_mysql

# Itera sobre todos os arquivos SQL na pasta
for file in $DATABASE_DIR/*.sql; do
  # Se o arquivo não for o 03-fluxo-compra.sql, execute
  if [[ "$file" != "$DATABASE_DIR/03-fluxo-compra.sql" ]]; then
    echo "Executando $file"
    mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" < "$file"
  else
    echo "Ignorando $file"
  fi
done
