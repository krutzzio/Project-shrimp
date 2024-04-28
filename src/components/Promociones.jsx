import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

const Promociones = () => {

  const [numerosAleatorios, setNumerosAleatorios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioInput, setUsuarioInput] = useState("");

  function generarCodigo() {
    const codigoAleatorio = Math.floor(100000 + Math.random() * 900000);
    return codigoAleatorio;
  }

  function generarPromocion() {
    let usuario = document.getElementById("usuario").value;
    if (usuario.includes("@")) {
      usuario = usuario.replace("@", "");
    }
    const codigo = generarCodigo();
    setNumerosAleatorios([codigo, ...numerosAleatorios]);
    setUsuarios([usuario, ...usuarios]);
    setUsuarioInput("");
  }

  function copiarCodigo(codigo) {
    navigator.clipboard.writeText(codigo)
      .catch((error) => console.error('Error al copiar el código: ', error));
  }

  const handleInputChange = (e) => {
    setUsuarioInput(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">Crea tu promoción</h2>
        <article className="flex flex-col justify-start text-sm">
          <label className="w-fit">
            Usuario Instagram
          </label>
          <Input
            isRequired
            variant="underlined"
            className="input-form"
            type="text"
            id="usuario"
            name="usuario"
            placeholder="@nombre"
            onChange={handleInputChange}
          />
        </article>
        <Button
          isDisabled={!usuarioInput}
          color="secondary"
          className="text-white w-36"
          onClick={generarPromocion}
        >
          Generar código
        </Button>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <h2 className="font-bold text-lg">Promociones que has dado</h2>

        <Table removeWrapper aria-label="">
          <TableHeader>
            <TableColumn>CÓDIGO</TableColumn>
            <TableColumn>USUARIO</TableColumn>
            <TableColumn>COPIAR</TableColumn>
          </TableHeader>
          <TableBody>
            {
              numerosAleatorios.map((codigo, index) => (
              <TableRow key={index}>
                <TableCell>{codigo}</TableCell>
                <TableCell>@{usuarios[index]}</TableCell>
                <TableCell><Button onClick={() => copiarCodigo(codigo)}>Copiar</Button></TableCell>
              </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Promociones;
