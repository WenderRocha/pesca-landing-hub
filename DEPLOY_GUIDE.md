.


## ⚙️ Configuração Passo a Passo

### 1. Preparar arquivos
Extraia o arquivo zip gerado na ferramenta, copie e cole o conteudo dentro do seu projeto.
*Irá substituir o seu arquivo .gitignore.

**IMPORTANTE:** NÃO ignore a pasta `dist/` - ela será buildada pelo GitHub Action.
**IMPORTANTE:** Caso não tenha gerado via ferramenta, no arquivo cpanel.yml nas linhas 5 e 6 altere o valor SEUUSUARIO para o nome de usuário da sua conta cPanel.

### 5. Configurar Permissões no GitHub

1. Vá em **Settings → Actions → General**
2. **Workflow permissions** → **Read and write permissions** ✅
3. **Allow GitHub Actions to create and approve pull requests** ✅

### 6. Configurar Git Deploy no cPanel

1. **Acesse seu cPanel**
2. **Vá em "Controle de Versão do Git™"**
3. **Clique em "Criar"**
4. **Configure:**
   - **Clonar URL:** `https://github.com/SEU_USUARIO/SEU_REPO.git`
   - **Nome:** `NOME_DO_REPO`
   - **Branch:** `main`
   - **Diretório:** `repositories/NOME_DO_REPO`

## 🚀 Deploy

### Primeiro Deploy

1. **Faça commit** de todos os arquivos:
   ```bash
   git add .
   git commit -m "initial setup with deploy config"
   git push origin main
   ```

2. **Aguarde** o GitHub Action fazer o build (2-3 minutos)

3. **No cPanel**, vá em **Git Deploy** e clique em **"Implementar"**

### Deploys Futuros

**Automático:** Apenas faça push e aguarde!

```bash
git add .
git commit -m "sua alteração"
git push origin main
```

**Fluxo:**
1. Push → GitHub Action builda
2. Action commita `dist/`
3. cPanel detecta novo commit
4. Git Deploy executa automaticamente
5. Site atualizado!


### Deploy Manual (Alternativa)

Se o Git Deploy falhar:

1. **Faça build local:**
   ```bash
   npm run build
   ```

2. **Compacte a pasta dist:**
   ```bash
   cd dist
   zip -r ../site.zip .
   ```

3. **No cPanel File Manager:**
   - Vá em `public_html`
   - Delete arquivos antigos
   - Upload e extraia `site.zip`
   - Copie `.htaccess` para `public_html`
