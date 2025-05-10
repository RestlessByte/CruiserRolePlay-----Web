import { Metadata } from "next";
import { Header } from "../ui/header";
import { Home } from "../ui/home";
export const metadata: Metadata = {
  title: 'CRUISER ONLINE',
  description: 'CRUISER ONLINE - сервер из мира Grand Theft Auto, где ты можешь стать абсолютно кем нахочешь = все двери открыты! - Скачивай скорее наш лаунчер и играй с кайфон'
}
export default function Page() {
  return (
    <div>
      <Header><Home /></Header>
    </div>)

}