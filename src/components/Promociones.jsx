/* eslint-disable react/prop-types */
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
import { useContext, useState } from "react";
import { crearPromo } from "../utils/fetchs/crearPromo";
import { UserInfoContext } from "../contexts/UserInfoContext";

const Promociones = ({ promos, setPromos }) => {
  const { user } = useContext(UserInfoContext)
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
    crearPromo({ userInsta: usuario, codigo, restId: user.id })
    setPromos([...promos, { id: 900000, usuarioInstagram: usuario, codigo, RestauranteId: user.id }])
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
            value={usuarioInput}
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
              promos.map(promo => {
                return (
                  <TableRow key={promo.id}>
                    <TableCell>{promo.codigo}</TableCell>
                    <TableCell>@{promo.usuarioInstagram}</TableCell>
                    <TableCell><Button onClick={() => copiarCodigo(promo.codigo)}>Copiar</Button></TableCell>
                  </TableRow>)
              })
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Promociones;
