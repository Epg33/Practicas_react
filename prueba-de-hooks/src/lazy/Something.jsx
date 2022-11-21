import React from "react";

function Something() {
  return (
    <>
      <h1>Historia clinica</h1>
      <h2>Servicio de atencion prehospitalaria</h2>
      <h3>NIT 901.980.598-1</h3>
      <p>
        Tel 732 11 89 Cel. 318 232 9017 - 314 663 1892 - Email:
        saphsas@gmail.com
      </p>
      <form action="">
        <input type="text" />
        <label htmlFor="no-historia">No. HISTORIA CLINICA:</label>
        <input type="number" id="no-historia" />
        <label htmlFor="st-evento">SITIO DE EVENTO:</label>
        <input type="text" id="st-evento" />
        <label htmlFor="movil">MOVIL:</label>
        <input type="number" id="movil" />
        <label htmlFor="placa">PLACA:</label>
        <input type="text" id="placa" />
        <label htmlFor="fecha">FECHA:</label>
        <input type="date" name="" id="fecha" />
        <label htmlFor="hr-evento">HORA EVENTO:</label>
        <input type="text" id="hr-evento" />
        <label htmlFor="hr-llamada">HORA LLAMADA:</label>
        <input type="text" id="hr-llamada" />
        <div>
          <h3>TRIAJE</h3>
          <select name="triaje" id="">
            <option value="">Seleccionar tipo de triaje</option>
            <option value="Riesgo vital inmediato">
              NIVEL 1: Riesgo vital inmediato
            </option>
            <option value="Muy urgente">NIVEL 2: Muy urgente</option>
            <option value="Urgente">NIVEL 3: Urgente</option>
            <option value="Normal">NIVEL 4: Normal</option>
            <option value="No urgente">NIVEL 5: No urgente</option>
          </select>
        </div>
        <label htmlFor="qu-servicio">QUIEN SOLICITA SERVICIO:</label>
        <input type="text" name="" id="qu-servicio" />
        <div>
          <label htmlFor="zona">ZONA:</label>
          <label htmlFor="R">R</label>
          <input type="checkbox" name="" id="R" value="R" />
          <label htmlFor="U">U</label>
          <input type="checkbox" name="" id="U" value="U" />
        </div>
        <label htmlFor="hr-llegada">HORA LLEGADA:</label>

        <label htmlFor="municipio">MUNICIPIO:</label>
        <input type="text" name="" id="municipio" />
        <label htmlFor="departamento">DEPARTAMENTO:</label>
        <input type="text" name="" id="departamento" />
        <div></div>

        <label htmlFor="aseguradora">ASEGURADORA:</label>
        <input type="text" id="aseguradora" />
        <label htmlFor="poliza">POLIZA AT:</label>
        <input type="text" name="" id="poliza" />

        <label htmlFor="placa-vh">PLACA DEL VEHICULO ACC.</label>
        <input type="text" name="" id="placa-vh" />
        <label htmlFor="cond.accidentado">COND.ACCIDENTADO:</label>
        <input type="text" name="" id="cond.accidentado" />
        <div>
          <label htmlFor="CONDUCTOR">CONDUCTOR</label>
          <input type="checkbox" name="" id="CONDUCTOR" value="CONDUCTOR" />
          <label htmlFor="OCUPANTE">OCUPANTE</label>
          <input type="checkbox" name="" id="OCUPANTE" value="OCUPANTE" />
          <label htmlFor="PEATON">PEATON</label>
          <input type="checkbox" name="" id="PEATON" value="PEATON" />
          <label htmlFor="CICLISTA">CICLISTA</label>
          <input type="checkbox" name="" id="CICLISTA" value="CICLISTA" />
        </div>
        <div></div>
        <label htmlFor="nom-ape">NOMBRES Y APELLIDOS:</label>
        <input type="text" name="" id="nom-ape" />
        <div>
          <label htmlFor="">SEXO:</label>
          <label htmlFor="M">M</label>
          <input type="checkbox" name="" id="M" value="M" />
          <label htmlFor="F">F</label>
          <input type="checkbox" name="" id="F" value="F" />
        </div>
        <div>
          <label htmlFor="C.C">C.C</label>
          <input type="checkbox" name="" id="C.C" value="C.C" />
          <label htmlFor="T.I.">T.I.</label>
          <input type="checkbox" name="" id="T.I." value="T.I." />
          <label htmlFor="R.C.">R.C.</label>
          <input type="checkbox" name="" id="R.C." value="R.C." />
          <label htmlFor="C.E.">C.E.</label>
          <input type="checkbox" name="" id="C.E." value="C.E." />
        </div>
        <label htmlFor="No.identidad">No.IDENTIDAD</label>
        <input type="number" name="" id="no.identidad" />
        <label htmlFor="fc-nacimiento">FECHA DE NACIMIENTO:</label>
        <input type="text" name="" id="fc-nacimiento" />
        <label htmlFor="edad">EDAD:</label>
        <input type="number" name="" id="edad" />
        <label htmlFor="dr-residencia">DIRECCION RESIDENCIA:</label>
        <input type="text" name="" id="dr-residencia" />
        <label htmlFor="muni">MUNICIPIO</label>
        <input type="text" name="" id="muni" />
        <label htmlFor="telefono">TELEFONO</label>
        <input type="number" name="" id="telefono" />
        <label htmlFor="ocupacion">OCUPACION:</label>
        <input type="text" name="" id="ocupacion" />
        <label htmlFor="est-civil">ESTADO CIVIL:</label>
        <input type="text" name="" id="est-civil" />
        <label htmlFor="acompañante">ACOMPAÑANTE</label>
        <input type="text" id="acompañante" />
        <label htmlFor="parentesco">PARENTESCO</label>
        <input type="text" name="" id="parentesco" />
        <label htmlFor="telf">TELEFONO</label>
        <input type="number" name="" id="telf"></input>
      </form>
    </>
  );
}

export default Something;
