# 🚀 Site Virtue - Agência Digital

Site moderno, responsivo e seguro para a agência de marketing digital **Virtue**, desenvolvido com foco em performance, segurança e experiência do usuário.

## 🎨 Características do Design

- **Tema Escuro**: Design elegante com paleta escura
- **Glamorphismo**: Efeito vidro fosco com blur e transparências
- **Responsivo**: Adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Performance Otimizada**: Carregamento rápido e eficiente

## 🔒 Medidas de Segurança Implementadas

### Headers de Segurança
- **Content Security Policy (CSP)**: Previne ataques XSS
- **X-Content-Type-Options**: Evita MIME type sniffing
- **X-Frame-Options**: Protege contra clickjacking
- **X-XSS-Protection**: Proteção adicional contra XSS
- **Referrer-Policy**: Controla informações de referência

### Proteções JavaScript
- **Sanitização de Inputs**: Prevenção contra XSS
- **Validação de Formulários**: Interceptação e validação segura
- **Tratamento de Erros**: Captura e log de erros globais
- **Lazy Loading Seguro**: Carregamento otimizado de recursos

### Recursos Externos Seguros
- **CDN Confiáveis**: Apenas recursos de fontes verificadas
- **Preconnect/Prefetch**: Otimização de conexões seguras
- **Loading Attributes**: Controle de carregamento de mídia

## 📁 Estrutura de Arquivos

```
site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS com glamorphismo
├── script.js           # JavaScript funcional e seguro
└── README.md           # Esta documentação
```

## 🛠️ Personalização

### 1. Alterar Informações de Contato

**WhatsApp**: Substitua o número nos links
```html
<!-- Procure por esta linha no index.html -->
<a href="https://api.whatsapp.com/send?phone=5511999999999">
<!-- Altere para seu número -->
<a href="https://api.whatsapp.com/send?phone=SEU_NUMERO_AQUI">
```

### 2. Modificar Logo e Vídeo

**Logo**: Substitua a URL da imagem
```html
<!-- No index.html, procure por -->
<img src="https://res.cloudinary.com/dgpmddse2/image/upload/v1753811436/Design_sem_nome_wvghzf.png" alt="Logo Virtue" class="logo" />
<!-- Altere para sua URL -->
<img src="SUA_URL_DO_LOGO" alt="Logo Virtue" class="logo" />
```

**Vídeo de Fundo**: Altere a URL do vídeo
```html
<!-- No index.html, procure por -->
<source src="https://res.cloudinary.com/dgpmddse2/video/upload/v1753811444/Design_sem_nome_qpnjuk.mp4" type="video/mp4">
<!-- Altere para sua URL -->
<source src="SUA_URL_DO_VIDEO" type="video/mp4">
```

### 3. Personalizar Cores

No arquivo `styles.css`, modifique as variáveis CSS:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-color: #667eea;
    /* Altere estas cores conforme sua marca */
}
```

### 4. Adicionar Novos Serviços

No `index.html`, na seção de serviços, adicione novos cards:

```html
<div class="service-card">
    <div class="service-icon">🤖</div>
    <h3>Automação com IA</h3>
    <p>Descrição do novo serviço...</p>
    <ul class="service-features">
        <li>Funcionalidade 1</li>
        <li>Funcionalidade 2</li>
    </ul>
</div>
```

## 🚀 Como Usar

### 1. Hospedagem
- Faça upload dos arquivos para seu servidor web
- Certifique-se de que o servidor suporta HTTPS
- Configure os headers de segurança no servidor (opcional)

### 2. Domínio e SSL
- Configure um certificado SSL válido
- Use sempre HTTPS para máxima segurança
- Configure redirecionamentos HTTP → HTTPS

### 3. Monitoramento
- Monitore os logs do console para erros
- Verifique a performance regularmente
- Teste em diferentes dispositivos e navegadores

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px
- **Mobile Pequeno**: até 480px

## ⚡ Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregam sob demanda
- **Video Optimization**: Vídeo pausa quando não visível
- **CSS Minification**: Estilos otimizados
- **JavaScript Efficiency**: Código otimizado e modular

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Manutenção

### Atualizações Regulares
1. **Conteúdo**: Mantenha textos e imagens atualizados
2. **Links**: Verifique links externos regularmente
3. **Segurança**: Monitore vulnerabilidades conhecidas
4. **Performance**: Teste velocidade mensalmente

### Backup
- Faça backup regular dos arquivos
- Mantenha cópias das personalizações
- Documente mudanças importantes

## 🐛 Resolução de Problemas

### Vídeo não carrega
- Verifique a URL do vídeo
- Confirme formato MP4 compatível
- Teste conexão com o CDN

### Menu mobile não funciona
- Verifique se o JavaScript está carregando
- Confirme IDs dos elementos HTML
- Teste em diferentes navegadores

### Animações não aparecem
- Verifique suporte do navegador
- Confirme se `IntersectionObserver` está disponível
- Teste com `prefers-reduced-motion` desabilitado

## 📞 Suporte

Para dúvidas sobre personalização ou problemas técnicos:
- Consulte os comentários no código
- Verifique o console do navegador para erros
- Teste em modo privado/incógnito

## 📄 Licença

Este código foi desenvolvido especificamente para a **Virtue** e pode ser modificado conforme necessário para atender às necessidades da agência.

---

**Desenvolvido com 💡 por jovens com visão de futuro.**

*Última atualização: Janeiro 2025* 