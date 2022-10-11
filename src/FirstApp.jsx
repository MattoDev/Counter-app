const newMessage = {
  message: "Hola mundo",
  title: "El Mateo",
};

const saludo = () => {
  return `Saludo desde la funcion ${2 + 2}`;
};
export function App2() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <code>{saludo()}</code>
      <p>Soy un puto subtitulo</p>
    </>
  );
}
