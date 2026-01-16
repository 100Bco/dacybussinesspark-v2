# 🎨 Hướng dẫn Upload Logo Files

Code đã được cập nhật để sử dụng logo thật. Bây giờ bạn cần upload các file logo lên GitHub.

## ✅ Các file logo cần upload

Tất cả files phải được upload vào folder: **`public/images/partners/`**

| Tên file (chính xác) | Mô tả |
|---------------------|-------|
| `Dacy logo.png` | Logo Dacy Business Park (dùng nhiều nơi) |
| `sage bank logo.png` | Logo Sage Capital Bank |
| `LT Commercial group logo.png` | Logo LT Commercial Group |
| `Tacoman logo.jpg` | Logo Taco Man |
| `Subele logo.png` | Logo Súbele Tequila |

**LƯU Ý:** Tên file PHẢI GIỐNG CHÍNH XÁC như trên (bao gồm khoảng trắng và chữ hoa/thường).

---

## 📤 Cách upload lên GitHub

### Phương pháp 1: Upload qua GitHub Web (Khuyến nghị - Dễ nhất)

1. Vào repository trên GitHub:
   ```
   https://github.com/100Bco/dacybussinesspark-v2
   ```

2. Chuyển sang branch `claude/fix-section-heights-vOsuX`:
   - Click dropdown "main" ở góc trên bên trái
   - Chọn branch: `claude/fix-section-heights-vOsuX`

3. Navigate đến folder `public/images/partners/`:
   - Click vào folder `public`
   - Click vào folder `images`
   - Click vào folder `partners`

4. Upload files:
   - Click nút **"Add file"** → **"Upload files"**
   - Kéo thả 5 file logo vào
   - Hoặc click "choose your files" để chọn

5. Commit:
   - Scroll xuống dưới
   - Nhập commit message: `Add partner logo files`
   - Click **"Commit changes"**

6. ✅ Xong! Website sẽ tự động hiển thị logos.

---

### Phương pháp 2: Upload qua Git Command Line

Nếu bạn có logos trong máy local:

```bash
# 1. Copy logo files vào folder
cp "path/to/your/Dacy logo.png" public/images/partners/
cp "path/to/your/sage bank logo.png" public/images/partners/
cp "path/to/your/LT Commercial group logo.png" public/images/partners/
cp "path/to/your/Tacoman logo.jpg" public/images/partners/
cp "path/to/your/Subele logo.png" public/images/partners/

# 2. Add và commit
git add public/images/partners/
git commit -m "Add partner logo files"

# 3. Push
git push origin claude/fix-section-heights-vOsuX
```

---

## 🔍 Kiểm tra sau khi upload

Sau khi upload xong, kiểm tra các vị trí sau sẽ hiển thị logos:

### 1. **LeftPanel (Sidebar trái)**
   - Top header: Dacy logo (trắng)

### 2. **Section 4: Partners**
   - **Tier 1:** Sage Capital Bank logo
   - **Tier 2:**
     - LT Commercial Group logo
     - Dacy Business Park logo
   - **Tier 3 (Hospitality):**
     - Taco Man logo
     - Súbele Tequila logo

### 3. **Footer**
   - Dacy logo (trắng)

---

## ⚠️ Troubleshooting

### Vấn đề: Logo không hiển thị

**Nguyên nhân 1: Tên file không khớp**
- ✅ Đúng: `Dacy logo.png`
- ❌ Sai: `dacy logo.png`, `Dacy Logo.png`, `Dacy_logo.png`

**Nguyên nhân 2: File ở sai folder**
- ✅ Đúng: `public/images/partners/Dacy logo.png`
- ❌ Sai: `images/partners/Dacy logo.png`

**Nguyên nhân 3: Cache browser**
- Giải pháp: Hard refresh (Ctrl+Shift+R hoặc Cmd+Shift+R)

### Vấn đề: Logo bị vỡ/méo

**Khuyến nghị kích thước:**
- Sage Bank: tối thiểu 400px chiều cao, nền trong suốt
- LT Commercial / Dacy: tối thiểu 300px chiều cao
- Taco Man / Súbele: tối thiểu 200px chiều cao

**Format tốt nhất:**
- PNG với nền trong suốt (recommended)
- JPG nếu có nền trắng

---

## 📝 Đổi tên file (nếu cần)

Nếu file hiện tại của bạn có tên khác, bạn có 2 lựa chọn:

### Option 1: Đổi tên file của bạn để khớp
Đổi tên files trong máy để khớp với tên trên trước khi upload.

### Option 2: Sửa code để khớp tên file của bạn
Nếu muốn giữ tên file khác, báo cho tôi biết tên files của bạn và tôi sẽ update code.

---

## ✅ Summary Checklist

- [ ] Upload `Dacy logo.png`
- [ ] Upload `sage bank logo.png`
- [ ] Upload `LT Commercial group logo.png`
- [ ] Upload `Tacoman logo.jpg`
- [ ] Upload `Subele logo.png`
- [ ] Kiểm tra LeftPanel header có Dacy logo
- [ ] Kiểm tra Section 4 có 5 logos
- [ ] Kiểm tra Footer có Dacy logo
- [ ] Hard refresh browser (Ctrl+Shift+R)

---

**Câu hỏi?** Cứ hỏi nếu gặp vấn đề! 🚀
