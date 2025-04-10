### Source Explain

```
vue-application/
├── src/                                # Thư mục chứa source chính
│   ├── api/                            # Thư mục chứa các request API
│   │   ├── axiosInstance.ts            # Cấu hình Axios
│   │   ├── auth.ts                     # API xác thực
│   │   └── user.ts                     # API cho người dùng
│   │
│   ├── assets/                         # Thư mục chứa (images, fonts, etc.)
│   │   ├── fonts/                      # Thư mục chứa font chữ
│   │   ├── icons/                      # Thư mục chứa các icon
│   │   ├── images/                     # Thư mục chứa hình ảnh
│   │
│   ├── components/                     # Thư mục chứa các component
│   │   ├── layout/                     # Component layout
│   │   ├── ui/                         # Component giao diện người dùng
│   │   └── LanguageSwitcher.vue        # Component chuyển đổi ngôn ngữ
│   │
│   ├── composables/                    # Thư mục chứa các composable
│   │   ├── useI18n.ts                  # Composable xử lý đa ngôn ngữ
│   │   └── useAuth.ts                  # Composable xử lý xác thực
│   │
│   ├── directives/                     # Thư mục chứa các directive
│   │   └── index.ts                    # File đăng ký các directive
│   │
│   ├── i18n/                          # Thư mục chứa cấu hình đa ngôn ngữ
│   │   ├── locales/                    # Thư mục chứa file ngôn ngữ
│   │   │   ├── en.ts                   # File ngôn ngữ tiếng Anh
│   │   │   └── vi.ts                   # File ngôn ngữ tiếng Việt
│   │   ├── index.ts                    # Cấu hình i18n
│   │   └── types.ts                    # Định nghĩa kiểu dữ liệu
│   │
│   ├── layouts/                        # Thư mục chứa các layout
│   │   ├── MainLayout.vue              # Layout chính
│   │   └── AdminLayout.vue             # Layout quản trị
│   │
│   ├── router/                         # Thư mục cấu hình router
│   │   ├── guards.ts                   # Xử lý bảo vệ route
│   │   ├── routes.ts                   # Định nghĩa các route
│   │   └── index.ts                    # Khởi tạo router
│   │
│   ├── stores/                         # Thư mục quản lý state
│   │   └── counter.ts                  # State quản lý counter
│   │
│   ├── styles/                         # Thư mục chứa styles
│   │   ├── main.css                    # File CSS chính
│   │   ├── variables.scss              # Biến SCSS
│   │   └── tailwindcss.css             # Cấu hình Tailwind CSS
│   │
│   ├── views/                          # Thư mục chứa các trang
│   │   ├── Home.vue                    # Trang chủ
│   │   ├── About.vue                   # Trang giới thiệu
│   │   └── NotFound.vue                # Trang 404
│   │
│   ├── App.vue                         # Component gốc
│   ├── main.ts                         # Điểm khởi đầu ứng dụng
│   ├── permission.ts                   # Quản lý quyền truy cập
│   └── vite-env.d.ts                   # Khai báo môi trường Vite
│
├── .github/                            # Cấu hình GitHub
│   └── workflows/                      # Cấu hình CI/CD
│       └── deploy.yml                  # Cấu hình deploy
│
├── .husky/                            # Cấu hình Git hooks
│   └── pre-commit                     # Hook chạy trước khi commit
│
├── .vscode/                           # Cấu hình VS Code
├── dist/                              # Thư mục build
├── node_modules/                      # Thư mục chứa các dependency
├── public/                            # Thư mục chứa tài nguyên tĩnh
├── .DS_Store                          # File cấu hình macOS
├── .editorconfig                      # Cấu hình Editor
├── .eslintignore                      # Cấu hình bỏ qua ESLint
├── .eslintrc.json                     # Cấu hình ESLint
├── .gitignore                         # Cấu hình Git ignore
├── .prettierignore                    # Cấu hình bỏ qua Prettier
├── .prettierrc                        # Cấu hình Prettier
├── docker-compose.yml                 # Cấu hình Docker Compose
├── Dockerfile                         # Cấu hình Docker
├── index.html                         # File HTML gốc
├── nginx.conf                         # Cấu hình Nginx
├── package-lock.json                  # Lock các dependency
├── package.json                       # Cấu hình và dependency
├── postcss.config.js                  # Cấu hình PostCSS
├── tailwind.config.js                 # Cấu hình Tailwind CSS
├── tsconfig.app.json                  # Cấu hình TypeScript cho app
├── tsconfig.json                       # Cấu hình TypeScript
├── tsconfig.node.json                  # Cấu hình TypeScript cho node
└── vite.config.ts                     # Cấu hình Vite
```

