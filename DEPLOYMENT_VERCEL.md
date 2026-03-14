# 🚀 Deployment en Vercel - Bill Splitter

## Método 1: Deploy desde CLI (Más Rápido)

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```

### 2. Login
```bash
vercel login
```

### 3. Deploy
```bash
cd bill-splitter
vercel
```

Sigue el asistente:
- Setup and deploy? **Yes**
- Which scope? **Tu cuenta**
- Link to existing project? **No**
- Project name? **bill-splitter**
- Directory? **./
- Override settings? **No**

### 4. Configurar Variables de Entorno
```bash
vercel env add NEXT_PUBLIC_N8N_WEBHOOK_URL
# Ingresar: https://n8n.tu-dominio.com/webhook/bill-splitter

vercel env add NEXT_PUBLIC_APP_URL
# Ingresar: https://bill-splitter.vercel.app
```

### 5. Redeploy con variables
```bash
vercel --prod
```

---

## Método 2: Deploy desde GitHub (Recomendado)

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/bill-splitter.git
git push -u origin main
```

### 2. Conectar en Vercel
1. Ir a https://vercel.com/new
2. Import Git Repository
3. Seleccionar tu repo `bill-splitter`
4. Framework Preset: **Next.js** (auto-detectado)
5. Root Directory: **./
6. Build Command: `npm run build` (auto)
7. Output Directory: `.next` (auto)

### 3. Configurar Environment Variables
En Vercel dashboard:
- **Settings** → **Environment Variables**

Agregar:
```
NEXT_PUBLIC_N8N_WEBHOOK_URL = https://n8n.tu-dominio.com/webhook/bill-splitter
NEXT_PUBLIC_APP_URL = https://bill-splitter.vercel.app
```

Aplicar a: **Production, Preview, Development**

### 4. Deploy
- Click **Deploy**
- Esperar build (~2 min)
- ✅ App live en `https://bill-splitter.vercel.app`

---

## Configuración N8N en Easypanel

N8N se queda en Easypanel (como estaba planeado):

### 1. Deploy N8N en Easypanel
```yaml
# docker-compose.yml (solo N8N)
version: '3.8'
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=tu-password
      - WEBHOOK_URL=https://n8n.tu-dominio.com/
      - WHATSAPP_TOKEN=${WHATSAPP_TOKEN}
      - WHATSAPP_PHONE_NUMBER_ID=${WHATSAPP_PHONE_ID}
    restart: unless-stopped
volumes:
  n8n_data:
```

### 2. Configurar dominio en Easypanel
- Dominio: `n8n.tu-dominio.com`
- SSL: Automático

### 3. Importar workflow
1. Acceder a `https://n8n.tu-dominio.com`
2. Import `n8n-workflow.json`
3. Configurar credenciales WhatsApp
4. Activar workflow

---

## Arquitectura Final

```
[Usuario móvil]
      ↓ HTTPS
[Vercel - Frontend]
https://bill-splitter.vercel.app
      ↓ Webhook POST
[Easypanel - N8N]
https://n8n.tu-dominio.com
      ↓ API
[WhatsApp Business API]
      ↓
[Usuarios finales]
```

---

## Configurar Dominio Personalizado (Opcional)

### En Vercel:
1. **Settings** → **Domains**
2. Add Domain: `bill-splitter.tu-dominio.com`
3. Agregar registros DNS:
```
Type: CNAME
Name: bill-splitter
Value: cname.vercel-dns.com
```

### Actualizar ENV:
```
NEXT_PUBLIC_APP_URL = https://bill-splitter.tu-dominio.com
```

---

## Auto-Deploy en cada Push

Con GitHub conectado:
- Push a `main` → Deploy automático a producción
- Push a otras ramas → Preview deployments
- Pull Requests → Preview único

```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel auto-deploys
```

---

## Ventajas Vercel vs Easypanel

| Feature | Vercel | Easypanel |
|---------|--------|-----------|
| Next.js SSR | ✅ Nativo | ⚠️ Requiere config |
| Auto-deploy | ✅ GitHub | ⚠️ Manual |
| Edge Network | ✅ Global CDN | ❌ Single region |
| SSL | ✅ Auto | ✅ Auto |
| Costo | ✅ Free tier | 💰 Desde $5/mes |
| Build time | ⚡ 1-2 min | 🐢 3-5 min |

---

## Monitoreo Vercel

Dashboard incluye:
- **Analytics**: Pageviews, visitors
- **Speed Insights**: Core Web Vitals
- **Logs**: Real-time function logs
- **Deployments**: Historial completo

---

## Troubleshooting

### Build falla en Vercel
```bash
# Local test
npm run build

# Check logs en Vercel dashboard
```

### CORS error con N8N
En N8N, agregar header:
```
Access-Control-Allow-Origin: https://bill-splitter.vercel.app
```

### Variables no se aplican
- Redeploy después de agregar ENV vars
- Check que sean `NEXT_PUBLIC_*` para cliente

---

## Costos

### Free Tier Vercel:
- 100 GB bandwidth
- 100 GB-Hrs execution
- Unlimited deployments
- **Suficiente para MVP**

### Upgrade si necesitas:
- 1 TB bandwidth: $20/mes
- Analytics avanzado
- Team collaboration

---

## Comandos Útiles

```bash
# Deploy production
vercel --prod

# Ver logs
vercel logs

# Ver deployments
vercel ls

# Rollback a versión anterior
vercel rollback [deployment-url]

# Eliminar proyecto
vercel remove bill-splitter
```

---

## ✅ Checklist Final

- [ ] Código en GitHub
- [ ] Proyecto en Vercel conectado
- [ ] Variables ENV configuradas
- [ ] N8N en Easypanel
- [ ] Workflow importado
- [ ] WhatsApp API configurado
- [ ] Dominio custom (opcional)
- [ ] PWA funcional
- [ ] Test completo del flujo

---

## 🎉 Resultado

- **Frontend**: https://bill-splitter.vercel.app
- **Backend**: https://n8n.tu-dominio.com
- **Auto-deploy**: ✅
- **SSL**: ✅
- **Global CDN**: ✅
- **Serverless**: ✅

Todo listo para producción.
