# 🚀 Guia de Deploy - Site Virtue

## 📋 Checklist de Deploy

### ✅ Arquivos Criados
- ✅ `index.html` - Página principal com design futurista
- ✅ `styles.css` - CSS com glassmorphism e tema escuro
- ✅ `script.js` - JavaScript avançado com funcionalidades modernas
- ✅ `.htaccess` - Configurações de segurança para Apache
- ✅ `README.md` - Documentação completa
- ✅ `manifest.json` - Configuração PWA
- ✅ `DEPLOYMENT_GUIDE.md` - Este guia

### 🔧 Configurações Necessárias

#### 1. Número do WhatsApp
**⚠️ IMPORTANTE**: Altere o número do WhatsApp em todos os links:
- Procure por: `5511999999999`
- Substitua por: seu número real (ex: `5511987654321`)

#### 2. URLs de Mídia
- Logo: `https://res.cloudinary.com/dgpmddse2/image/upload/v1753811436/Design_sem_nome_wvghzf.png`
- Vídeo: `https://res.cloudinary.com/dgpmddse2/video/upload/v1753811444/Design_sem_nome_qpnjuk.mp4`

### 🌐 Deploy em Hospedagem

#### Para Apache (com .htaccess)
1. Faça upload de todos os arquivos
2. Certifique-se de que mod_rewrite está ativo
3. Configure SSL/HTTPS
4. Teste todas as funcionalidades

#### Para Nginx
Use as seguintes configurações no server block:

```nginx
# Força HTTPS
if ($scheme != "https") {
    return 301 https://$server_name$request_uri;
}

# Headers de Segurança
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; img-src 'self' https://res.cloudinary.com data:; video-src 'self' https://res.cloudinary.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; connect-src 'self' https://api.whatsapp.com;" always;

# Cache de arquivos estáticos
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Compressão
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
```

### 🔒 Verificações de Segurança

#### Headers de Segurança
- ✅ Content Security Policy configurado
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ HTTPS obrigatório

#### Validações
- ✅ Sanitização de inputs implementada
- ✅ Proteção contra scripts maliciosos
- ✅ Lazy loading seguro
- ✅ Tratamento de erros adequado

### 📱 Testes de Responsividade

#### Dispositivos para Testar
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop 1920px+

#### Funcionalidades Mobile
- [ ] Menu mobile funcionando
- [ ] Vídeo com fallback em dispositivos móveis
- [ ] Touch interactions nos cards
- [ ] Scroll suave funcionando
- [ ] Botões com tamanho adequado (mín. 44px)

### ⚡ Performance

#### Core Web Vitals Alvo
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

#### Otimizações Implementadas
- ✅ Lazy loading de imagens
- ✅ Vídeo otimizado para mobile
- ✅ CSS e JS minificados (produção)
- ✅ Compressão gzip/brotli
- ✅ Cache de recursos estáticos

### 🚀 SEO e Acessibilidade

#### Meta Tags
- ✅ Title otimizado
- ✅ Meta description
- ✅ Open Graph tags
- ✅ Canonical URL
- ✅ Viewport configurado

#### Acessibilidade
- ✅ Alt text em imagens
- ✅ Focus states nos elementos interativos
- ✅ Contraste adequado
- ✅ Navegação por teclado
- ✅ ARIA labels onde necessário

### 📊 Analytics e Monitoramento

#### Configurar
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Facebook Pixel (opcional)
- [ ] Hotjar ou similar (opcional)

#### Eventos Trackados
- ✅ Cliques em CTAs
- ✅ Scroll depth
- ✅ Tempo de carregamento
- ✅ Erros JavaScript

### 🔄 Pós-Deploy

#### Verificações Imediatas
1. [ ] Site carrega corretamente
2. [ ] HTTPS funcionando
3. [ ] Formulários funcionando
4. [ ] Links do WhatsApp corretos
5. [ ] Vídeo de fundo funcionando
6. [ ] Menu mobile responsivo
7. [ ] Performance satisfatória

#### Monitoramento Contínuo
- [ ] Configurar alertas de uptime
- [ ] Monitorar Core Web Vitals
- [ ] Verificar logs de erro
- [ ] Testar em diferentes navegadores

### 🛠️ Manutenção

#### Semanal
- [ ] Verificar uptime
- [ ] Revisar analytics
- [ ] Backup dos arquivos

#### Mensal
- [ ] Teste de velocidade
- [ ] Verificação de links quebrados
- [ ] Atualização de conteúdo se necessário
- [ ] Análise de conversões

#### Semestral
- [ ] Auditoria de segurança
- [ ] Revisão de performance
- [ ] Atualização de dependências
- [ ] Teste em novos dispositivos

### 📞 Suporte Técnico

#### Problemas Comuns

**Vídeo não carrega:**
- Verificar URL do vídeo
- Confirmar conectividade
- Validar formato MP4

**Menu mobile não funciona:**
- Verificar JavaScript carregado
- Confirmar IDs dos elementos
- Testar em diferentes navegadores

**Performance lenta:**
- Verificar compressão ativa
- Validar cache configurado
- Otimizar imagens se necessário

---

**🎯 Status:** ✅ Site pronto para produção
**📅 Criado:** Janeiro 2025
**🔄 Última atualização:** Deploy inicial

**💡 Desenvolvido com tecnologias modernas e foco em segurança, performance e experiência do usuário.** 