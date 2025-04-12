"use client";

import { useState } from "react";
import { Lead } from "../types/Lead";
import { LeadErrors } from "../types/LeadErrors";
import { submitLead } from "../api/leadService";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormStatus from "./FormStatus";

const Form = () => {
  const [form, setForm] = useState<Lead>({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: LeadErrors = {};
    if (!form.name) newErrors.name = "Nome é obrigatório";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email inválido";
    if (!form.phone) newErrors.phone = "Telefone é obrigatório";
    if (!form.consent) newErrors.consent = "É necessário aceitar os termos";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      await submitLead(form);
      setStatus("success");
    } catch {
      setStatus("error");
      localStorage.setItem("lead_backup", JSON.stringify(form));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">📥 Formulário de Lead</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <FormCheckbox
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          label="Aceito os termos da LGPD"
          error={errors.consent}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>

        <FormStatus status={status} />
      </form>
    </div>
  );
};

export default Form;
