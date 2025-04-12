import { Status } from "../types/Form";

const FormStatus = ({ status }: Status) => {
  if (status === "success") {
    return <p className="text-green-600">Lead enviado com sucesso!</p>;
  }

  if (status === "error") {
    return (
      <p className="text-red-600">Erro ao enviar. Salvamos no localStorage!</p>
    );
  }

  return null;
};

export default FormStatus;
