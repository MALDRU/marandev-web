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

## Probar en local
El sitio usa rutas absolutas (`/assets/...`), así que hay que servirlo desde la raíz del repo (no abrir el HTML con doble clic).
```bash
cd marandev-web
python -m http.server 8099      # en Windows también: py -m http.server 8099
```
Abre:
- `http://localhost:8099/` (español) y `http://localhost:8099/en/` (inglés)
- `http://localhost:8099/apps/agenda-bot/` y `http://localhost:8099/en/apps/agenda-bot/`

Detener el servidor: `Ctrl+C`. Para otro puerto, cambia `8099`; para exponerlo en la red local (probar desde el celular) añade `--bind 0.0.0.0` y entra por `http://<IP-de-tu-PC>:8099`.