### Giải thích cấu trúc thư mục

- **src/**: Chứa toàn bộ mã nguồn của ứng dụng

    - **api/**: Tầng tích hợp API với backend
        - `axiosInstance.ts`: Cấu hình và xử lý Axios
        - `auth.ts`: API xác thực (đăng nhập, đăng xuất, etc.)
        - `user.ts`: API quản lý người dùng
    - **assets/**: Chứa các tài nguyên tĩnh
        - **fonts/**: Chứa các file font chữ
        - **icons/**: Chứa các icon
        - **images/**: Chứa hình ảnh
        - `vue.svg`: Logo Vue
    - **components/**: Chứa các component có thể tái sử dụng
        - **layout/**: Component liên quan đến layout
        - **ui/**: Component giao diện (nút, input, card, etc.)
        - `LanguageSwitcher.vue`: Component chuyển đổi ngôn ngữ
    - **composables/**: Chứa các composable Vue
        - `useI18n.ts`: Xử lý logic đa ngôn ngữ
        - `useAuth.ts`: Xử lý logic xác thực
    - **directives/**: Chứa các directive tùy chỉnh
        - `index.ts`: Đăng ký và xuất các directive
    - **i18n/**: Chứa cấu hình đa ngôn ngữ
        - **locales/**: Chứa file ngôn ngữ
            - `en.ts`: File ngôn ngữ tiếng Anh
            - `vi.ts`: File ngôn ngữ tiếng Việt
        - `index.ts`: Cấu hình i18n
        - `types.ts`: Định nghĩa kiểu dữ liệu
    - **layouts/**: Chứa các component layout
        - `MainLayout.vue`: Layout chính của ứng dụng
        - `AdminLayout.vue`: Layout cho phần quản trị
    - **router/**: Cấu hình Vue Router
        - `guards.ts`: Xử lý bảo vệ route
        - `routes.ts`: Định nghĩa và cấu hình route
        - `index.ts`: Khởi tạo và cấu hình router
    - **stores/**: Quản lý state với Pinia
        - `counter.ts`: Quản lý state counter
    - **styles/**: Chứa các file CSS
        - `main.css`: File CSS chính
        - `variables.scss`: Biến và cấu hình theme SCSS
        - `tailwindcss.css`: Cấu hình và style Tailwind CSS
    - **views/**: Chứa các component trang
        - `Home.vue`: Trang chủ
        - `About.vue`: Trang giới thiệu
        - `NotFound.vue`: Trang 404
    - **App.vue**: Component gốc của ứng dụng
    - **main.ts**: Điểm khởi đầu của ứng dụng
    - **permission.ts**: Quản lý quyền truy cập
    - **vite-env.d.ts**: Khai báo môi trường Vite

- **.github/**: Cấu hình GitHub
    - **workflows/**: Cấu hình CI/CD
        - `deploy.yml`: Cấu hình quy trình deploy
- **.husky/**: Cấu hình Git hooks
    - `pre-commit`: Hook chạy trước khi commit
- **.vscode/**: Cấu hình VS Code
- **dist/**: Thư mục chứa code đã được build
- **node_modules/**: Chứa các dependency đã cài đặt
- **public/**: Chứa các tài nguyên tĩnh được phục vụ trực tiếp
- Các file cấu hình:
    - **.editorconfig**: Cấu hình Editor
    - **.eslintignore**: Cấu hình bỏ qua ESLint
    - **.eslintrc.json**: Cấu hình ESLint
    - **.gitignore**: Cấu hình Git ignore
    - **.prettierignore**: Cấu hình bỏ qua Prettier
    - **.prettierrc**: Cấu hình Prettier
    - **docker-compose.yml**: Cấu hình Docker Compose
    - **Dockerfile**: Cấu hình Docker
    - **index.html**: File HTML gốc
    - **nginx.conf**: Cấu hình Nginx
    - **package.json**: Metadata và dependency của dự án
    - **tsconfig.json**: Cấu hình TypeScript
    - **vite.config.ts**: Cấu hình Vite
    - **tailwind.config.js**: Cấu hình Tailwind CSS (theme, plugins, etc.)
    - **postcss.config.js**: Cấu hình PostCSS cho Tailwind CSS

### Cấu hình Tailwind CSS

Dự án sử dụng Tailwind CSS với các cấu hình sau:

1. **Theme**:
    - Màu sắc chính (primary) với 10 cấp độ từ 50-900
    - Font chữ mặc định: Inter var

2. **Components**:
    - Button (btn, btn-primary, btn-secondary)
    - Input (input)
    - Card (card)

3. **Base Styles**:
    - Antialiased text
    - Màu nền mặc định: gray-50
    - Màu chữ mặc định: gray-900
