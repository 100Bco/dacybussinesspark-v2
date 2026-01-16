# Images Directory

Folder này chứa tất cả ảnh cho Dacy Business Park website.

## Cấu trúc thư mục

```
public/images/
├── hero/          # Ảnh cho hero section (background, header images)
├── gallery/       # Ảnh cho carousel/gallery section (project images)
├── hospitality/   # Ảnh cho hospitality section (food, drinks)
└── partners/      # Logo của partners và sponsors
```

## Cách sử dụng

### 1. Upload ảnh vào folder tương ứng

Đặt ảnh của bạn vào folder phù hợp:
- Hero images → `public/images/hero/`
- Project gallery → `public/images/gallery/`
- Hospitality images → `public/images/hospitality/`
- Partner logos → `public/images/partners/`

### 2. Reference ảnh trong code

Trong file component (ví dụ: `RightPanel.tsx`), bạn có thể reference ảnh như sau:

```tsx
// Thay vì dùng Unsplash URL:
src="https://images.unsplash.com/photo-xxx"

// Sử dụng local image:
src="/images/hero/background.jpg"
src="/images/gallery/project-1.jpg"
src="/images/hospitality/tacos.jpg"
```

### 3. Best practices

- **Tên file:** Sử dụng tên file rõ ràng, lowercase, dấu gạch ngang
  - ✅ `hero-background.jpg`, `project-exterior-1.jpg`
  - ❌ `IMG_1234.jpg`, `photo 1.jpg`

- **Format:**
  - JPG cho photos (nhỏ hơn, phù hợp cho web)
  - PNG cho logos (trong suốt)
  - WebP cho optimization tốt nhất

- **Kích thước:**
  - Hero images: 1920x1080 hoặc lớn hơn
  - Gallery images: 1200x800 hoặc tương đương
  - Hospitality images: 800x800 (square)
  - Logos: 500x500 hoặc SVG

- **Tối ưu hóa:** Nén ảnh trước khi upload để tăng tốc độ tải trang
  - Công cụ: TinyPNG, ImageOptim, Squoosh

## Ví dụ migration

### Hiện tại (Unsplash):
```tsx
const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301",
];
```

### Sau khi upload local images:
```tsx
const PROJECT_IMAGES = [
  "/images/gallery/industrial-exterior.jpg",
  "/images/gallery/modern-flex-space.jpg",
];
```

## Note

Files trong folder `public/` sẽ được serve trực tiếp từ root URL.
- `public/images/hero/bg.jpg` → accessible tại `/images/hero/bg.jpg`
