"use client";

import { Suspense, useEffect, useState, useRef } from "react";
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
      if (!company.company) {
        console.log("⏳ Aguardando company carregar...");
        return;
      }

      if (exec.current) return;
      exec.current = true;

        // Se existir token, tenta autenticar
        if (token.token) {
          if (company.company.verification === false) {
            const email = await sendEmail(company.company.id);
            if (email) {
              const data = {
                email: company.company.email,
                idOTP: email,
                companyId: company.company.id,
              };
              const objStr = encodeURIComponent(JSON.stringify(data));
              router.push(`/verification/email?info=${objStr}`);
              return;
            }
          }

          // Valida token com backend
          const res = await req.get("/private", {
            headers: { Authorization: `Bearer ${token.token}` },
          });

          if (res.data?.error) {
            router.push("/auth/lognin");
            return;
          }

          router.push("/deshboard");
          return;
        }

        // Se não houver token mas a conta ainda precisa verificar email
        if (company.company.verification === false) {
          const email = await sendEmail(company.company.id);
          if (email) {
            const data = {
              email: company.company.email,
              idOTP: email,
              companyId: company.company.id,
            };
            const objStr = encodeURIComponent(JSON.stringify(data));
            router.push(`/verification/email?info=${objStr}`);
            return;
          }
        }
      } catch (err) {
        console.error("Erro na verificação:", err);
        setError(
          "Sua sessão foi encerrada por inatividade ou por motivos de segurança. Por favor, faça login novamente para continuar usando o sistema."
        );
        localStorage.removeItem("token");
        localStorage.removeItem("company");
        company.clearCompany();
        token.clearToken();
        setTimeout(() => {
          router.push("/auth/lognin");
        }, 2000);
      }
    };

    run();
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