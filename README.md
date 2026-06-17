# Greenak

Лендінг сонячних станцій (React + Vite).

## Опитувальник і листи на пошту

Кнопка «Підібрати станцію» відкриває багатокроковий опитувальник. Відправка — через [Web3Forms](https://web3forms.com) (без власного сервера).

1. Зареєструйтесь на web3forms.com і вкажіть email для заявок.
2. Скопіюйте Access Key у файл `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=ваш_ключ
```

3. На Vercel / Netlify додайте ту саму змінну в Environment Variables.
4. Перезапустіть `npm run dev` або зробіть redeploy.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
