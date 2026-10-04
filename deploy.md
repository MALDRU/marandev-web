# Despliegue en GitHub Pages

Repositorio: `git@github.com:MALDRU/marandev-web.git` · Dominio: `marandev.co`

## 1. Publicar el código
```bash
git remote -v                 # debe mostrar origin -> MALDRU/marandev-web
ssh-add                       # opcional: carga tu llave SSH (pide la clave una vez)
git push -u origin v1:main    # sube la rama actual como main
```
Si el push es rechazado porque `main` ya tiene contenido distinto, revisa antes de usar `--force`.

## 2. Activar Pages
En GitHub: **Settings → Pages**
- Source: *Deploy from a branch*
- Branch: `main` · Folder: `/ (root)` → **Save**

## 3. Dominio propio
- El archivo `CNAME` (con `marandev.co`) ya está en la raíz del repo.
- En **Settings → Pages → Custom domain** escribe `marandev.co` y guarda.
- Activa **Enforce HTTPS** cuando el certificado esté listo (puede tardar unos minutos).

## 4. DNS (en tu proveedor del dominio)
| Tipo  | Nombre | Valor |
|-------|--------|-------|
| A     | @      | 185.199.108.153 |
| A     | @      | 185.199.109.153 |
| A     | @      | 185.199.110.153 |
| A     | @      | 185.199.111.153 |
| CNAME | www    | maldru.github.io |

## 5. Verificar
- `https://marandev.co/` (español) y `https://marandev.co/en/` (inglés).
- Los cambios nuevos se publican con `git push`; Pages tarda 1–2 minutos en actualizar.
