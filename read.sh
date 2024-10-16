#!/bin/bash

# Recorremos solo los archivos .css, .js y .vue, excluyendo carpetas que empiezan por "." y node_modules
find . -type f \( -name "*.css" -o -name "*.js" -o -name "*.vue" \) \
  ! -path "./.*/*" \
  ! -path "./node_modules/*" | while read -r file; do
    echo "Ruta del archivo: $file"
    echo "Contenido:"
    cat "$file"
    echo ""
done
