import useAuth from "../hooks/useAuth"

export default function Home() {
  const {user, signin} = useAuth();
  console.log(`user ${user}`)
  return (
    <div>
      <h2>Aprenda programação direto ao ponto 100% free</h2>
      <button onClick={()=> signin()}>Entrar com github</button>
    </div>
  )
}
