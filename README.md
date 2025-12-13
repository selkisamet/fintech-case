# Fintech Dashboard

React ile geliştirilmiş modern ve responsive bir fintech dashboard uygulaması, kullanıcılara kapsamlı finansal yönetim araçları sağlar.

## 🚀 Özellikler

- **Dashboard Genel Görünümü**: Grafikler ve ana metriklerle gerçek zamanlı finansal içgörüler
- **İşlem Yönetimi**: Tüm finansal işlemleri görüntüleme ve takip etme
- **Cüzdan Yönetimi**: Birden fazla cüzdan ve hesap yönetimi
- **Fatura İşleme**: Faturalar ve faturalandırma işlemleri
- **Kullanıcı Profili**: Kişisel hesap ayarları ve profil yönetimi
- **Ayarlar**: Uygulama tercihleri ve konfigürasyonları
- **Responsive Tasarım**: Masaüstü ve mobil cihazlar için optimize edilmiş
- **Kimlik Doğrulama**: Güvenli giriş ve kullanıcı oturumu yönetimi
- **Hata Yönetimi**: Sağlam hata sınırları ve API hata yönetimi

## 🛠️ Teknoloji Yığını

- **Frontend**: React 18 with Hooks
- **Build Aracı**: Vite
- **Styling**: Tema desteği ile Styled Components
- **Routing**: React Router DOM
- **HTTP İstemcisi**: Interceptor'lar ile Axios
- **State Yönetimi**: React Context API
- **İkonlar**: Özel SVG ikon bileşenleri
- **Grafikler**: Veri görselleştirme için Chart.js entegrasyonu

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir UI bileşenleri
│   ├── atoms/          # Temel UI elemanları (Button, Input, vb.)
│   ├── molecules/      # Karmaşık UI bileşenleri
│   ├── organisms/      # Sayfa bölümleri
│   └── templates/      # Sayfa düzenleri
├── pages/              # Sayfa bileşenleri
├── context/            # React context'leri
├── hooks/              # Özel React hook'ları
├── services/           # API servisleri
├── styles/             # Global stiller ve temalar
└── utils/              # Yardımcı fonksiyonlar
```

## 🚀 Başlangıç

### Ön Koşullar

- Node.js (16 veya üzeri sürüm)
- npm veya yarn

### Kurulum

1. Depoyu klonlayın:
```bash
git clone https://github.com/selkisamet/fintech-case.git
cd fintech-case
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın.

### Production için Build

```bash
npm run build
```

### Production Build'i Önizleme

```bash
npm run preview
```

## 🔧 Kullanılabilir Scriptler

- `npm run dev` - Hot reload ile geliştirme sunucusunu başlat
- `npm run build` - Production için build
- `npm run preview` - Production build'i yerel olarak önizle
- `npm run lint` - Kod kalitesi için ESLint çalıştır

## 🎨 Mimari Desenler

- **Bileşen Mimarisi**: Atomic Design metodolojisi (atoms, molecules, organisms, templates)
- **Barrel Exports**: Index.js dosyaları ile temiz import'lar
- **Error Boundaries**: Daha iyi kullanıcı deneyimi için graceful hata yönetimi
- **Protected Routes**: Kimlik doğrulama tabanlı rota koruması
- **API Interceptors**: Merkezi API hata yönetimi

## 🔐 Kimlik Doğrulama

Uygulama, otomatik token yenileme ve güvenli depolama ile JWT tabanlı kimlik doğrulaması kullanır.

## 📱 Responsive Tasarım

Tüm cihaz boyutlarında optimal deneyim sağlamak için mobile-first yaklaşımıyla geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik ekle'`)
4. Branch'e push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 Destek

Destek için lütfen geliştirme ekibiyle iletişime geçin veya depoda bir issue oluşturun.
