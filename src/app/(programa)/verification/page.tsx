"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { sendEmail } from "@/services/auth";
import { useCompanyStore } from "@/store/company";
import { useTokenStore } from "@/store/token";
import { req } from "@/utils/axios";
import { useRouter } from "next/navigation";

const VerificationContent = () => {
  const exec = useRef(false);
  const router = useRouter();
  const token = useTokenStore();
  const company = useCompanyStore();
  const [error, setError] = useState<string>();

  useEffect(() => {
    console.log("🔄 useEffect rodou!");
    console.log("🧩 Token:", token.token);
    console.log("🏢 Company:", company.company);

    const run = async () => {
      try {
        // Só segue quando tiver os dados da company
        if (!company.company) {
          console.log("⏳ Aguardando company carregar...");
          return;
        }

        // Garante execução única por montagem/estado carregado
        if (exec.current) {
          console.log("⛔ Exec já rodou, abortando nova execução.");
          return;
        }
        exec.current = true;

        // Se não houver token, direciona para login (mantive rota original 'lognin' caso seu app use ela)
        if (!token.token) {
          console.warn("⚠️ Nenhum token encontrado — redirecionando para login...");
          router.replace("/auth/lognin");
          return;
        }

        // Se a empresa não estiver verificada -> enviar email UMA vez por sessão
        if (company.company.verification === false) {
          const key = `verification_sent_${company.company.id}`;

          // Se já enviamos nesta sessão, apenas redireciona com os dados armazenados
          const cached = sessionStorage.getItem(key);
          if (cached) {
            console.log("♻️ Já enviado nesta sessão — redirecionando com dados em cache.");
            router.replace(`/verification/email?info=${encodeURIComponent(cached)}`);
            return;
          }

          console.log("📨 Enviando e-mail de verificação...");
          const emailId = await sendEmail(company.company.id);

          // Se backend retornou id do OTP (ou similar), montamos dados e guardamos na sessão
          if (emailId) {
            const data = {
              email: company.company.email,
              idOTP: emailId,
              companyId: company.company.id,
            };
            const objStr = JSON.stringify(data);
            sessionStorage.setItem(key, objStr);
            router.replace(`/verification/email?info=${encodeURIComponent(objStr)}`);
            return;
          } else {
            // Se não retornou, registra erro e não fica tentando em loop
            console.warn("⚠️ sendEmail não retornou id. Não será re-tentado automaticamente.");
            setError("Não foi possível enviar o e-mail de verificação. Tente novamente mais tarde.");
            return;
          }
        }

        // Se a empresa já estiver verificada, valida token no backend
        console.log("🔐 Validando token no backend...");
        const res = await req.get("/private", {
          headers: { Authorization: `Bearer ${token.token}` },
        });

        if (res.data?.error) {
          console.warn("⚠️ Token inválido — redirecionando para login...");
          // limpar estado opcional
          localStorage.removeItem("token");
          localStorage.removeItem("company");
          company.clearCompany();
          token.clearToken();
          router.replace("/auth/lognin");
          return;
        }

        console.log("✅ Token válido — indo para dashboard...");
        router.replace("/deshboard");
      } catch (err) {
        console.error("❌ Erro na verificação:", err);
        setError(
          "Sua sessão expirou ou ocorreu um erro. Faça login novamente para continuar."
        );
        // Limpeza e redirecionamento seguros
        localStorage.removeItem("token");
        localStorage.removeItem("company");
        company.clearCompany();
        token.clearToken();
        setTimeout(() => router.replace("/auth/lognin"), 2000);
      }
    };

    run();
    // Dependências: reexecuta quando store mudar (p.ex. company carregou)
  }, [company.company, token.token, router, company, token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin shadow-lg"></div>
      {error ? (
        <p className="mt-6 text-center text-xs font-semibold tracking-widest drop-shadow-lg">
          {error}
        </p>
      ) : (
        <p className="mt-6 text-xl font-semibold tracking-widest drop-shadow-lg">
          Carregando...
        </p>
      )}
    </div>
  );
};

export default function Verification() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-white transition-all duration-700">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin shadow-2xl"></div>
          <p className="mt-6 text-lg font-semibold tracking-wider drop-shadow-lg animate-pulse">
            Preparando verificação...
          </p>
        </div>
      }
    >
      <VerificationContent />
    </Suspense>
  );
}