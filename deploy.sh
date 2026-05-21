#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

GREEN='\033[0;32m'; CYAN='\033[0;36m'; BOLD='\033[1m'; NC='\033[0m'
step() { echo -e "\n${CYAN}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}✓ $1${NC}"; }

HASH=$(git rev-parse --short HEAD)

step "Inyectando versión de cache (v${HASH})..."
find . -name "*.html" -not -path "./.git/*" | while IFS= read -r f; do
  sed -i "s|style\.css[^\"']*|style.css?v=${HASH}|g" "$f"
  sed -i "s|main\.js[^\"']*|main.js?v=${HASH}|g" "$f"
done
ok "Referencias actualizadas en todos los HTML"

step "Commiteando y subiendo..."
git add -A
if git diff --cached --quiet; then
  ok "Sin cambios — nada que pushear"
else
  git commit -m "deploy: v${HASH}"
  git push origin main
  ok "Publicado en https://marandev.co"
fi

echo -e "\n${GREEN}${BOLD}Deploy completado.${NC}"
