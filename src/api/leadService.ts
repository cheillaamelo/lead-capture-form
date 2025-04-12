import { Lead } from "../types/Lead";

export const submitLead = (lead: Lead): Promise<{ success: boolean }> => {
  console.log(lead); // Usa a variável para evitar warning
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve({ success: true });
      } else {
        reject();
      }
    }, 1000);
  });
};
