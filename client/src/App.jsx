import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Admin/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import AboutPage from "./pages/Admin/AboutPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import ChangePassword from "./pages/Auth/ChangePassword";
import ConfirmAccount from "./pages/Auth/ConfirmAccount";
import { AuthProvider } from "./providers/AuthProvider";

const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccount />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/auth/change-password/:token" element={<ChangePassword />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>

  )
}

export default App;
